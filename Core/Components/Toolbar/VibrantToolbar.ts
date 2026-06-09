import { Vars, MaybeVar, Color, ShapeRadii, Opacity, Ui } from "@internal/prelude";

export interface VibrantToolbar {
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerColor: MaybeVar<Color>,

  readonly buttonContainerColor: MaybeVar<Color>,
  readonly buttonContainerColorSelected: MaybeVar<Color>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,
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
  readonly iconColorSelected: MaybeVar<Color>,
  readonly iconColorSelectedHovered: MaybeVar<Color>,
  readonly iconColorSelectedFocused: MaybeVar<Color>,
  readonly iconColorSelectedPressed: MaybeVar<Color>,

  readonly iconOpacityDisabled: MaybeVar<Opacity>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorSelectedHovered: MaybeVar<Color>,
  readonly stateLayerColorSelectedFocused: MaybeVar<Color>,
  readonly stateLayerColorSelectedPressed: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
}

export const create = (): VibrantToolbar => ({
  containerShape: Vars.ShapeScheme.Full(),
  containerColor: Vars.ColorScheme.PrimaryContainer(),

  buttonContainerColor: Vars.ColorScheme.PrimaryContainer(),
  buttonContainerColorSelected: Vars.ColorScheme.SurfaceContainer(),

  labelColor: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorDisabled: Vars.ColorScheme.OnSurface(),
  labelColorHovered: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorFocused: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorPressed: Vars.ColorScheme.OnPrimaryContainer(),
  labelColorSelected: Vars.ColorScheme.OnSurface(),
  labelColorSelectedHovered: Vars.ColorScheme.OnSurface(),
  labelColorSelectedFocused: Vars.ColorScheme.OnSurface(),
  labelColorSelectedPressed: Vars.ColorScheme.OnSurface(),

  labelOpacityDisabled: Ui.create(0.38),
  iconColor: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorDisabled: Vars.ColorScheme.OnSurface(),
  iconColorHovered: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorFocused: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorPressed: Vars.ColorScheme.OnPrimaryContainer(),
  iconColorSelected: Vars.ColorScheme.OnSurface(),
  iconColorSelectedHovered: Vars.ColorScheme.OnSurface(),
  iconColorSelectedFocused: Vars.ColorScheme.OnSurface(),
  iconColorSelectedPressed: Vars.ColorScheme.OnSurface(),

  iconOpacityDisabled: Ui.create(0.38),

  stateLayerColorHovered: Vars.ColorScheme.OnPrimaryContainer(),
  stateLayerColorFocused: Vars.ColorScheme.OnPrimaryContainer(),
  stateLayerColorPressed: Vars.ColorScheme.OnPrimaryContainer(),
  stateLayerColorSelectedHovered: Vars.ColorScheme.OnSurface(),
  stateLayerColorSelectedFocused: Vars.ColorScheme.OnSurface(),
  stateLayerColorSelectedPressed: Vars.ColorScheme.OnSurface(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const VibrantToolbar = {
  create,
};