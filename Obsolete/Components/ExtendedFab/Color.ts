import { Vars, MaybeVar, Dp, Ui } from "@internal/prelude";

export interface Color {
  readonly containerColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly labelTextColor: MaybeVar<Color>,
  readonly containerIconColor: MaybeVar<Color>,
  
  readonly hoveredContainerElevation: MaybeVar<Elevation>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredLabelTextColor: MaybeVar<Color>,
  readonly hoveredIconColor: MaybeVar<Color>,
  
  readonly focusedContainerElevation: MaybeVar<Elevation>,
  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedLabelTextColor: MaybeVar<Color>,
  readonly focusedIconColor: MaybeVar<Color>,
  
  readonly pressedContainerElevation: MaybeVar<Elevation>,
  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedLabelTextColor: MaybeVar<Color>,
  readonly pressedIconColor: MaybeVar<Color>,
}


export const primary = (): Color => {
  return { 
    containerColor: Vars.ColorScheme.PrimaryContainer(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    labelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    containerIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredLabelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    hoveredIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedLabelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    focusedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedLabelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    pressedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
  };
};

export const secondary = (): Color => {
  return { 
    containerColor: Vars.ColorScheme.SecondaryContainer(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    labelTextColor: Vars.ColorScheme.OnSecondaryContainer(),
    containerIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredLabelTextColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedLabelTextColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedLabelTextColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
  };
};

export const tertiary = (): Color => {
  return { 
    containerColor: Vars.ColorScheme.TertiaryContainer(),
    ContainerElevation: Vars.ElevationScheme.Level3(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    labelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    containerIconColor: Vars.ColorScheme.OnTertiaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredLabelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    hoveredIconColor: Vars.ColorScheme.OnTertiaryContainer(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedLabelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    focusedIconColor: Vars.ColorScheme.OnTertiaryContainer(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedLabelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    pressedIconColor: Vars.ColorScheme.OnTertiaryContainer(),
  };
};