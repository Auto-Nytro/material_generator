import { Vars, MaybeVar, Color, Elevation, Opacity } from "@internal/prelude";

export interface FabMenuCloseColor {
  readonly containerColor: MaybeVar<Color>,

  readonly containerElevationHovered: MaybeVar<Elevation>,
  readonly containerElevationFocused: MaybeVar<Elevation>,
  readonly containerElevationPressed: MaybeVar<Elevation>,

  readonly containerShadowColor: MaybeVar<Color>,

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
}

export const Primary = (): FabMenuCloseColor => ({
  containerColor: Vars.ColorScheme.Primary(),

  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  iconColor: Vars.ColorScheme.OnPrimary(),
  iconColorHovered: Vars.ColorScheme.OnPrimary(),
  iconColorFocused: Vars.ColorScheme.OnPrimary(),
  iconColorPressed: Vars.ColorScheme.OnPrimary(),

  stateLayerColorHovered: Vars.ColorScheme.OnPrimary(),
  stateLayerColorFocused: Vars.ColorScheme.OnPrimary(),
  stateLayerColorPressed: Vars.ColorScheme.OnPrimary(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const Secondary = (): FabMenuCloseColor => ({
  containerColor: Vars.ColorScheme.Secondary(),

  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  iconColor: Vars.ColorScheme.OnSecondary(),
  iconColorHovered: Vars.ColorScheme.OnSecondary(),
  iconColorFocused: Vars.ColorScheme.OnSecondary(),
  iconColorPressed: Vars.ColorScheme.OnSecondary(),

  stateLayerColorHovered: Vars.ColorScheme.OnSecondary(),
  stateLayerColorFocused: Vars.ColorScheme.OnSecondary(),
  stateLayerColorPressed: Vars.ColorScheme.OnSecondary(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const Tertiary = (): FabMenuCloseColor => ({
  containerColor: Vars.ColorScheme.Tertiary(),

  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  iconColor: Vars.ColorScheme.OnTertiary(),
  iconColorHovered: Vars.ColorScheme.OnTertiary(),
  iconColorFocused: Vars.ColorScheme.OnTertiary(),
  iconColorPressed: Vars.ColorScheme.OnTertiary(),

  stateLayerColorHovered: Vars.ColorScheme.OnTertiary(),
  stateLayerColorFocused: Vars.ColorScheme.OnTertiary(),
  stateLayerColorPressed: Vars.ColorScheme.OnTertiary(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const FabMenuCloseColor = {
  Primary,
  Secondary,
  Tertiary,
};