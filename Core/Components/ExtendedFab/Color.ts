import { Vars, MaybeVar, Elevation, Opacity, Color } from "@internal/prelude";

export interface Colors {
  readonly containerColor: MaybeVar<Color>,

  readonly containerElevation: MaybeVar<Elevation>,
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

export const TonalPrimary = (): Colors => ({
  containerColor: Vars.ColorScheme.PrimaryContainer(),
  
  containerElevation: Vars.ElevationScheme.Level3(),
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

export const TonalSecondary = (): Colors => ({
  containerColor: Vars.ColorScheme.SecondaryContainer(),
      
  containerElevation: Vars.ElevationScheme.Level3(),
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

export const TonalTertiary = (): Colors => ({
  containerColor: Vars.ColorScheme.TertiaryContainer(),
  
  containerElevation: Vars.ElevationScheme.Level3(),    
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

export const Primary = (): Colors => ({
  containerColor: Vars.ColorScheme.Primary(),

  containerElevation: Vars.ElevationScheme.Level3(),
  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelColor: Vars.ColorScheme.OnPrimary(),
  labelColorHovered: Vars.ColorScheme.OnPrimary(),
  labelColorFocused: Vars.ColorScheme.OnPrimary(),
  labelColorPressed: Vars.ColorScheme.OnPrimary(),

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

export const Secondary = (): Colors => ({
  containerColor: Vars.ColorScheme.Secondary(),

  containerElevation: Vars.ElevationScheme.Level3(),
  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelColor: Vars.ColorScheme.OnSecondary(),
  labelColorHovered: Vars.ColorScheme.OnSecondary(),
  labelColorFocused: Vars.ColorScheme.OnSecondary(),
  labelColorPressed: Vars.ColorScheme.OnSecondary(),

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

export const Tertiary = (): Colors => ({
  containerColor: Vars.ColorScheme.Tertiary(),

  containerElevation: Vars.ElevationScheme.Level3(),
  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelColor: Vars.ColorScheme.OnTertiary(),
  labelColorHovered: Vars.ColorScheme.OnTertiary(),
  labelColorFocused: Vars.ColorScheme.OnTertiary(),
  labelColorPressed: Vars.ColorScheme.OnTertiary(),

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

export const Colors = {
  TonalPrimary,
  TonalSecondary,
  TonalTertiary,
  Primary,
  Secondary,
  Tertiary,
};