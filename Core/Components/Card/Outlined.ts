import { Vars, MaybeVar, Color, Dp, ShapeRadii, Ui, Elevation, Opacity, Outline } from "@internal/prelude";

export interface Outlined {
  readonly outlineWidth: Dp,

  readonly outlineColor: MaybeVar<Color>,
  readonly outlineColorDisabled: MaybeVar<Color>,
  readonly outlineColorHovered: MaybeVar<Color>,
  readonly outlineColorFocused: MaybeVar<Color>,
  readonly outlineColorPressed: MaybeVar<Color>,
  readonly outlineColorDragged: MaybeVar<Color>,

  readonly outlineOpacityDisabled: MaybeVar<Opacity>,

  readonly containerColor: MaybeVar<Color>,
  
  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerElevationDisabled: MaybeVar<Elevation>,
  readonly containerElevationHovered: MaybeVar<Elevation>,
  readonly containerElevationFocused: MaybeVar<Elevation>,
  readonly containerElevationPressed: MaybeVar<Elevation>,
  readonly containerElevationDragged: MaybeVar<Elevation>,

  readonly containerShadowColor: MaybeVar<Color>,
  
  readonly iconColor: MaybeVar<Color>,
  readonly iconSize: Dp,

  readonly focusIndicator: MaybeVar<Outline>
  
  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorDragged: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityDragged: MaybeVar<Opacity>,
}

export const create = (): Outlined => {
  return {
    outlineWidth: Dp.create(1),

    outlineColor: Vars.ColorScheme.OutlineVariant(),
    outlineColorDisabled: Vars.ColorScheme.Outline(),
    outlineColorHovered: Vars.ColorScheme.OutlineVariant(),
    outlineColorFocused: Vars.ColorScheme.OnSurface(),
    outlineColorPressed: Vars.ColorScheme.OutlineVariant(),
    outlineColorDragged: Vars.ColorScheme.OutlineVariant(),   

    outlineOpacityDisabled: Ui.create(0.12),

    containerColor: Vars.ColorScheme.Surface(),

    containerShape: Vars.ShapeScheme.Medium(),

    containerElevation: Vars.ElevationScheme.Level0(),
    containerElevationDisabled: Vars.ElevationScheme.Level0(),
    containerElevationHovered: Vars.ElevationScheme.Level1(),
    containerElevationFocused: Vars.ElevationScheme.Level0(),
    containerElevationPressed: Vars.ElevationScheme.Level0(),
    containerElevationDragged: Vars.ElevationScheme.Level3(),

    containerShadowColor: Vars.ColorScheme.Shadow(),
    
    iconColor: Vars.ColorScheme.Primary(),
    iconSize: Dp.create(24),

    focusIndicator: Outline.create({
      color: Vars.ColorScheme.Secondary(),
      offset: Vars.FocusIndicator.OuterOffset(),
      thickness: Vars.FocusIndicator.Thickness(),
    }),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
    stateLayerOpacityDragged: Vars.Opacities.Dragged(),

    stateLayerColorHovered: Vars.ColorScheme.OnSurface(),
    stateLayerColorFocused: Vars.ColorScheme.OnSurface(),
    stateLayerColorPressed: Vars.ColorScheme.OnSurface(),
    stateLayerColorDragged: Vars.ColorScheme.OnSurface(),
  };
};

export const Outlined = {
  create,
};