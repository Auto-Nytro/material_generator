import { Vars, MaybeVar, Color, Ui, Elevation, Opacity } from "@internal/prelude";

export interface FilledButton {
  readonly containerColor: MaybeVar<Color>,
  readonly containerColorDisabled: MaybeVar<Color>,
  readonly containerColorUnselected: MaybeVar<Color>,
  readonly containerColorSelected: MaybeVar<Color>,

  readonly containerOpacityDisabled: MaybeVar<Opacity>,

  readonly containerShadowColor: MaybeVar<Color>,

  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerElevationDisabled: MaybeVar<Elevation>,
  readonly containerElevationFocused: MaybeVar<Elevation>,
  readonly containerElevationPressed: MaybeVar<Elevation>,
  
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

export const create = (): FilledButton => {
  return {
    containerColor: Vars.ColorScheme.Primary(),
    containerColorDisabled: Vars.ColorScheme.OnSurface(),
    containerColorUnselected: Vars.ColorScheme.SurfaceContainer(),
    containerColorSelected: Vars.ColorScheme.Primary(),

    containerOpacityDisabled: Ui.create(0.1),

    containerShadowColor: Vars.ColorScheme.Shadow(),

    containerElevation: Vars.ElevationScheme.Level0(),
    containerElevationDisabled: Vars.ElevationScheme.Level0(),
    containerElevationFocused: Vars.ElevationScheme.Level0(),
    containerElevationPressed: Vars.ElevationScheme.Level0(),

    labelColor: Vars.ColorScheme.OnPrimary(),
    labelColorDisabled: Vars.ColorScheme.OnSurface(),
    labelColorHovered: Vars.ColorScheme.OnPrimary(),
    labelColorFocused: Vars.ColorScheme.OnPrimary(),
    labelColorPressed: Vars.ColorScheme.OnPrimary(),
    labelColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorSelected: Vars.ColorScheme.OnPrimary(),
    labelColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    labelColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    labelColorSelectedPressed: Vars.ColorScheme.OnPrimary(),
    
    labelOpacityDisabled: Ui.create(0.38),

    iconColor: Vars.ColorScheme.OnPrimary(),
    iconColorDisabled: Vars.ColorScheme.OnSurface(),
    iconColorHovered: Vars.ColorScheme.OnPrimary(),
    iconColorFocused: Vars.ColorScheme.OnPrimary(),
    iconColorPressed: Vars.ColorScheme.OnPrimary(),
    iconColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorSelected: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedPressed: Vars.ColorScheme.OnPrimary(),
    
    iconOpacityDisabled: Ui.create(0.38),

    stateLayerColorHovered: Vars.ColorScheme.OnPrimary(),
    stateLayerColorFocused: Vars.ColorScheme.OnPrimary(),
    stateLayerColorPressed: Vars.ColorScheme.OnPrimary(),
    stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    stateLayerColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    stateLayerColorSelectedPressed: Vars.ColorScheme.OnPrimary(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const FilledButton = {
  create,
};