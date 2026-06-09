import { Vars, MaybeVar, Color, Ui, Opacity } from "@internal/prelude";

export interface Filled {
  readonly containerColor: MaybeVar<Color>,
  readonly containerColorDisabled: MaybeVar<Color>,
  readonly containerColorUnselected: MaybeVar<Color>,
  readonly containerColorSelected: MaybeVar<Color>,
  
  readonly containerOpacityDisabled: MaybeVar<Opacity>;

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
  
  readonly iconOpacityDisabled: MaybeVar<Opacity>;

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorUnselectedHovered: MaybeVar<Color>,
  readonly stateLayerColorUnselectedFocused: MaybeVar<Color>,
  readonly stateLayerColorUnselectedPressed: MaybeVar<Color>,
  readonly stateLayerColorSelectedHovered: MaybeVar<Color>,
  readonly stateLayerColorSelectedFocused: MaybeVar<Color>,
  readonly stateLayerColorSelectedPressed: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>;
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>;
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>;
}

export const create = (): Filled => {
  return {
    containerColor: Vars.ColorScheme.Primary(),
    containerColorDisabled: Vars.ColorScheme.OnSurface(),
    containerColorUnselected: Vars.ColorScheme.OnPrimary(),
    containerColorSelected: Vars.ColorScheme.Primary(),

    containerOpacityDisabled: Ui.create(0.1),

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

export const Filled = {
  create,
};