/**
 * iqFleetSync monthly price.
 * Full units are graduated: the first 15 at 1.50 €, the next 35 at 1.30 €,
 * the next 50 at 1.10 €, and anything above 100 at 0.90 €.
 * Vehicles fill those tiers first, then work machines. Both are full units
 * at the same tier prices, shown on their own lines.
 * A trailer is then half a unit in the tier it falls into, so its price is
 * half the vehicle price of that tier.
 * Attachments cost nothing and do not take a place in a tier.
 * Amounts stay in whole cents.
 */
const FLEETSYNC_BASE_CENTS = 1000;
const FLEETSYNC_TIERS = [
  { capUnits: 15, cents: 150 },
  { capUnits: 50, cents: 130 },
  { capUnits: 100, cents: 110 },
  { capUnits: Infinity, cents: 90 },
];

function sanitizeFleetCount(value) {
  if (value === "" || value == null) return 0;
  const parsed = Number(String(value).replace(",", "."));
  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return Math.min(100000, Math.floor(parsed));
}

function tierAtHalf(cursorHalves) {
  for (let index = 0; index < FLEETSYNC_TIERS.length; index += 1) {
    const tier = FLEETSYNC_TIERS[index];
    const end = tier.capUnits === Infinity ? Infinity : tier.capUnits * 2;
    if (cursorHalves < end) {
      return {
        rateCents: tier.cents,
        room: end === Infinity ? Infinity : end - cursorHalves,
      };
    }
  }
  const last = FLEETSYNC_TIERS[FLEETSYNC_TIERS.length - 1];
  return { rateCents: last.cents, room: Infinity };
}

function consumeFleetItems(lines, state, itemCount, halvesEach, kind) {
  let leftHalves = itemCount * halvesEach;
  while (leftHalves > 0) {
    const tier = tierAtHalf(state.cursor);
    const room = tier.room === Infinity ? leftHalves : tier.room;
    const take = Math.min(leftHalves, room);
    if (take <= 0) break;
    const amountCents = take * (tier.rateCents / 2);
    const rateCents = kind === "trailer" ? tier.rateCents / 2 : tier.rateCents;
    lines.push({
      kind,
      count: take / halvesEach,
      rateCents,
      amountCents,
    });
    state.cursor += take;
    leftHalves -= take;
  }
}

function quoteFleetSync(vehicles, machines, trailers, attachments) {
  const vehicleCount = sanitizeFleetCount(vehicles);
  const machineCount = sanitizeFleetCount(machines);
  const trailerCount = sanitizeFleetCount(trailers);
  const attachmentCount = sanitizeFleetCount(attachments);
  const lines = [];
  const state = { cursor: 0 };

  consumeFleetItems(lines, state, vehicleCount, 2, "vehicle");
  consumeFleetItems(lines, state, machineCount, 2, "machine");
  consumeFleetItems(lines, state, trailerCount, 1, "trailer");

  if (attachmentCount > 0) {
    lines.push({
      kind: "attachment",
      count: attachmentCount,
      rateCents: 0,
      amountCents: 0,
    });
  }

  const unitAmountCents = lines.reduce((sum, line) => sum + line.amountCents, 0);

  return {
    vehicles: vehicleCount,
    machines: machineCount,
    trailers: trailerCount,
    attachments: attachmentCount,
    lines,
    baseCents: FLEETSYNC_BASE_CENTS,
    unitAmountCents,
    totalCents: unitAmountCents + FLEETSYNC_BASE_CENTS,
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { quoteFleetSync, sanitizeFleetCount };
}
