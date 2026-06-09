import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, ElevationSchemeKey } from "@internal/prelude";

export interface ToolbarStandard {
  // TODO: Should this be moved to Toolbar?
  readonly spaceBetweenToolbarAndFab: Dp,

  readonly standardContainerColor: MaybeVar<Color>,
  readonly standardIconColor: MaybeVar<Color>,
  readonly vibrantContainerColor: MaybeVar<Color>,
  readonly vibrantIconColor: MaybeVar<Color>,

  readonly containerHeight: Dp,
  readonly containerWidth: Dp,
  readonly iconSize: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly ContainerElevation: MaybeVar<Elevation>,

  readonly mediumContainerHeight: Dp,
  readonly mediumContainerWidth: Dp,
  readonly mediumIconSize: Dp,
  readonly mediumContainerShape: MaybeVar<ShapeRadii>,
  readonly mediumContainerElevation: MaybeVar<Elevation>,
}

export const create = () => {
  return {
    spaceBetweenToolbarAndFab: Dp.create(8),

    standardContainerColor: Vars.ColorScheme.SecondaryContainer(),
    standardIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    vibrantContainerColor: Vars.ColorScheme.TertiaryContainer(),
    vibrantIconColor: Vars.ColorScheme.OnTertiaryContainer(),

    containerHeight: Dp.create(56),
    containerWidth: Dp.create(56),
    iconSize: Dp.create(24),

    containerShape: Vars.ShapeScheme.Large(),
    ContainerElevation: Vars.ElevationScheme.Level1(),

    mediumContainerHeight: Dp.create(80),
    mediumContainerWidth: Dp.create(80),
    mediumIconSize: Dp.create(28),
    mediumContainerShape: Vars.ShapeScheme.LargeIncreased(),
    mediumContainerElevation: Vars.ElevationScheme.Level2(),
  }
};