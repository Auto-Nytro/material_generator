import { Vars, MaybeVar, Color, Ui, Opacity } from "@internal/prelude";


export interface TextButton {
  readonly containerColorDisabled: MaybeVar<Color>,

  readonly containerOpacityDisabled: MaybeVar<Opacity>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,

  readonly labelOpacityDisabled: MaybeVar<Opacity>,

  readonly iconColor: MaybeVar<Color>,
  readonly iconColorDisabled: MaybeVar<Color>,
  readonly iconColorHovered: MaybeVar<Color>,
  readonly iconColorFocused: MaybeVar<Color>,
  readonly iconColorPressed: MaybeVar<Color>,

  readonly iconOpacityDisabled: MaybeVar<Opacity>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
}

export const create = (): TextButton => {
  return {
    containerColorDisabled: Vars.ColorScheme.OnSurface(),
    containerOpacityDisabled: Ui.create(0.1),

    labelColor: Vars.ColorScheme.Primary(),
    labelColorDisabled: Vars.ColorScheme.OnSurface(),
    labelColorHovered: Vars.ColorScheme.Primary(),
    labelColorFocused: Vars.ColorScheme.Primary(),
    labelColorPressed: Vars.ColorScheme.Primary(),

    labelOpacityDisabled: Ui.create(0.38),

    iconColor: Vars.ColorScheme.Primary(),
    iconColorDisabled: Vars.ColorScheme.OnSurface(),
    iconColorHovered: Vars.ColorScheme.Primary(),
    iconColorFocused: Vars.ColorScheme.Primary(),
    iconColorPressed: Vars.ColorScheme.Primary(),

    iconOpacityDisabled: Ui.create(0.38),

    stateLayerColorHovered: Vars.ColorScheme.Primary(),
    stateLayerColorFocused: Vars.ColorScheme.Primary(),
    stateLayerColorPressed: Vars.ColorScheme.Primary(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const TextButton = {
  create,
};