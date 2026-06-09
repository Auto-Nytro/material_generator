import { Vars, MaybeVar, Dp, ShapeRadii, Elevation } from "@internal/prelude";

export interface FloatingToolbar {
  readonly containerHeightHorizontal: Dp,
  readonly containerHeightVertical: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerElevation: MaybeVar<Elevation>,
  readonly spaceLeading: Dp,
  readonly spaceTrailing: Dp,
  readonly spaceBetweenActions: Dp,
  readonly marginHorizontal: Dp,
  readonly marginVertical: Dp,
}

export const create = (): FloatingToolbar => {
  return {
    containerHeightHorizontal: Dp.create(64),
    containerHeightVertical: Dp.create(64),
    containerShape: Vars.ShapeScheme.Full(),
    containerElevation: Vars.ElevationScheme.Level3(),
    spaceLeading: Dp.create(8),
    spaceTrailing: Dp.create(8),
    spaceBetweenActions: Dp.create(4),
    marginHorizontal: Dp.create(16),
    marginVertical: Dp.create(24),
  };
};

export const FloatingToolbar = {
  create,
};