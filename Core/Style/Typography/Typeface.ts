import { FontFamily, FontWeight, Int } from "@internal/prelude";

export interface Typeface {
  readonly brand: FontFamily,
  readonly plain: FontFamily,
  readonly weightBold: FontWeight,
  readonly weightMedium: FontWeight,
  readonly weightRegular: FontWeight,
}

export const baseline = (): Typeface => {
  return {
    brand: FontFamily.create("Purisa"),
    plain: FontFamily.create("Purisa"),
    weightBold: FontWeight.create(Int.create(700)),
    weightMedium: FontWeight.create(Int.create(500)),
    weightRegular: FontWeight.create(Int.create(400)),
  };
};