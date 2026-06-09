import { Vars, MaybeVar, Opacity, Color, Ui, Elevation } from "@internal/prelude";

export interface ElevatedButton {
  readonly containerColor: MaybeVar<Color>,
  readonly containerColorDisabled: MaybeVar<Color>,
  readonly containerColorUnselected: MaybeVar<Color>,
  readonly containerColorSelected: MaybeVar<Color>,

  readonly containerOpacityDisabled: MaybeVar<Opacity>,

  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerElevationDisabled: MaybeVar<Elevation>,
  readonly containerElevationFocused: MaybeVar<Elevation>,
  readonly containerElevationPressed: MaybeVar<Elevation>,

  readonly containerShadowColor: MaybeVar<Color>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,
  readonly labelColorUnselected: MaybeVar<Color>,
  readonly labelColorUnselectedHovered: MaybeVar<Color>,
  readonly labelColorUnselectedFocused: MaybeVar<Color>,
  readonly labelColorUnselectedPressed: MaybeVar<Color>,
  readonly labelColorSelected: MaybeVar<Color>,
  readonly labelColorSelectedHovered: MaybeVar<Color>,
  readonly labelColorSelectedFocused: MaybeVar<Color>,
  readonly labelColorSelectedPressed: MaybeVar<Color>,

  readonly labelOpacityDisabled: MaybeVar<Opacity>,

  readonly iconColor: MaybeVar<Color>,
  readonly iconColorDisabled: MaybeVar<Color>,
  readonly iconColorHovered: MaybeVar<Color>,
  readonly iconColorFocused: MaybeVar<Color>,
  readonly iconColorPressed: MaybeVar<Color>,
  readonly iconColorUnselected: MaybeVar<Color>,
  readonly iconColorUnselectedHovered: MaybeVar<Color>,
  readonly iconColorUnselectedFocused: MaybeVar<Color>,
  readonly iconColorUnselectedPressed: MaybeVar<Color>,
  readonly iconColorSelected: MaybeVar<Color>,
  readonly iconColorSelectedHovered: MaybeVar<Color>,
  readonly iconColorSelectedFocused: MaybeVar<Color>,
  readonly iconColorSelectedPressed: MaybeVar<Color>,

  readonly iconOpacityDisabled: MaybeVar<Opacity>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorUnselectedHovered: MaybeVar<Color>,
  readonly stateLayerColorUnselectedFocused: MaybeVar<Color>,
  readonly stateLayerColorUnselectedPressed: MaybeVar<Color>,
  readonly stateLayerColorSelectedHovered: MaybeVar<Color>,
  readonly stateLayerColorSelectedFocused: MaybeVar<Color>,
  readonly stateLayerColorSelectedPressed: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
}

export const create = (): ElevatedButton => {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainerLow(),
    containerColorDisabled: Vars.ColorScheme.OnSurface(),
    containerColorUnselected: Vars.ColorScheme.SurfaceContainerLow(),
    containerColorSelected: Vars.ColorScheme.Primary(),

    containerOpacityDisabled: Ui.create(0.1),

    containerElevation: Vars.ElevationScheme.Level1(),
    containerElevationDisabled: Vars.ElevationScheme.Level0(),
    containerElevationFocused: Vars.ElevationScheme.Level1(),
    containerElevationPressed: Vars.ElevationScheme.Level1(),

    containerShadowColor: Vars.ColorScheme.Shadow(),

    labelColor: Vars.ColorScheme.Primary(),
    labelColorDisabled: Vars.ColorScheme.OnSurface(),
    labelColorHovered: Vars.ColorScheme.Primary(),
    labelColorFocused: Vars.ColorScheme.Primary(),
    labelColorPressed: Vars.ColorScheme.Primary(),
    labelColorUnselected: Vars.ColorScheme.Primary(),
    labelColorUnselectedHovered: Vars.ColorScheme.Primary(),
    labelColorUnselectedFocused: Vars.ColorScheme.Primary(),
    labelColorUnselectedPressed: Vars.ColorScheme.Primary(),
    labelColorSelected: Vars.ColorScheme.OnPrimary(),
    labelColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    labelColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    labelColorSelectedPressed: Vars.ColorScheme.OnPrimary(),

    labelOpacityDisabled: Ui.create(0.38),

    iconColor: Vars.ColorScheme.Primary(),
    iconColorDisabled: Vars.ColorScheme.OnSurface(),
    iconColorHovered: Vars.ColorScheme.Primary(),
    iconColorFocused: Vars.ColorScheme.Primary(),
    iconColorPressed: Vars.ColorScheme.Primary(),
    iconColorUnselected: Vars.ColorScheme.Primary(),
    iconColorUnselectedHovered: Vars.ColorScheme.Primary(),
    iconColorUnselectedFocused: Vars.ColorScheme.Primary(),
    iconColorUnselectedPressed: Vars.ColorScheme.Primary(),
    iconColorSelected: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedPressed: Vars.ColorScheme.OnPrimary(),
    
    iconOpacityDisabled: Ui.create(0.38),

    stateLayerColorHovered: Vars.ColorScheme.Primary(),
    stateLayerColorFocused: Vars.ColorScheme.Primary(),
    stateLayerColorPressed: Vars.ColorScheme.Primary(),
    stateLayerColorUnselectedHovered: Vars.ColorScheme.Primary(),
    stateLayerColorUnselectedFocused: Vars.ColorScheme.Primary(),
    stateLayerColorUnselectedPressed: Vars.ColorScheme.Primary(),
    stateLayerColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    stateLayerColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    stateLayerColorSelectedPressed: Vars.ColorScheme.OnPrimary(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const ElevatedButton = {
  create,
};