import { Vars, Dp, Pct, Spring, MaybeVar } from "@internal/prelude";

export interface Standard {
  readonly containerHeight: Dp,
  readonly betweenSpace: Dp,
  readonly pressedMotionSpring: MaybeVar<Spring>,
  readonly pressedWidthMultiplier: Pct,
}

export const ExtraSmall = (): Standard => {
  return {
    containerHeight: Dp.create(32),
    betweenSpace: Dp.create(18),
    pressedMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressedWidthMultiplier: Pct.create(15),
  }
};

export const Small = (): Standard => {
  return {
    containerHeight: Dp.create(40),
    betweenSpace: Dp.create(12),
    pressedMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressedWidthMultiplier: Pct.create(15),
  }
};

export const Medium = (): Standard => {
  return {
    containerHeight: Dp.create(56),
    betweenSpace: Dp.create(8),
    pressedMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressedWidthMultiplier: Pct.create(15),
  }
};

export const Large = (): Standard => {
  return {
    containerHeight: Dp.create(96),
    betweenSpace: Dp.create(8),
    pressedMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressedWidthMultiplier: Pct.create(15),
  }
};

export const ExtraLarge = (): Standard => {
  return {
    containerHeight: Dp.create(136),
    betweenSpace: Dp.create(8),
    pressedMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressedWidthMultiplier: Pct.create(15),
  }
};
