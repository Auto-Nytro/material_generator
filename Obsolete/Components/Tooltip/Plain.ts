import { Vars, MaybeVar, Color, ShapeRadii, ShapesRef, TextStyle, TypescaleRef } from "@internal/prelude";

export interface Plain {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly supportingTextStyle: MaybeVar<TextStyle>,
  readonly supportingTextColor: MaybeVar<Color>,
}

export const create = (): Plain => {
  return {
    containerColor: Vars.ColorScheme.InverseSurface(),
    containerShape: Vars.ShapeScheme.ExtraSmall(),
    supportingTextStyle: Vars.Typescale.BodySmall(),
    supportingTextColor: Vars.ColorScheme.InverseOnSurface(),
  };
};