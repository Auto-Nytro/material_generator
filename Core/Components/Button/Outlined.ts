import { Vars, MaybeVar, Color, Ui, Opacity } from "@internal/prelude";

export interface OutlinedButton {
  readonly outlineColor: MaybeVar<Color>,
  readonly outlineColorDisabled: MaybeVar<Color>,
  readonly outlineColorHovered: MaybeVar<Color>,
  readonly outlineColorFocused: MaybeVar<Color>,
  readonly outlineColorPressed: MaybeVar<Color>,
  readonly outlineColorUnselectedDisabled: MaybeVar<Color>,
  readonly outlineColorUnselectedHovered: MaybeVar<Color>,
  readonly outlineColorUnselectedFocused: MaybeVar<Color>,
  readonly outlineColorUnselectedPressed: MaybeVar<Color>,

  readonly containerColorSelected: MaybeVar<Color>,
  readonly containerColorSelectedDisabled: MaybeVar<Color>,

  readonly containerOpacityDisabled: MaybeVar<Opacity>,

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

export const create = (): OutlinedButton => {
  return {
    outlineColor: Vars.ColorScheme.OutlineVariant(),
    outlineColorDisabled: Vars.ColorScheme.OutlineVariant(),
    outlineColorHovered: Vars.ColorScheme.OutlineVariant(),
    outlineColorFocused: Vars.ColorScheme.OutlineVariant(),
    outlineColorPressed: Vars.ColorScheme.OutlineVariant(),
    outlineColorUnselectedDisabled: Vars.ColorScheme.OutlineVariant(),
    outlineColorUnselectedHovered: Vars.ColorScheme.OutlineVariant(),
    outlineColorUnselectedFocused: Vars.ColorScheme.OutlineVariant(),
    outlineColorUnselectedPressed: Vars.ColorScheme.OutlineVariant(),

    containerColorSelected: Vars.ColorScheme.InverseSurface(),
    containerColorSelectedDisabled: Vars.ColorScheme.OnSurface(),

    containerOpacityDisabled: Ui.create(0.1),

    labelColor: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorDisabled: Vars.ColorScheme.OnSurface(),
    labelColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    labelColorSelected: Vars.ColorScheme.InverseOnSurface(),
    labelColorSelectedHovered: Vars.ColorScheme.InverseOnSurface(),
    labelColorSelectedFocused: Vars.ColorScheme.InverseOnSurface(),
    labelColorSelectedPressed: Vars.ColorScheme.InverseOnSurface(),

    labelOpacityDisabled: Ui.create(0.38),

    iconColor: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorDisabled: Vars.ColorScheme.OnSurface(),
    iconColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    iconColorSelected: Vars.ColorScheme.InverseOnSurface(),
    iconColorSelectedHovered: Vars.ColorScheme.InverseOnSurface(),
    iconColorSelectedFocused: Vars.ColorScheme.InverseOnSurface(),
    iconColorSelectedPressed: Vars.ColorScheme.InverseOnSurface(),
    
    iconOpacityDisabled: Ui.create(0.38),

    stateLayerColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
    stateLayerColorSelectedHovered: Vars.ColorScheme.InverseOnSurface(),
    stateLayerColorSelectedFocused: Vars.ColorScheme.InverseOnSurface(),
    stateLayerColorSelectedPressed: Vars.ColorScheme.InverseOnSurface(),

    stateLayerOpacityHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityFocused: Vars.Opacities.Focused(),
    stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  };
};

export const OutlinedButton = {
  create,
};