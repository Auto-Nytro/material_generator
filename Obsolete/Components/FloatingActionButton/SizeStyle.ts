import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef } from "@internal/prelude";

export interface SizeStyle {
  readonly iconSize: Dp,
  readonly containerHeight: Dp,
  readonly containerWidth: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly paddingX: Dp,
  readonly paddingY: Dp,
}

export const Compact = (): SizeStyle => {
  return {
    iconSize: Dp.create(24),
    containerHeight: Dp.create(56),
    containerWidth: Dp.create(56),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    paddingX: Dp.create(16),
    paddingY: Dp.create(16),
  };
};

export const Medium = (): SizeStyle => {
  return {
    iconSize: Dp.create(28),
    containerHeight: Dp.create(80),
    containerWidth: Dp.create(80),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    paddingX: Dp.create(16),
    paddingY: Dp.create(16),
  };
};

export const Large = (): SizeStyle => {
  return {
    iconSize: Dp.create(36),
    containerHeight: Dp.create(96),
    containerWidth: Dp.create(96),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    paddingX: Dp.create(16),
    paddingY: Dp.create(16),
  };
};
