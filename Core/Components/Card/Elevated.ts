import { Vars, MaybeVar, Elevation, Color, Dp, ShapeRadii, Opacity, Ui, Outline } from "@internal/prelude";

export interface Elevated {
  readonly containerColor: MaybeVar<Color>,
  readonly containerColorDisabled: MaybeVar<Color>,

  readonly containerOpacityDisabled: MaybeVar<Opacity>,

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
  
  readonly focusIndicator: MaybeVar<Outline>,
  // readonly focusIndicatorColor: MaybeVar<Color>,
  // readonly focusIndicatorThickness: MaybeVar<Dp>,
  // readonly focusIndicatorOffset: MaybeVar<Dp>,
  
  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorDragged: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityDragged: MaybeVar<Opacity>,
}

export const create = (): Elevated =>  {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainerLow(),
    containerColorDisabled: Vars.ColorScheme.Surface(),

    containerOpacityDisabled: Ui.create(0.38),

    containerShape: Vars.ShapeScheme.Medium(),

    containerElevation: Vars.ElevationScheme.Level1(),
    containerElevationDisabled: Vars.ElevationScheme.Level1(),
    containerElevationHovered: Vars.ElevationScheme.Level2(),
    containerElevationFocused: Vars.ElevationScheme.Level1(),
    containerElevationPressed: Vars.ElevationScheme.Level1(),
    containerElevationDragged: Vars.ElevationScheme.Level4(),

    containerShadowColor: Vars.ColorScheme.Shadow(),

    iconColor: Vars.ColorScheme.Primary(),
    iconSize: Dp.create(24),
    
    focusIndicator: Outline.create({
      color: Vars.ColorScheme.Secondary(),
      offset: Vars.FocusIndicator.OuterOffset(),
      thickness: Vars.FocusIndicator.Thickness(),
    }),
    
    stateLayerColorHovered: Vars.ColorScheme.OnSurface(),
    stateLayerColorFocused: Vars.ColorScheme.OnSurface(),
    stateLayerColorPressed: Vars.ColorScheme.OnSurface(),
    stateLayerColorDragged: Vars.ColorScheme.OnSurface(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
    stateLayerOpacityDragged: Vars.Opacities.Dragged(),
  };
};

export const Elevated = {
  create,
};