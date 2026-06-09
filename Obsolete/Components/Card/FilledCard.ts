import { Vars, MaybeVar, Color, Dp, FocusIndicatorRef, ShapeRadii, ShapesRef, Ui } from "@internal/prelude";

export interface FilledCard {
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

export const create = (): FilledCard =>  {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainerHighest(),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    containerShape: Vars.ShapeScheme.Medium(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    iconColor: Vars.ColorScheme.Primary(),
    iconSize: Dp.create(24),

    disabledContainerElevation: Vars.ElevationScheme.Level0(),
    disabledContainerOpacity: Ui.create(0.38),
    disabledContainerColor: Vars.ColorScheme.SurfaceVariant(),

    hoveredContainerElevation: Vars.ElevationScheme.Level1(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    
    focusedIndicatorColor: Vars.ColorScheme.Secondary(),
    focusedIndicatorThickness: Vars.FocusIndicator.Thickness(),
    focusedIndicatorOffset: Vars.FocusIndicator.OuterOffset(),
    focusedContainerElevation: Vars.ElevationScheme.Level0(),
    focusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    
    pressedContainerElevation: Vars.ElevationScheme.Level0(),
    pressedStateLayerColor: Vars.ColorScheme.OnSurface(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),

    draggedContainerElevation: Vars.ElevationScheme.Level3(),
    draggedStateLayerColor: Vars.ColorScheme.OnSurface(),
    draggedStateLayerOpacity: Vars.Opacities.Dragged(),
  };
};

