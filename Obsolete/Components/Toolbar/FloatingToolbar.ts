import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef, ElevationSchemeKey } from "@internal/prelude";

export interface FloatingToolbar {
  readonly containerHeightHorizontal: Dp,
  readonly containerHeightVertical: Dp,
  readonly leadingSpace: Dp,
  readonly trailingSpace: Dp,
  readonly marginFromScreenEdgeHorizontal: Dp,
  readonly marginFromScreenEdgeVertical: Dp,
  readonly spaceBetweenActions: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly ContainerElevation: MaybeVar<Elevation>,
}

export const create = (): FloatingToolbar => {
  return {
    containerHeightHorizontal: Dp.create(64),
    containerHeightVertical: Dp.create(64),
    leadingSpace: Dp.create(8),
    trailingSpace: Dp.create(8),
    marginFromScreenEdgeHorizontal: Dp.create(16),
    marginFromScreenEdgeVertical: Dp.create(24),
    spaceBetweenActions: Dp.create(4),
    containerShape: Vars.ShapeScheme.Full(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
  };
};