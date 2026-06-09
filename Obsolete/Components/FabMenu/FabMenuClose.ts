import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef } from "@internal/prelude";

export interface FabMenuClose {
  readonly containerHeight: Dp,
  readonly containerWidth: Dp,
  readonly iconSize: Dp,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
}

export const create = (): FabMenuClose => {
  return {
    containerHeight: Dp.create(56),
    containerWidth: Dp.create(56),
    iconSize: Dp.create(20),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    containerShape: Vars.ShapeScheme.Full(),
  };
};