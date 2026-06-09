import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui } from "@internal/prelude";

export interface Dialog {
  readonly containerColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly actionLabelStyle: MaybeVar<TextStyle>,
  readonly actionLabelColor: MaybeVar<Color>,

  readonly iconSize: Dp,
  readonly iconColor: MaybeVar<Color>,

  readonly headlineStyle: MaybeVar<TextStyle>,
  readonly headlineColor: MaybeVar<Color>,

  readonly supportingTextStyle: MaybeVar<TextStyle>,
  readonly supportingTextColor: MaybeVar<Color>,

  readonly actionHoveredLabelTextColor: MaybeVar<Color>,
  readonly actionHoveredStateLayerColor: MaybeVar<Color>,
  readonly actionHoveredStateLayerOpacity: MaybeVar<Opacity>,

  readonly actionFocusedLabelTextColor: MaybeVar<Color>,
  readonly actionFocusedStateLayerColor: MaybeVar<Color>,
  readonly actionFocusedStateLayerOpacity: MaybeVar<Opacity>,

  readonly actionPressedLabelTextColor: MaybeVar<Color>,
  readonly actionPressedStateLayerColor: MaybeVar<Color>,
  readonly actionPressedStateLayerOpacity: MaybeVar<Opacity>,
}

export const create = (): Dialog => {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainerHigh(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    containerShape: Vars.ShapeScheme.ExtraLarge(),

    actionLabelStyle: Vars.Typescale.LabelLarge(),
    actionLabelColor: Vars.ColorScheme.Primary(),

    iconSize: Dp.create(24),
    iconColor: Vars.ColorScheme.Secondary(),

    headlineStyle: Vars.Typescale.HeadlineSmall(),
    headlineColor: Vars.ColorScheme.OnSurface(),

    supportingTextStyle: Vars.Typescale.BodyMedium(),
    supportingTextColor: Vars.ColorScheme.OnSurfaceVariant(),

    actionHoveredLabelTextColor: Vars.ColorScheme.Primary(),
    actionHoveredStateLayerColor: Vars.ColorScheme.Primary(),
    actionHoveredStateLayerOpacity: Vars.Opacities.Hovered(),

    actionFocusedLabelTextColor: Vars.ColorScheme.Primary(),
    actionFocusedStateLayerColor: Vars.ColorScheme.Primary(),
    actionFocusedStateLayerOpacity: Vars.Opacities.Focused(),

    actionPressedLabelTextColor: Vars.ColorScheme.Primary(),
    actionPressedStateLayerColor: Vars.ColorScheme.Primary(),
    actionPressedStateLayerOpacity: Vars.Opacities.Pressed(),
  };
};