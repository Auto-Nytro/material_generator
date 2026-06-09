import { Vars, MaybeVar, Color, Dp, ShapeRadii, TextStyle } from "@internal/prelude";

export interface Badge {
  readonly color: MaybeVar<Color>,
  readonly shape: MaybeVar<ShapeRadii>,
  readonly size: Dp,
  readonly largeColor: MaybeVar<Color>,
  readonly largeShape: MaybeVar<ShapeRadii>,
  readonly largeSize: Dp,
  readonly largeLabelColor: MaybeVar<Color>,
  readonly largeLabelStyle: MaybeVar<TextStyle>,
}

export const create = (): Badge => {
  return {
    color: Vars.ColorScheme.Error(),
    shape: Vars.ShapeScheme.Full(),
    size: Dp.create(6),
    largeColor: Vars.ColorScheme.Error(),
    largeShape: Vars.ShapeScheme.Full(),
    largeSize: Dp.create(16),
    largeLabelColor: Vars.ColorScheme.OnError(),
    largeLabelStyle: Vars.Typescale.LabelSmall(),
  };
};