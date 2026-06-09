import { Vars, MaybeVar, Color, Dp, Ui } from "@internal/prelude";

export interface FabMenuItemColor {
  readonly containerColor: MaybeVar<Color>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,
  readonly labelTextColor: MaybeVar<Color>,

  readonly hoveredContainerElevation: MaybeVar<Elevation>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredIconColor: MaybeVar<Color>,
  readonly hoveredLabelTextColor: MaybeVar<Color>,

  readonly focusedContainerElevation: MaybeVar<Elevation>,
  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedIconColor: MaybeVar<Color>,
  readonly focusedLabelTextColor: MaybeVar<Color>,

  readonly pressedContainerElevation: MaybeVar<Elevation>,
  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedIconColor: MaybeVar<Color>,
  readonly pressedLabelTextColor: MaybeVar<Color>,
}

export const Primary = (): FabMenuItemColor => {
  return {
    containerColor: Vars.ColorScheme.PrimaryContainer(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.OnPrimaryContainer(),
    labelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    hoveredLabelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    focusedLabelTextColor: Vars.ColorScheme.OnPrimaryContainer(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    pressedLabelTextColor: Vars.ColorScheme.OnPrimaryContainer(),

  };
};

export const Secondary = (): FabMenuItemColor => {
  return {
    containerColor: Vars.ColorScheme.SecondaryContainer(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.OnSecondaryContainer(),
    labelTextColor: Vars.ColorScheme.OnSecondaryContainer(),

    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredLabelTextColor: Vars.ColorScheme.OnSecondaryContainer(),

    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedLabelTextColor: Vars.ColorScheme.OnSecondaryContainer(),

    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedLabelTextColor: Vars.ColorScheme.OnSecondaryContainer(),

  };
};

export const Tertiary = (): FabMenuItemColor => {
  return {
    containerColor: Vars.ColorScheme.TertiaryContainer(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.OnTertiaryContainer(),
    labelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    
    hoveredContainerElevation: Vars.ElevationScheme.Level4(),
    hoveredStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnTertiaryContainer(),
    hoveredLabelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level3(),
    focusedStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnTertiaryContainer(),
    focusedLabelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level3(),
    pressedStateLayerColor: Vars.ColorScheme.OnTertiaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnTertiaryContainer(),
    pressedLabelTextColor: Vars.ColorScheme.OnTertiaryContainer(),
  };
};