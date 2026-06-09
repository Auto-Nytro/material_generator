import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui } from "@internal/prelude";

export interface Rich {
  readonly containerColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly actionLabelStyle: MaybeVar<TextStyle>,
  readonly actionLabelColor: MaybeVar<Color>,

  readonly subheadStyle: MaybeVar<TextStyle>,
  readonly subheadColor: MaybeVar<Color>,

  readonly supportingTextStyle: MaybeVar<TextStyle>,
  readonly supportingTextColor: MaybeVar<Color>,

  readonly actionHoverLabelColor: MaybeVar<Color>,
  readonly actionHoverStateLayerColor: MaybeVar<Color>,
  readonly actionHoverStateLayerOpacity: MaybeVar<Opacity>,

  readonly actionFocusLabelColor: MaybeVar<Color>,
  readonly actionFocusStateLayerColor: MaybeVar<Color>,
  readonly actionFocusStateLayerOpacity: MaybeVar<Opacity>,

  readonly actionPressedLabelColor: MaybeVar<Color>,
  readonly actionPressedStateLayerColor: MaybeVar<Color>,
  readonly actionPressedStateLayerOpacity: MaybeVar<Opacity>,
}

export const create = (): Rich => {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainer(),
    ContainerElevation: Vars.ElevationScheme.Level2(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    containerShape: Vars.ShapeScheme.Medium(),

    actionLabelStyle: Vars.Typescale.LabelLarge(),
    actionLabelColor: Vars.ColorScheme.Primary(),

    subheadStyle: Vars.Typescale.TitleSmall(),
    subheadColor: Vars.ColorScheme.OnSurfaceVariant(),

    supportingTextStyle: Vars.Typescale.BodyMedium(),
    supportingTextColor: Vars.ColorScheme.OnSurfaceVariant(),

    actionHoverLabelColor: Vars.ColorScheme.Primary(),
    actionHoverStateLayerColor: Vars.ColorScheme.Primary(),
    actionHoverStateLayerOpacity: Vars.Opacities.Hovered(),

    actionFocusLabelColor: Vars.ColorScheme.Primary(),
    actionFocusStateLayerColor: Vars.ColorScheme.Primary(),
    actionFocusStateLayerOpacity: Vars.Opacities.Focused(),

    actionPressedLabelColor: Vars.ColorScheme.Primary(),
    actionPressedStateLayerColor: Vars.ColorScheme.Primary(),
    actionPressedStateLayerOpacity: Vars.Opacities.Pressed(),
  };
};