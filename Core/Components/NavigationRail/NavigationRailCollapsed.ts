import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, ElevationSchemeKey } from "@internal/prelude";

export interface CollapsedNavigationRail {
  readonly containerWidth: Dp,
  readonly narrowContainerWidth: Dp,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerColor: MaybeVar<Color>,
  readonly itemVerticalSpace: Dp,
  readonly itemTopSpace: Dp,
}

export const create = (): CollapsedNavigationRail => {
  return {
    containerWidth: Dp.create(96),
    narrowContainerWidth: Dp.create(80),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    containerShape: Vars.ShapeScheme.None(),
    containerColor: Vars.ColorScheme.Surface(),
    itemVerticalSpace: Dp.create(4),
    itemTopSpace: Dp.create(44),
  };
};