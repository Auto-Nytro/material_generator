import { Vars, MaybeVar, Color, Ui, Opacity } from "@internal/prelude";

export interface Standard {
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

export const create = (): Standard => {
  return {
    iconColor: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorDisabled: Vars.ColorScheme.OnSurface(),
    iconColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorSelected: Vars.ColorScheme.Primary(),
    iconColorSelectedHovered: Vars.ColorScheme.Primary(),
    iconColorSelectedFocused: Vars.ColorScheme.Primary(),
    iconColorSelectedPressed: Vars.ColorScheme.Primary(),

    iconOpacityDisabled: Ui.create(0.38),

    stateLayerColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorSelectedHovered: Vars.ColorScheme.Primary(),
    stateLayerColorSelectedFocused: Vars.ColorScheme.Primary(),
    stateLayerColorSelectedPressed: Vars.ColorScheme.Primary(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const Standard = {
  create,
};