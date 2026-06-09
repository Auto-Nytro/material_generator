import { Vars, MaybeVar, Color, Dp, ShapeRadii, TextStyle, Opacity, Elevation } from "@internal/prelude";

export interface Snackbar {
  readonly containerHeight1Line: Dp,
  readonly containerHeight2Line: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerColor: MaybeVar<Color>,
  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,

  readonly supportingTextStyle: MaybeVar<TextStyle>,
  readonly supportingTextColor: MaybeVar<Color>,

  readonly labelStyle: MaybeVar<TextStyle>,
  readonly labelColor: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,

  readonly iconSize: Dp,
  readonly iconColor: MaybeVar<Color>,
  readonly iconColorHovered: MaybeVar<Color>,
  readonly iconColorFocused: MaybeVar<Color>,
  readonly iconColorPressed: MaybeVar<Color>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,

  readonly iconStateLayerColorHovered: MaybeVar<Color>,
  readonly iconStateLayerColorFocused: MaybeVar<Color>,
  readonly iconStateLayerColorPressed: MaybeVar<Color>,
  readonly iconStateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly iconStateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly iconStateLayerOpacityPressed: MaybeVar<Opacity>,
}

export const create = (): Snackbar => {
  return {
    containerHeight1Line: Dp.create(48),
    containerHeight2Line: Dp.create(68),
    containerShape: Vars.ShapeScheme.ExtraSmall(),
    containerColor: Vars.ColorScheme.InverseSurface(),
    containerElevation: Vars.ElevationScheme.Level3(),
    containerShadowColor: Vars.ColorScheme.Shadow(),

    labelStyle: Vars.Typescale.LabelLarge(),
    labelColor: Vars.ColorScheme.InversePrimary(),
    labelColorHovered: Vars.ColorScheme.InversePrimary(),
    labelColorFocused: Vars.ColorScheme.InversePrimary(),
    labelColorPressed: Vars.ColorScheme.InversePrimary(),

    supportingTextStyle: Vars.Typescale.BodyMedium(),
    supportingTextColor: Vars.ColorScheme.InverseOnSurface(),

    iconSize: Dp.create(24),
    iconColor: Vars.ColorScheme.InverseOnSurface(),
    iconColorHovered: Vars.ColorScheme.InverseOnSurface(),
    iconColorFocused: Vars.ColorScheme.InverseOnSurface(),
    iconColorPressed: Vars.ColorScheme.InverseOnSurface(),

    stateLayerColorHovered: Vars.ColorScheme.InversePrimary(),
    stateLayerColorFocused: Vars.ColorScheme.InversePrimary(),
    stateLayerColorPressed: Vars.ColorScheme.InversePrimary(),
    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),

    iconStateLayerColorHovered: Vars.ColorScheme.InverseOnSurface(),
    iconStateLayerColorFocused: Vars.ColorScheme.InverseOnSurface(),
    iconStateLayerColorPressed: Vars.ColorScheme.InverseOnSurface(),
    iconStateLayerOpacityHovered: Vars.Opacities.Hovered(),
    iconStateLayerOpacityFocused: Vars.Opacities.Focused(),
    iconStateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const Snackbar = {
  create,
};