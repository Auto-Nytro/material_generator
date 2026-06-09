import { Vars, MaybeVar, Color, Dp, Ui } from "@internal/prelude";

export interface FabMenuCloseColor {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,

  readonly hoveredContainerElevation: MaybeVar<Elevation>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredIconColor: MaybeVar<Color>,

  readonly focusedContainerElevation: MaybeVar<Elevation>,
  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedIconColor: MaybeVar<Color>,

  readonly pressedContainerElevation: MaybeVar<Elevation>,
  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedIconColor: MaybeVar<Color>,
}

export const Primary = (): FabMenuCloseColor => {
  return {
    containerColor: Vars.ColorScheme.Primary(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.OnPrimary(),

    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnPrimary(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnPrimary(),

    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnPrimary(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnPrimary(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnPrimary(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnPrimary(),
  };
};

export const Secondary = (): FabMenuCloseColor => {
  return {
    containerColor: Vars.ColorScheme.Secondary(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.OnSecondary(),

    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSecondary(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSecondary(),

    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnSecondary(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSecondary(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnSecondary(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSecondary(),
  };
};

export const Tertiary = (): FabMenuCloseColor => {
  return {
    containerColor: Vars.ColorScheme.Tertiary(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.OnTertiary(),

    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnTertiary(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnTertiary(),

    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnTertiary(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnTertiary(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnTertiary(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnTertiary(),
  };
};
