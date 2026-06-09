import { Vars, MaybeVar, Color, Dp, Ui } from "@internal/prelude";

export interface ColorStyle {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
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

export const TonalPrimary = (): ColorStyle => {
  return { 
    containerColor: Vars.ColorScheme.PrimaryContainer(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    iconColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnPrimaryContainer(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
  };
};
  
export const TonalSecondary = (): ColorStyle => {
  return { 
    containerColor: Vars.ColorScheme.SecondaryContainer(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    iconColor: Vars.ColorScheme.OnSecondaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSecondaryContainer(),

    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSecondaryContainer(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
  };
};
  
export const TonalTertiary = (): ColorStyle => {
  return { 
    containerColor: Vars.ColorScheme.TertiaryContainer(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    iconColor: Vars.ColorScheme.OnTertiaryContainer(),

    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnTertiaryContainer(),

    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnTertiaryContainer(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnTertiaryContainer(),
  };
};