import { Vars, MaybeVar, Dp, ShapeRadii, Spring } from "@internal/prelude";

export interface Size {
  readonly outlineWidth: Dp,
  readonly containerHeight: Dp,
  readonly containerShapeRound: MaybeVar<ShapeRadii>,
  readonly containerShapeSquare: MaybeVar<ShapeRadii>,
  readonly containerShapePressed: MaybeVar<ShapeRadii>,
  readonly containerShapeSelectedRound: MaybeVar<ShapeRadii>,
  readonly containerShapeSelectedSquare: MaybeVar<ShapeRadii>,
  readonly containerShapeMorphSpring: MaybeVar<Spring>,
  readonly iconSize: Dp,
  readonly spaceLeading: Dp,
  readonly spaceLeadingWide: Dp,
  readonly spaceLeadingNarrow: Dp,
  readonly spaceTrailing: Dp,
  readonly spaceTrailingWide: Dp,
  readonly spaceTrailingNarrow: Dp,
}

export const ExtraSmall = (): Size => {
  return {
    outlineWidth: Dp.create(1),
    containerHeight: Dp.create(32),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.Medium(),
    containerShapePressed: Vars.ShapeScheme.Small(),
    containerShapeSelectedRound: Vars.ShapeScheme.Medium(),
    containerShapeSelectedSquare: Vars.ShapeScheme.Full(),
    containerShapeMorphSpring: Vars.SpringScheme.SpatialFast(),
    iconSize: Dp.create(20),
    spaceLeading: Dp.create(6),
    spaceLeadingWide: Dp.create(10),
    spaceLeadingNarrow: Dp.create(4),
    spaceTrailing: Dp.create(6),
    spaceTrailingWide: Dp.create(10),
    spaceTrailingNarrow: Dp.create(4),
  };
};

export const Small = (): Size => {
  return {
    outlineWidth: Dp.create(1),
    containerHeight: Dp.create(40),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.Medium(),
    containerShapePressed: Vars.ShapeScheme.Small(),
    containerShapeSelectedRound: Vars.ShapeScheme.Medium(),
    containerShapeSelectedSquare: Vars.ShapeScheme.Full(),
    containerShapeMorphSpring: Vars.SpringScheme.SpatialFast(),
    iconSize: Dp.create(24),
    spaceLeading: Dp.create(8),
    spaceLeadingWide: Dp.create(14),
    spaceLeadingNarrow: Dp.create(4),
    spaceTrailing: Dp.create(8),
    spaceTrailingWide: Dp.create(14),
    spaceTrailingNarrow: Dp.create(4),
  };
};

export const Medium = (): Size => {
  return {
    outlineWidth: Dp.create(1),
    containerHeight: Dp.create(56),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.Large(),
    containerShapePressed: Vars.ShapeScheme.Medium(),
    containerShapeSelectedRound: Vars.ShapeScheme.Large(),
    containerShapeSelectedSquare: Vars.ShapeScheme.Full(),
    containerShapeMorphSpring: Vars.SpringScheme.SpatialFast(),
    iconSize: Dp.create(24),
    spaceLeading: Dp.create(16),
    spaceLeadingWide: Dp.create(24),
    spaceLeadingNarrow: Dp.create(12),
    spaceTrailing: Dp.create(16),
    spaceTrailingWide: Dp.create(24),
    spaceTrailingNarrow: Dp.create(12),
  };
};

export const Large = (): Size => {
  return {
    outlineWidth: Dp.create(2),
    containerHeight: Dp.create(96),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.ExtraLarge(),
    containerShapePressed: Vars.ShapeScheme.Large(),
    containerShapeSelectedRound: Vars.ShapeScheme.ExtraLarge(),
    containerShapeSelectedSquare: Vars.ShapeScheme.Full(),
    containerShapeMorphSpring: Vars.SpringScheme.SpatialFast(),
    iconSize: Dp.create(32),
    spaceLeading: Dp.create(32),
    spaceLeadingWide: Dp.create(48),
    spaceLeadingNarrow: Dp.create(16),
    spaceTrailing: Dp.create(32),
    spaceTrailingWide: Dp.create(48),
    spaceTrailingNarrow: Dp.create(16),
  };
};

export const ExtraLarge = (): Size => {
  return {
    outlineWidth: Dp.create(3),
    containerHeight: Dp.create(136),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.ExtraLarge(),
    containerShapePressed: Vars.ShapeScheme.Large(),
    containerShapeSelectedRound: Vars.ShapeScheme.ExtraLarge(),
    containerShapeSelectedSquare: Vars.ShapeScheme.Full(),
    containerShapeMorphSpring: Vars.SpringScheme.SpatialFast(),
    iconSize: Dp.create(40),
    spaceLeading: Dp.create(48),
    spaceLeadingWide: Dp.create(72),
    spaceLeadingNarrow: Dp.create(32),
    spaceTrailing: Dp.create(48),
    spaceTrailingWide: Dp.create(72),
    spaceTrailingNarrow: Dp.create(32),
  };
};

export const Size = {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
};