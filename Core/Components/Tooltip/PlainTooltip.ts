import { Vars, MaybeVar, Color, ShapeRadii, TextStyle } from "@internal/prelude";

export interface PlainTooltip {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly supportingTextStyle: MaybeVar<TextStyle>,
  readonly supportingTextColor: MaybeVar<Color>,
}

export const create = (): PlainTooltip => ({
  containerColor: Vars.ColorScheme.InverseSurface(),
  containerShape: Vars.ShapeScheme.ExtraSmall(),
  supportingTextStyle: Vars.Typescale.BodySmall(),
  supportingTextColor: Vars.ColorScheme.InverseOnSurface(),
});

export const PlainTooltip = {
  create,
};