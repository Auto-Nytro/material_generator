import { Vars, MaybeVar, Elevation, Color, Dp, ShapeRadii, Opacity, Ui } from "@internal/prelude";

export interface ElevatedCard {
  readonly containerColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,
  readonly iconSize: Dp,

  readonly disabledContainerElevation: MaybeVar<Elevation>,
  readonly disabledContainerOpacity: MaybeVar<Opacity>,
  readonly disabledContainerColor: MaybeVar<Color>,

  readonly hoveredContainerElevation: MaybeVar<Elevation>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  
  readonly focusedIndicatorColor: MaybeVar<Color>,
  readonly focusedIndicatorThickness: MaybeVar<Dp>,
  readonly focusedIndicatorOffset: MaybeVar<Dp>,
  
  readonly focusedContainerElevation: MaybeVar<Elevation>,
  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  
  readonly pressedContainerElevation: MaybeVar<Elevation>,
  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,

  readonly draggedContainerElevation: MaybeVar<Elevation>,
  readonly draggedStateLayerColor: MaybeVar<Color>,
  readonly draggedStateLayerOpacity: MaybeVar<Opacity>,
}

export const create = (): ElevatedCard =>  {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainerLow(),
    ContainerElevation: Vars.ElevationScheme.Level1(),
    containerShape: Vars.ShapeScheme.Medium(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.Primary(),
    iconSize: Dp.create(24),
  
    disabledContainerElevation: Vars.ElevationScheme.Level1(),
    disabledContainerOpacity: Ui.create(0.38),
    disabledContainerColor: Vars.ColorScheme.Surface(),
  
    hoveredContainerElevation: Vars.ElevationScheme.Level2(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    
    focusedIndicatorColor: Vars.ColorScheme.Secondary(),
    focusedIndicatorThickness: Vars.FocusIndicator.Thickness(),
    focusedIndicatorOffset: Vars.FocusIndicator.OuterOffset(),
    
    focusedContainerElevation: Vars.ElevationScheme.Level1(),
    focusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level1(),
    pressedStateLayerColor: Vars.ColorScheme.OnSurface(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
  
    draggedContainerElevation: Vars.ElevationScheme.Level4(),
    draggedStateLayerColor: Vars.ColorScheme.OnSurface(),
    draggedStateLayerOpacity: Vars.Opacities.Dragged(),
  };
};
