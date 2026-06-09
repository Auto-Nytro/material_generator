import { Length, MaybeVar, TextStyle, Dp, ShapeRadii, Spring, Curve, Vars } from "@internal/prelude";

export interface ButtonSize {
  readonly containerHeight: Length,
  readonly outlineWidth: Length,
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly iconSize: Dp,
  readonly shapeRound: MaybeVar<ShapeRadii>,
  readonly shapeSquare: MaybeVar<ShapeRadii>,
  readonly shapeSelectedRound: MaybeVar<ShapeRadii>,
  readonly shapeSelectedSquare: MaybeVar<ShapeRadii>,
  readonly shapePressed: MaybeVar<ShapeRadii>,
  readonly shapeMorphSpring: MaybeVar<Spring>,
  readonly shapeMorphCurve: MaybeVar<Curve>,
  readonly spaceLeading: Dp,
  readonly spaceMiddle: Dp,
  readonly spaceTrailing: Dp,
}

export const ExtraSmall = (): ButtonSize => ({
  containerHeight: Dp.create(32),
  outlineWidth: Dp.create(1),
  labelStyle: Vars.Typescale.LabelLarge(),
  iconSize: Dp.create(20),
  shapeRound: Vars.ShapeScheme.Full(),
  shapeSquare: Vars.ShapeScheme.Medium(),
  shapeSelectedRound: Vars.ShapeScheme.Medium(),
  shapeSelectedSquare: Vars.ShapeScheme.Full(),
  shapePressed: Vars.ShapeScheme.Small(),
  shapeMorphSpring: Vars.SpringScheme.SpatialFast(),
  shapeMorphCurve: Vars.CurveScheme.ExpressiveSpatialFast(),
  spaceLeading: Dp.create(12),
  spaceMiddle: Dp.create(8),
  spaceTrailing: Dp.create(12),
});

export const Small = (): ButtonSize => ({
  containerHeight: Dp.create(40),
  outlineWidth: Dp.create(1),
  labelStyle: Vars.Typescale.LabelLarge(),
  iconSize: Dp.create(20),
  shapeRound: Vars.ShapeScheme.Full(),
  shapeSquare: Vars.ShapeScheme.Medium(),
  shapeSelectedRound: Vars.ShapeScheme.Medium(),
  shapeSelectedSquare: Vars.ShapeScheme.Full(),
  shapePressed: Vars.ShapeScheme.Small(),
  shapeMorphSpring: Vars.SpringScheme.SpatialFast(),
  shapeMorphCurve: Vars.CurveScheme.ExpressiveSpatialFast(),
  spaceLeading: Dp.create(16),
  spaceMiddle: Dp.create(8),
  spaceTrailing: Dp.create(16),
});

export const Medium = (): ButtonSize => ({
  containerHeight: Dp.create(56),
  outlineWidth: Dp.create(1),
  labelStyle: Vars.Typescale.BodyLarge(),
  iconSize: Dp.create(24),
  shapeRound: Vars.ShapeScheme.Full(),
  shapeSquare: Vars.ShapeScheme.Large(),
  shapeSelectedRound: Vars.ShapeScheme.Large(),
  shapeSelectedSquare: Vars.ShapeScheme.Full(),
  shapePressed: Vars.ShapeScheme.Medium(),
  shapeMorphSpring: Vars.SpringScheme.SpatialFast(),
  shapeMorphCurve: Vars.CurveScheme.ExpressiveSpatialFast(),
  spaceLeading: Dp.create(24),
  spaceMiddle: Dp.create(8),
  spaceTrailing: Dp.create(24),
});

export const Large = (): ButtonSize => ({
  containerHeight: Dp.create(96),
  outlineWidth: Dp.create(2),
  labelStyle: Vars.Typescale.HeadlineSmall(),
  iconSize: Dp.create(32),
  shapeRound: Vars.ShapeScheme.Full(),
  shapeSquare: Vars.ShapeScheme.ExtraLarge(),
  shapeSelectedRound: Vars.ShapeScheme.ExtraLarge(),
  shapeSelectedSquare: Vars.ShapeScheme.Full(),
  shapePressed: Vars.ShapeScheme.Large(),
  shapeMorphSpring: Vars.SpringScheme.SpatialFast(),
  shapeMorphCurve: Vars.CurveScheme.ExpressiveSpatialFast(),
  spaceLeading: Dp.create(48),
  spaceMiddle: Dp.create(12),
  spaceTrailing: Dp.create(48),
});

export const ExtraLarge = (): ButtonSize => ({
  containerHeight: Dp.create(136),
  outlineWidth: Dp.create(3),
  labelStyle: Vars.Typescale.HeadlineLarge(),
  iconSize: Dp.create(40),
  shapeRound: Vars.ShapeScheme.Full(),
  shapeSquare: Vars.ShapeScheme.ExtraLarge(),
  shapeSelectedRound: Vars.ShapeScheme.ExtraLarge(),
  shapeSelectedSquare: Vars.ShapeScheme.Full(),
  shapePressed: Vars.ShapeScheme.Large(),
  shapeMorphSpring: Vars.SpringScheme.SpatialFast(),
  shapeMorphCurve: Vars.CurveScheme.ExpressiveSpatialFast(),
  spaceLeading: Dp.create(64),
  spaceMiddle: Dp.create(16),
  spaceTrailing: Dp.create(64),
});

export const ButtonSize = {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
};