/**
 * iqFleetSync monthly price.
 * Units are graduated: the first 15 at 1.50 €, the next 35 at 1.30 €,
 * the next 50 at 1.10 €, and anything above 100 at 0.90 €.
 * A trailer is half a unit. Amounts are kept in cents via half-units
 * so 0.50 € steps stay exact.
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

function quoteFleetSync(vehicles, trailers) {
  const vehicleCount = sanitizeFleetCount(vehicles);
  const trailerCount = sanitizeFleetCount(trailers);
  let remainingHalves = vehicleCount * 2 + trailerCount;
  const tiers = [];
  let previousCap = 0;

  FLEETSYNC_TIERS.forEach((tier) => {
    if (remainingHalves <= 0) return;
    const roomHalves =
      tier.capUnits === Infinity ? remainingHalves : (tier.capUnits - previousCap) * 2;
    const takeHalves = Math.min(remainingHalves, roomHalves);
    if (takeHalves > 0) {
      tiers.push({
        units: takeHalves / 2,
        rateCents: tier.cents,
        amountCents: takeHalves * (tier.cents / 2),
      });
      remainingHalves -= takeHalves;
    }
    previousCap = tier.capUnits;
  });

  const unitAmountCents = tiers.reduce((sum, tier) => sum + tier.amountCents, 0);

  return {
    vehicles: vehicleCount,
    trailers: trailerCount,
    vehicleUnits: vehicleCount,
    trailerUnits: trailerCount / 2,
    totalUnits: vehicleCount + trailerCount / 2,
    tiers,
    unitAmountCents,
    baseCents: FLEETSYNC_BASE_CENTS,
    totalCents: unitAmountCents + FLEETSYNC_BASE_CENTS,
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { quoteFleetSync, sanitizeFleetCount };
}
