/**
 * Regression tests for iqFleetSync monthly pricing.
 * Run: node --test js/pricing-calc.test.js
 */
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { quoteFleetSync, sanitizeFleetCount } = require("./pricing-calc.js");

describe("sanitizeFleetCount", () => {
  it("treats blank, non-numeric, and negative values as zero", () => {
    assert.equal(sanitizeFleetCount(""), 0);
    assert.equal(sanitizeFleetCount(null), 0);
    assert.equal(sanitizeFleetCount(undefined), 0);
    assert.equal(sanitizeFleetCount("abc"), 0);
    assert.equal(sanitizeFleetCount(-3), 0);
    assert.equal(sanitizeFleetCount("-1"), 0);
  });

  it("floors decimals, accepts a comma decimal, and caps huge inputs", () => {
    assert.equal(sanitizeFleetCount(2.9), 2);
    assert.equal(sanitizeFleetCount("1,7"), 1);
    assert.equal(sanitizeFleetCount("9999999"), 100000);
  });
});

describe("quoteFleetSync", () => {
  it("charges only the 10 € base fee when the fleet is empty", () => {
    const quote = quoteFleetSync(0, 0, 0, 0);
    assert.equal(quote.baseCents, 1000);
    assert.equal(quote.unitAmountCents, 0);
    assert.equal(quote.totalCents, 1000);
    assert.deepEqual(quote.lines, []);
  });

  it("prices the first 15 full units at 1.50 € and splits the next tier at 1.30 €", () => {
    assert.equal(quoteFleetSync(15, 0, 0, 0).totalCents, 3250);
    assert.deepEqual(quoteFleetSync(16, 0, 0, 0).lines, [
      { kind: "vehicle", count: 15, rateCents: 150, amountCents: 2250 },
      { kind: "vehicle", count: 1, rateCents: 130, amountCents: 130 },
    ]);
    assert.equal(quoteFleetSync(16, 0, 0, 0).totalCents, 3380);
  });

  it("applies the 1.10 € and 0.90 € tiers at the 51st and 101st full units", () => {
    assert.equal(quoteFleetSync(51, 0, 0, 0).totalCents, 7910);
    assert.equal(quoteFleetSync(101, 0, 0, 0).totalCents, 13390);
  });

  it("fills graduated tiers with vehicles before work machines", () => {
    const quote = quoteFleetSync(10, 10, 0, 0);
    assert.deepEqual(quote.lines, [
      { kind: "vehicle", count: 10, rateCents: 150, amountCents: 1500 },
      { kind: "machine", count: 5, rateCents: 150, amountCents: 750 },
      { kind: "machine", count: 5, rateCents: 130, amountCents: 650 },
    ]);
    assert.equal(quote.totalCents, 3900);
  });

  it("prices a trailer as half a unit in the tier it falls into", () => {
    assert.deepEqual(quoteFleetSync(0, 0, 1, 0).lines, [
      { kind: "trailer", count: 1, rateCents: 75, amountCents: 75 },
    ]);
    assert.equal(quoteFleetSync(0, 0, 1, 0).totalCents, 1075);

    // 15 full units fill the 1.50 € tier; the next trailer is half of 1.30 €.
    const afterVehicles = quoteFleetSync(15, 0, 1, 0);
    assert.deepEqual(afterVehicles.lines[1], {
      kind: "trailer",
      count: 1,
      rateCents: 65,
      amountCents: 65,
    });
    assert.equal(afterVehicles.totalCents, 3315);
  });

  it("lists attachments at 0 € without consuming a tier slot", () => {
    const quote = quoteFleetSync(1, 0, 0, 5);
    assert.deepEqual(quote.lines, [
      { kind: "vehicle", count: 1, rateCents: 150, amountCents: 150 },
      { kind: "attachment", count: 5, rateCents: 0, amountCents: 0 },
    ]);
    assert.equal(quote.unitAmountCents, 150);
    assert.equal(quote.totalCents, 1150);
  });

  it("sanitizes dirty inputs before quoting", () => {
    const quote = quoteFleetSync("-2", "3.9", "1,5", "nope");
    assert.equal(quote.vehicles, 0);
    assert.equal(quote.machines, 3);
    assert.equal(quote.trailers, 1);
    assert.equal(quote.attachments, 0);
    assert.equal(quote.totalCents, quoteFleetSync(0, 3, 1, 0).totalCents);
  });
});
