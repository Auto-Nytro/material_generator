import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, ElevationSchemeKey } from "@internal/prelude";

export interface ExpandedNavigationRail {
  readonly containerWidthMinimum: Dp,
  readonly containerWidthMaximum: Dp,
  readonly topSpace: Dp,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly modalContainerElevation: MaybeVar<Elevation>,
  readonly containerColor: MaybeVar<Color>,
  readonly modalContainerColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly modalContainerShape: MaybeVar<ShapeRadii>,
}

export const create = (): ExpandedNavigationRail => {
  return {
    containerWidthMinimum: Dp.create(220),
    containerWidthMaximum: Dp.create(360),
    topSpace: Dp.create(44),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    modalContainerElevation: Vars.ElevationScheme.Level2(),
    containerColor: Vars.ColorScheme.Surface(),
    modalContainerColor: Vars.ColorScheme.SurfaceContainer(),
    containerShape: Vars.ShapeScheme.None(),
    modalContainerShape: Vars.ShapeScheme.Large(),
  }
};