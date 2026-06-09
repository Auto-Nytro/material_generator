import { Vars, MaybeVar, Color, Elevation, Opacity } from "@internal/prelude";

export interface Colors {
  readonly containerColor: MaybeVar<Color>,

  readonly containerElevation: MaybeVar<Elevation>,
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

export const TonalPrimary = (): Colors => ({ 
  containerColor: Vars.ColorScheme.PrimaryContainer(),

  containerElevation: Vars.ElevationScheme.Level3(),
  containerElevationHovered: Vars.ElevationScheme.Level4(),
  containerElevationFocused: Vars.ElevationScheme.Level3(),
  containerElevationPressed: Vars.ElevationScheme.Level3(),

  containerShadowColor: Vars.ColorScheme.Shadow(),

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