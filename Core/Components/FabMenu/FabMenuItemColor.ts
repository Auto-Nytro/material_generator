import { Vars, MaybeVar, Color, Elevation, Opacity } from "@internal/prelude";

export interface FabMenuItemColor {
  readonly containerColor: MaybeVar<Color>,

  readonly containerElevationHovered: MaybeVar<Elevation>,
  readonly containerElevationFocused: MaybeVar<Elevation>,
  readonly containerElevationPressed: MaybeVar<Elevation>,

  readonly containerShadowColor: MaybeVar<Color>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,

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

export const Primary = (): FabMenuItemColor => ({
  containerColor: Vars.ColorScheme.PrimaryContainer(),

  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelColor: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorHovered: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorFocused: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorPressed: Vars.ColorScheme.OnPrimaryContainer(),

  iconColor: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorHovered: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorFocused: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorPressed: Vars.ColorScheme.OnPrimaryContainer(),
  
  stateLayerColorHovered: Vars.ColorScheme.OnPrimaryContainer(),
  stateLayerColorFocused: Vars.ColorScheme.OnPrimaryContainer(),
  stateLayerColorPressed: Vars.ColorScheme.OnPrimaryContainer(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const Secondary = (): FabMenuItemColor => ({
  containerColor: Vars.ColorScheme.SecondaryContainer(),

  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelColor: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorHovered: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorFocused: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorPressed: Vars.ColorScheme.OnSecondaryContainer(),

  iconColor: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorHovered: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorFocused: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorPressed: Vars.ColorScheme.OnSecondaryContainer(),

  stateLayerColorHovered: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorFocused: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorPressed: Vars.ColorScheme.OnSecondaryContainer(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const Tertiary = (): FabMenuItemColor => ({
  containerColor: Vars.ColorScheme.TertiaryContainer(),

  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelColor: Vars.ColorScheme.OnTertiaryContainer(),
  labelColorHovered: Vars.ColorScheme.OnTertiaryContainer(),
  labelColorFocused: Vars.ColorScheme.OnTertiaryContainer(),
  labelColorPressed: Vars.ColorScheme.OnTertiaryContainer(),

  iconColor: Vars.ColorScheme.OnTertiaryContainer(),
  iconColorHovered: Vars.ColorScheme.OnTertiaryContainer(),
  iconColorFocused: Vars.ColorScheme.OnTertiaryContainer(),
  iconColorPressed: Vars.ColorScheme.OnTertiaryContainer(),
  
  stateLayerColorHovered: Vars.ColorScheme.OnTertiaryContainer(),
  stateLayerColorFocused: Vars.ColorScheme.OnTertiaryContainer(),
  stateLayerColorPressed: Vars.ColorScheme.OnTertiaryContainer(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const FabMenuItemColor = {
  Primary,
  Secondary,
  Tertiary,
};