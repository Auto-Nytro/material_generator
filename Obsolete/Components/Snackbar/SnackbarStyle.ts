import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui } from "@internal/prelude";

export interface SnackbarStyle {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly container_elevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerWithSingleLineHeight: Dp,
  readonly containerWithTwoLinesHeight: Dp,

  readonly labelColor: MaybeVar<Color>,
  readonly labelStyle: MaybeVar<TextStyle>,

  readonly iconColor: MaybeVar<Color>,
  readonly iconSize: Dp,

  readonly supportingColor: MaybeVar<Color>,
  readonly supportingStyle: MaybeVar<TextStyle>,

  readonly hoveredLabelColor: MaybeVar<Color>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly iconHoveredStateLayerColor: MaybeVar<Color>,
  readonly iconHoveredStateLayerOpacity: MaybeVar<Opacity>,

  readonly iconHoveredIconColor: MaybeVar<Color>,

  readonly focusedLabelColor: MaybeVar<Color>,

  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly iconFocusedStateLayerColor: MaybeVar<Color>,
  readonly iconFocusedStateLayerOpacity: MaybeVar<Opacity>,

  readonly iconFocusedIconColor: MaybeVar<Color>,

  readonly pressedLabelColor: MaybeVar<Color>,

  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly iconPressedStateLayerColor: MaybeVar<Color>,
  readonly iconPressedStateLayerOpacity: MaybeVar<Opacity>,

  readonly iconPressedIconColor: MaybeVar<Color>,
}

export const create = (): SnackbarStyle => {
  return {
    containerColor: Vars.ColorScheme.InverseSurface(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    container_elevation: Vars.ElevationScheme.Level3(),
    containerShape: Vars.ShapeScheme.ExtraSmall(),
    containerWithSingleLineHeight: Dp.create(48),
    containerWithTwoLinesHeight: Dp.create(68),

    labelColor: Vars.ColorScheme.InversePrimary(),
    labelStyle: Vars.Typescale.LabelLarge(),

    iconColor: Vars.ColorScheme.InverseOnSurface(),
    iconSize: Dp.create(24),

    supportingColor: Vars.ColorScheme.InverseOnSurface(),
    supportingStyle: Vars.Typescale.BodyMedium(),

    hoveredLabelColor: Vars.ColorScheme.InversePrimary(),
    hoveredStateLayerColor: Vars.ColorScheme.InversePrimary(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    iconHoveredStateLayerColor: Vars.ColorScheme.InverseOnSurface(),
    iconHoveredStateLayerOpacity: Vars.Opacities.Hovered(),

    iconHoveredIconColor: Vars.ColorScheme.InverseOnSurface(),

    focusedLabelColor: Vars.ColorScheme.InversePrimary(),

    focusedStateLayerColor: Vars.ColorScheme.InversePrimary(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    iconFocusedStateLayerColor: Vars.ColorScheme.InverseOnSurface(),
    iconFocusedStateLayerOpacity: Vars.Opacities.Focused(),

    iconFocusedIconColor: Vars.ColorScheme.InverseOnSurface(),

    pressedLabelColor: Vars.ColorScheme.InversePrimary(),

    pressedStateLayerColor: Vars.ColorScheme.InversePrimary(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    iconPressedStateLayerColor: Vars.ColorScheme.InverseOnSurface(),
    iconPressedStateLayerOpacity: Vars.Opacities.Pressed(),

    iconPressedIconColor: Vars.ColorScheme.InverseOnSurface(),
  };
};