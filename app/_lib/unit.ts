export enum Unit {
  Inches = "INCHES",
  Centimeters = "CENTIMETERS",
}

function toInches(w: number, u: Unit) {
  return u === Unit.Centimeters ? w / 2.54 : w;
}

export function toPixels(w: number, u: Unit) {
  const ppi = 96; // defined by css.
  return toInches(w, u) * ppi;
}