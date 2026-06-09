import { Vars, MaybeVar, Dp, ShapeRadii, Elevation } from "@internal/prelude";

export interface FabMenuClose {
  readonly containerHeight: Dp,
  readonly containerWidth: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerElevation: MaybeVar<Elevation>,
  readonly iconSize: Dp,
}

export const create = (): FabMenuClose => {
  return {
    containerHeight: Dp.create(56),
    containerWidth: Dp.create(56),
    containerShape: Vars.ShapeScheme.Full(),
    containerElevation: Vars.ElevationScheme.Level3(),
    iconSize: Dp.create(20),
  };
};