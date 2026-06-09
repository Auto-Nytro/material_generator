import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef, Spring, SpringsKey } from "@internal/prelude";

export interface Size {
  readonly containerHeight: Dp,
  readonly iconSize: Dp,
  readonly narrowLeadingSpace: Dp,
  readonly narrowTrailingSpace: Dp,
  readonly defaultLeadingSpace: Dp,
  readonly defaultTrailingSpace: Dp,
  readonly wideLeadingSpace: Dp,
  readonly wideTrailingSpace: Dp,
  readonly containerShapeRound: MaybeVar<ShapeRadii>,
  readonly containerShapeSquare: MaybeVar<ShapeRadii>,
  readonly outlineWidth: Dp,
  readonly shapePressedMorph: MaybeVar<ShapeRadii>,
  readonly shapeSpringAnimation: MaybeVar<Spring>,
  readonly selectedContainerShapeRound: MaybeVar<ShapeRadii>,
  readonly selectedContainerShapeSquare: MaybeVar<ShapeRadii>,
}

export const ExtraSmall = (): Size => {
  return {
    containerHeight: Dp.create(32),
    iconSize: Dp.create(20),
    narrowLeadingSpace: Dp.create(4),
    narrowTrailingSpace: Dp.create(4),
    defaultLeadingSpace: Dp.create(6),
    defaultTrailingSpace: Dp.create(6),
    wideLeadingSpace: Dp.create(10),
    wideTrailingSpace: Dp.create(10),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.Medium(),
    outlineWidth: Dp.create(1),
    shapePressedMorph: Vars.ShapeScheme.Small(),
    shapeSpringAnimation: Vars.SpringScheme.SpatialFast(),
    selectedContainerShapeRound: Vars.ShapeScheme.Medium(),
    selectedContainerShapeSquare: Vars.ShapeScheme.Full(),
  };
};

export const Small = (): Size => {
  return {
    containerHeight: Dp.create(40),
    iconSize: Dp.create(24),
    narrowLeadingSpace: Dp.create(4),
    narrowTrailingSpace: Dp.create(4),
    defaultLeadingSpace: Dp.create(8),
    defaultTrailingSpace: Dp.create(8),
    wideLeadingSpace: Dp.create(14),
    wideTrailingSpace: Dp.create(14),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.Medium(),
    outlineWidth: Dp.create(1),
    shapePressedMorph: Vars.ShapeScheme.Small(),
    shapeSpringAnimation: Vars.SpringScheme.SpatialFast(),
    selectedContainerShapeRound: Vars.ShapeScheme.Medium(),
    selectedContainerShapeSquare: Vars.ShapeScheme.Full(),
  };
};

export const Medium = (): Size => {
  return {
    containerHeight: Dp.create(56),
    iconSize: Dp.create(24),
    narrowLeadingSpace: Dp.create(12),
    narrowTrailingSpace: Dp.create(12),
    defaultLeadingSpace: Dp.create(16),
    defaultTrailingSpace: Dp.create(16),
    wideLeadingSpace: Dp.create(24),
    wideTrailingSpace: Dp.create(24),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.Large(),
    outlineWidth: Dp.create(1),
    shapePressedMorph: Vars.ShapeScheme.Medium(),
    shapeSpringAnimation: Vars.SpringScheme.SpatialFast(),
    selectedContainerShapeRound: Vars.ShapeScheme.Large(),
    selectedContainerShapeSquare: Vars.ShapeScheme.Full(),
  };
};

export const Large = (): Size => {
  return {
    containerHeight: Dp.create(96),
    iconSize: Dp.create(32),
    narrowLeadingSpace: Dp.create(16),
    narrowTrailingSpace: Dp.create(16),
    defaultLeadingSpace: Dp.create(32),
    defaultTrailingSpace: Dp.create(32),
    wideLeadingSpace: Dp.create(48),
    wideTrailingSpace: Dp.create(48),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.ExtraLarge(),
    outlineWidth: Dp.create(2),
    shapePressedMorph: Vars.ShapeScheme.Large(),
    shapeSpringAnimation: Vars.SpringScheme.SpatialFast(),
    selectedContainerShapeRound: Vars.ShapeScheme.ExtraLarge(),
    selectedContainerShapeSquare: Vars.ShapeScheme.Full(),
  };
};

export const ExtraLarge = (): Size => {
  return {
    containerHeight: Dp.create(136),
    iconSize: Dp.create(40),
    narrowLeadingSpace: Dp.create(32),
    narrowTrailingSpace: Dp.create(32),
    defaultLeadingSpace: Dp.create(48),
    defaultTrailingSpace: Dp.create(48),
    wideLeadingSpace: Dp.create(72),
    wideTrailingSpace: Dp.create(72),
    containerShapeRound: Vars.ShapeScheme.Full(),
    containerShapeSquare: Vars.ShapeScheme.ExtraLarge(),
    outlineWidth: Dp.create(3),
    shapePressedMorph: Vars.ShapeScheme.Large(),
    shapeSpringAnimation: Vars.SpringScheme.SpatialFast(),
    selectedContainerShapeRound: Vars.ShapeScheme.ExtraLarge(),
    selectedContainerShapeSquare: Vars.ShapeScheme.Full(),
  };
};

