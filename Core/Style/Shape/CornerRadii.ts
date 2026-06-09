import { Dp, CircleRadius } from "@internal/prelude";

export interface CornerRadii {
  readonly none: Dp,
  readonly extraSmall: Dp,
  readonly small: Dp,
  readonly medium: Dp,
  readonly large: Dp,
  readonly largeIncreased: Dp,
  readonly extraLarge: Dp,
  readonly extraLargeIncreased: Dp,
  readonly extraExtraLarge: Dp,
  readonly full: CircleRadius,
}

export const baseline = (): CornerRadii => {
  return {
    none: Dp.create(0),
    extraSmall: Dp.create(4),
    small: Dp.create(8),
    medium: Dp.create(12),
    large: Dp.create(16),
    largeIncreased: Dp.create(20),
    extraLarge: Dp.create(28),
    extraLargeIncreased: Dp.create(32),
    extraExtraLarge: Dp.create(48),
    full: CircleRadius.create(),
  };
};