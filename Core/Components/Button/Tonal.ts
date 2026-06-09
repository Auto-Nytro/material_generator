import { Vars, MaybeVar, Color, Ui, Elevation, Opacity } from "@internal/prelude";

export interface TonalButton {
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

export const create = (): TonalButton => {
  return {
    containerColor: Vars.ColorScheme.SecondaryContainer(),
    containerColorDisabled: Vars.ColorScheme.OnSurface(),
    containerColorUnselected: Vars.ColorScheme.SecondaryContainer(),
    containerColorSelected: Vars.ColorScheme.OnSecondaryContainer(),

    containerOpacityDisabled: Ui.create(0.1),

    containerElevation: Vars.ElevationScheme.Level0(),
    containerElevationDisabled: Vars.ElevationScheme.Level0(),
    containerElevationFocused: Vars.ElevationScheme.Level0(),
    containerElevationPressed: Vars.ElevationScheme.Level0(),

    containerShadowColor: Vars.ColorScheme.Shadow(),

    labelColor: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorDisabled: Vars.ColorScheme.OnSurface(),
    labelColorHovered: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorFocused: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorPressed: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorUnselected: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorUnselectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorUnselectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorUnselectedPressed: Vars.ColorScheme.OnSecondaryContainer(),
    labelColorSelected: Vars.ColorScheme.OnSecondary(),
    labelColorSelectedHovered: Vars.ColorScheme.OnSecondary(),
    labelColorSelectedFocused: Vars.ColorScheme.OnSecondary(),
    labelColorSelectedPressed: Vars.ColorScheme.OnSecondary(),

    labelOpacityDisabled: Ui.create(0.38),

    iconColor: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorDisabled: Vars.ColorScheme.OnSurface(),
    iconColorHovered: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorFocused: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorPressed: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorUnselected: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorUnselectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorUnselectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorUnselectedPressed: Vars.ColorScheme.OnSecondaryContainer(),
    iconColorSelected: Vars.ColorScheme.OnSecondary(),
    iconColorSelectedHovered: Vars.ColorScheme.OnSecondary(),
    iconColorSelectedFocused: Vars.ColorScheme.OnSecondary(),
    iconColorSelectedPressed: Vars.ColorScheme.OnSecondary(),
    
    iconOpacityDisabled: Ui.create(0.38),
    
    stateLayerColorHovered: Vars.ColorScheme.OnSecondaryContainer(),
    stateLayerColorFocused: Vars.ColorScheme.OnSecondaryContainer(),
    stateLayerColorPressed: Vars.ColorScheme.OnSecondaryContainer(),
    stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
    stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
    stateLayerColorUnselectedPressed: Vars.ColorScheme.OnSecondaryContainer(),
    stateLayerColorSelectedHovered: Vars.ColorScheme.OnSecondary(),
    stateLayerColorSelectedFocused: Vars.ColorScheme.OnSecondary(),
    stateLayerColorSelectedPressed: Vars.ColorScheme.OnSecondary(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const TonalButton = {
  create,
};