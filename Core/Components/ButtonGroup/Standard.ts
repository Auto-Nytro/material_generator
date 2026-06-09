import { Vars, Dp, Pct, Spring, MaybeVar } from "@internal/prelude";

export interface Standard {
  readonly containerHeight: Dp,
  readonly spaceInterButton: Dp,
  readonly pressMotionSpring: MaybeVar<Spring>,
  readonly pressWidthMultiplier: Pct,
}

export const ExtraSmall = (): Standard => {
  return {
    containerHeight: Dp.create(32),
    spaceInterButton: Dp.create(18),
    pressMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressWidthMultiplier: Pct.create(15),
  }
};

export const Small = (): Standard => {
  return {
    containerHeight: Dp.create(40),
    spaceInterButton: Dp.create(12),
    pressMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressWidthMultiplier: Pct.create(15),
  }
};

export const Medium = (): Standard => {
  return {
    containerHeight: Dp.create(56),
    spaceInterButton: Dp.create(8),
    pressMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressWidthMultiplier: Pct.create(15),
  }
};

export const Large = (): Standard => {
  return {
    containerHeight: Dp.create(96),
    spaceInterButton: Dp.create(8),
    pressMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressWidthMultiplier: Pct.create(15),
  }
};

export const ExtraLarge = (): Standard => {
  return {
    containerHeight: Dp.create(136),
    spaceInterButton: Dp.create(8),
    pressMotionSpring: Vars.SpringScheme.SpatialFast(),
    pressWidthMultiplier: Pct.create(15),
  }
};

export const Standard = {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
};