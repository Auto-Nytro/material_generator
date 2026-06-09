import { Vars, MaybeVar, Dp, ShapeRadii } from "@internal/prelude";

export interface Size {
  readonly containerHeight: Dp,
  readonly containerWidth: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly paddingX: Dp,
  readonly paddingY: Dp,
  readonly iconSize: Dp,
}

// Material Design 3 has an older Small size that is no longer recommended.
// This is not that: This is a new size that sits between the older
// Small size and the Medium size.
export const Small = (): Size => {
  return {
    containerHeight: Dp.create(56),
    containerWidth: Dp.create(56),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    paddingX: Dp.create(16),
    paddingY: Dp.create(16),
    iconSize: Dp.create(24),
  };
};

export const Medium = (): Size => {
  return {
    containerHeight: Dp.create(80),
    containerWidth: Dp.create(80),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    paddingX: Dp.create(16),
    paddingY: Dp.create(16),
    iconSize: Dp.create(28),
  };
};

export const Large = (): Size => {
  return {
    containerHeight: Dp.create(96),
    containerWidth: Dp.create(96),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    paddingX: Dp.create(16),
    paddingY: Dp.create(16),
    iconSize: Dp.create(36),
  };
};
