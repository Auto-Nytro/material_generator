import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui, FocusIndicatorRef } from "@internal/prelude";

export interface PrimaryTabs {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerHeight: Dp,
  readonly withIconAndLabelContainerHeight: Dp,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly withLabelStyle: MaybeVar<TextStyle>,

  readonly withLabelActiveColor: MaybeVar<Color>,
  readonly withLabelInactiveColor: MaybeVar<Color>,
  readonly withIconSize: Dp,
  readonly withIconActiveColor: MaybeVar<Color>,
  readonly withIconInactiveColor: MaybeVar<Color>,
  readonly activeIndicatorColor: MaybeVar<Color>,
  readonly activeIndicatorHeight: Dp,
  readonly activeIndicatorShape: MaybeVar<ShapeRadii>,

  readonly withLabelActiveHoveredColor: MaybeVar<Color>,
  readonly withLabelInactiveHoveredColor: MaybeVar<Color>,
  readonly activeHoveredStateLayerColor: MaybeVar<Color>,
  readonly activeHoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly inactiveHoveredStateLayerColor: MaybeVar<Color>,
  readonly inactiveHoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly withIconActiveHoveredIconColor: MaybeVar<Color>,
  readonly withIconInactiveHoveredIconColor: MaybeVar<Color>,

  readonly focusedIndicatorColor: MaybeVar<Color>,
  readonly focusedIndicatorThickness: MaybeVar<Dp>,
  readonly focusedIndicatorOffset: MaybeVar<Dp>,

  readonly withLabelActiveFocusedColor: MaybeVar<Color>,
  readonly withLabelInactiveFocusedColor: MaybeVar<Color>,
  readonly activeFocusedStateLayerColor: MaybeVar<Color>,
  readonly activeFocusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly inactiveFocusedStateLayerColor: MaybeVar<Color>,
  readonly inactiveFocusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly withIconActiveFocusedColor: MaybeVar<Color>,
  readonly withIconInactiveFocusedColor: MaybeVar<Color>,

  readonly withLabelActivePressedColor: MaybeVar<Color>,
  readonly withLabelInactivePressedColor: MaybeVar<Color>,
  readonly activePressedStateLayerColor: MaybeVar<Color>,
  readonly activePressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly inactivePressedStateLayerColor: MaybeVar<Color>,
  readonly inactivePressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly withIconActivePressedColor: MaybeVar<Color>,
  readonly withIconInactivePressedColor: MaybeVar<Color>,
}

export const create = (): PrimaryTabs => {
  return {
    containerColor: Vars.ColorScheme.Surface(),
    containerShape: Vars.ShapeScheme.None(),
    containerHeight: Dp.create(48),
    withIconAndLabelContainerHeight: Dp.create(64),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    withLabelStyle: Vars.Typescale.TitleSmall(),

    withLabelActiveColor: Vars.ColorScheme.Primary(),
    withLabelInactiveColor: Vars.ColorScheme.OnSurfaceVariant(),
    withIconSize: Dp.create(24),
    withIconActiveColor: Vars.ColorScheme.Primary(),
    withIconInactiveColor: Vars.ColorScheme.OnSurfaceVariant(),
    activeIndicatorColor: Vars.ColorScheme.Primary(),
    activeIndicatorHeight: Dp.create(3),
    activeIndicatorShape: ShapeRadii.top({
      left: Dp.create(3),
      right: Dp.create(3),
    }),

    withLabelActiveHoveredColor: Vars.ColorScheme.Primary(),
    withLabelInactiveHoveredColor: Vars.ColorScheme.OnSurface(),
    activeHoveredStateLayerColor: Vars.ColorScheme.Primary(),
    activeHoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    inactiveHoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    inactiveHoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    withIconActiveHoveredIconColor: Vars.ColorScheme.Primary(),
    withIconInactiveHoveredIconColor: Vars.ColorScheme.OnSurface(),

    focusedIndicatorColor: Vars.ColorScheme.Secondary(),
    focusedIndicatorThickness: Vars.FocusIndicator.Thickness(),
    focusedIndicatorOffset: Vars.FocusIndicator.InnerOffset(),

    withLabelActiveFocusedColor: Vars.ColorScheme.Primary(),
    withLabelInactiveFocusedColor: Vars.ColorScheme.OnSurface(),
    activeFocusedStateLayerColor: Vars.ColorScheme.Primary(),
    activeFocusedStateLayerOpacity: Vars.Opacities.Focused(),
    inactiveFocusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    inactiveFocusedStateLayerOpacity: Vars.Opacities.Focused(),
    withIconActiveFocusedColor: Vars.ColorScheme.Primary(),
    withIconInactiveFocusedColor: Vars.ColorScheme.OnSurface(),

    withLabelActivePressedColor: Vars.ColorScheme.Primary(),
    withLabelInactivePressedColor: Vars.ColorScheme.OnSurface(),
    activePressedStateLayerColor: Vars.ColorScheme.Primary(),
    activePressedStateLayerOpacity: Vars.Opacities.Pressed(),
    inactivePressedStateLayerColor: Vars.ColorScheme.Primary(),
    inactivePressedStateLayerOpacity: Vars.Opacities.Pressed(),
    withIconActivePressedColor: Vars.ColorScheme.Primary(),
    withIconInactivePressedColor: Vars.ColorScheme.OnSurface(),
  };
};