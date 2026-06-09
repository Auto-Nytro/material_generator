import { Vars, MaybeVar, Dp, Color, ShapeRadii, ShapesRef } from "@internal/prelude";

export interface NavigationBar {
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly containerColor: MaybeVar<Color>,
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly interItemSpace: Dp,  
}

export const create = (): NavigationBar => {
  return {
    ContainerElevation: Vars.ElevationScheme.Level2(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    containerColor: Vars.ColorScheme.SurfaceContainer(),
    interItemSpace: Dp.create(0),
    containerHeight: Dp.create(64),
    containerShape: Vars.ShapeScheme.None(),
  };
};
