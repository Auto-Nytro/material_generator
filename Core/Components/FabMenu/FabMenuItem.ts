import { Vars, MaybeVar, Dp, ShapeRadii, TextStyle, Elevation } from "@internal/prelude";

export interface FabMenuItem {
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerElevation: MaybeVar<Elevation>,
  readonly spaceLeading: Dp,
  readonly spaceMiddle: Dp,
  readonly spaceTrailing: Dp,
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly iconSize: Dp,
}

export const create = (): FabMenuItem => ({
  containerHeight: Dp.create(56),
  containerShape: Vars.ShapeScheme.Full(),
  containerElevation: Vars.ElevationScheme.Level0(),
  spaceLeading: Dp.create(24),
  spaceMiddle: Dp.create(8),
  spaceTrailing: Dp.create(24),
  labelStyle: Vars.Typescale.TitleMedium(),
  iconSize: Dp.create(24),
});