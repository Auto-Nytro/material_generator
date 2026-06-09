import { Vars, MaybeVar, Color, Dp, ShapeRadii, TextStyle } from "@internal/prelude";

export interface Badge {
  readonly color: MaybeVar<Color>,
  readonly colorLarge: MaybeVar<Color>,
  readonly shape: MaybeVar<ShapeRadii>,
  readonly shapeLarge: MaybeVar<ShapeRadii>,
  readonly size: Dp,
  readonly sizeLarge: Dp,
  readonly labelColorLarge: MaybeVar<Color>,
  readonly labelStyleLarge: MaybeVar<TextStyle>,
}

export const create = (): Badge => {
  return {
    color: Vars.ColorScheme.Error(),
    colorLarge: Vars.ColorScheme.Error(),
    shape: Vars.ShapeScheme.Full(),
    shapeLarge: Vars.ShapeScheme.Full(),
    size: Dp.create(6),
    sizeLarge: Dp.create(16),
    labelColorLarge: Vars.ColorScheme.OnError(),
    labelStyleLarge: Vars.Typescale.LabelSmall(),
  };
};

export const Badge = {
  create,
};