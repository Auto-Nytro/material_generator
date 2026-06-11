import { Reference, TypefaceType } from "@internal/prelude";

export const TypefaceReferences = {
  brand: Reference.create(
    "typeface.brand",
    (it: TypefaceType) => it.brand,
  ),
  plain: Reference.create(
    "typeface.plain",
    (it: TypefaceType) => it.plain,
  ),
  weightBold: Reference.create(
    "typeface.weightBold",
    (it: TypefaceType) => it.weightBold,
  ),
  weightMedium: Reference.create(
    "typeface.weightMedium",
    (it: TypefaceType) => it.weightMedium,
  ),
  weightRegular: Reference.create(
    "typeface.weightRegular",
    (it: TypefaceType) => it.weightRegular,
  ),
} as const;