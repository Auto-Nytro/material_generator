import { Reference, CornerRadii } from "@internal/prelude";

export const CornerRadiiReferences = {
  none: Reference.create(
    "CornerRadii.none",
    (it: CornerRadii) => it.none,
  ),
  extraSmall: Reference.create(
    "CornerRadii.extraSmall",
    (it: CornerRadii) => it.extraSmall,
  ),
  small: Reference.create(
    "CornerRadii.small",
    (it: CornerRadii) => it.small,
  ),
  medium: Reference.create(
    "CornerRadii.medium",
    (it: CornerRadii) => it.medium,
  ),
  large: Reference.create(
    "CornerRadii.large",
    (it: CornerRadii) => it.large,
  ),
  largeIncreased: Reference.create(
    "CornerRadii.largeIncreased",
    (it: CornerRadii) => it.largeIncreased,
  ),
  extraLarge: Reference.create(
    "CornerRadii.extraLarge",
    (it: CornerRadii) => it.extraLarge,
  ),
  extraLargeIncreased: Reference.create(
    "CornerRadii.extraLargeIncreased",
    (it: CornerRadii) => it.extraLargeIncreased,
  ),
  extraExtraLarge: Reference.create(
    "CornerRadii.extraExtraLarge",
    (it: CornerRadii) => it.extraExtraLarge,
  ),
} as const;