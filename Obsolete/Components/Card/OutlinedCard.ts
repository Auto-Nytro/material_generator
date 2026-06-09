import { Vars, MaybeVar, Color, Dp, FocusIndicatorRef, ShapeRadii, ShapesRef, Ui } from "@internal/prelude";

export interface OutlinedCard {
  readonly containerColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly outlineWidth: Dp,
  readonly outlineColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,
  readonly iconSize: Dp,

  readonly disabledContainerElevation: MaybeVar<Elevation>,
  readonly disabledOutlineColor: MaybeVar<Color>,
  readonly disabledOutlineOpacity: MaybeVar<Opacity>,

  readonly hoveredContainerElevation: MaybeVar<Elevation>,
  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredOutlineColor: MaybeVar<Color>,

  readonly focusedIndicatorThickness: MaybeVar<Dp>,
  readonly focusedIndicatorOffset: MaybeVar<Dp>,
  readonly focusedIndicatorColor: MaybeVar<Color>,
  readonly focusedContainerElevation: MaybeVar<Elevation>,
  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedOutlineColor: MaybeVar<Color>,

  readonly pressedContainerElevation: MaybeVar<Elevation>,
  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedOutlineColor: MaybeVar<Color>,

  readonly draggedContainerElevation: MaybeVar<Elevation>,
  readonly draggedStateLayerColor: MaybeVar<Color>,
  readonly draggedStateLayerOpacity: MaybeVar<Opacity>,
  readonly draggedOutlineColor: MaybeVar<Color>,
}

export const create = (): OutlinedCard => {
  return {
    containerColor: Vars.ColorScheme.Surface(),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    containerShape: Vars.ShapeScheme.Medium(),
    containerShadowColor: Vars.ColorScheme.Shadow(),
    outlineWidth: Dp.create(1),
    outlineColor: Vars.ColorScheme.OutlineVariant(),
    iconColor: Vars.ColorScheme.Primary(),
    iconSize: Dp.create(24),

    disabledContainerElevation: Vars.ElevationScheme.Level0(),
    disabledOutlineColor: Vars.ColorScheme.Outline(),
    disabledOutlineOpacity: Ui.create(0.12),

    hoveredContainerElevation: Vars.ElevationScheme.Level1(),
    hoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredOutlineColor: Vars.ColorScheme.OutlineVariant(),

    focusedIndicatorThickness: Vars.FocusIndicator.Thickness(),
    focusedIndicatorOffset: Vars.FocusIndicator.OuterOffset(),
    focusedIndicatorColor: Vars.ColorScheme.Secondary(),
    focusedContainerElevation: Vars.ElevationScheme.Level0(),
    focusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedOutlineColor: Vars.ColorScheme.OnSurface(),

    pressedContainerElevation: Vars.ElevationScheme.Level0(),
    pressedStateLayerColor: Vars.ColorScheme.OnSurface(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedOutlineColor: Vars.ColorScheme.OutlineVariant(),

    draggedContainerElevation: Vars.ElevationScheme.Level3(),
    draggedStateLayerColor: Vars.ColorScheme.OnSurface(),
    draggedStateLayerOpacity: Vars.Opacities.Dragged(),
    draggedOutlineColor: Vars.ColorScheme.OutlineVariant(),   
  };
};