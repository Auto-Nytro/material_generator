import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef } from "@internal/prelude";

export interface FabMenuItem {
  readonly containerHeight: Dp,
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly iconSize: Dp,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly leadingSpace: Dp,
  readonly iconLabelSpace: Dp,
  readonly trailingSpace: Dp,
}

export const create = (): FabMenuItem => {
  return {
    containerHeight: Dp.create(56),
    labelStyle: Vars.Typescale.TitleMedium(),
    iconSize: Dp.create(24),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    containerShape: Vars.ShapeScheme.Full(),
    leadingSpace: Dp.create(24),
    iconLabelSpace: Dp.create(8),
    trailingSpace: Dp.create(24),
  };
};