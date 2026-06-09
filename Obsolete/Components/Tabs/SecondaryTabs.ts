import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui, FocusIndicatorRef } from "@internal/prelude";

export interface SecondaryTabs {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerHeight: Dp,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly labelStyle: MaybeVar<TextStyle>,

  readonly activeLabelColor: MaybeVar<Color>,
  readonly inactiveLabelColor: MaybeVar<Color>,

  readonly withIconIconSize: Dp,
  readonly withIconActiveIconColor: MaybeVar<Color>,
  readonly withIconInactiveIconColor: MaybeVar<Color>,
  readonly activeIndicatorColor: MaybeVar<Color>,
  readonly activeIndicatorHeight: Dp,

  readonly hoveredLabelColor: MaybeVar<Color>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly withIconHoverIconColor: MaybeVar<Color>,

  readonly focusedIndicatorColor: MaybeVar<Color>,
  readonly focusedIndicatorThickness: MaybeVar<Dp>,
  readonly focusedIndicatorOffset: MaybeVar<Dp>,
  readonly focusedLabelColor: MaybeVar<Color>,
  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly withIconFocusedIconColor: MaybeVar<Color>,

  readonly pressedLabelColor: MaybeVar<Color>,
  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly withIconPressedIconColor: MaybeVar<Color>,
}

export const create  = (): SecondaryTabs => {
  return {
    containerColor: Vars.ColorScheme.Surface(),
    containerShape: Vars.ShapeScheme.None(),
    containerHeight: Dp.create(48),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    labelStyle: Vars.Typescale.TitleSmall(),

    activeLabelColor: Vars.ColorScheme.OnSurface(),
    inactiveLabelColor: Vars.ColorScheme.OnSurfaceVariant(),

    withIconIconSize: Dp.create(24),
    withIconActiveIconColor: Vars.ColorScheme.OnSurface(),
    withIconInactiveIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    activeIndicatorColor: Vars.ColorScheme.Primary(),
    activeIndicatorHeight: Dp.create(2),

    hoveredLabelColor: Vars.ColorScheme.OnSurface(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    withIconHoverIconColor: Vars.ColorScheme.OnSurface(),

    focusedIndicatorColor: Vars.ColorScheme.Secondary(),
    focusedIndicatorThickness: Vars.FocusIndicator.Thickness(),
    focusedIndicatorOffset: Vars.FocusIndicator.InnerOffset(),
    focusedLabelColor: Vars.ColorScheme.OnSurface(),
    focusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    withIconFocusedIconColor: Vars.ColorScheme.OnSurface(),

    pressedLabelColor: Vars.ColorScheme.OnSurface(),
    pressedStateLayerColor: Vars.ColorScheme.OnSurface(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    withIconPressedIconColor: Vars.ColorScheme.OnSurface(),

  }
};