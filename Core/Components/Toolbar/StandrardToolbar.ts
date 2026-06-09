import { Vars, MaybeVar, Color, ShapeRadii, Opacity, Ui } from "@internal/prelude";

export interface StandardToolbar {
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerColor: MaybeVar<Color>,

  readonly buttonContainerColor: MaybeVar<Color>,
  readonly buttonContainerColorSelected: MaybeVar<Color>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,
  readonly labelColorSelected: MaybeVar<Color>,
  readonly labelColorSelectedHovered: MaybeVar<Color>,
  readonly labelColorSelectedFocused: MaybeVar<Color>,
  readonly labelColorSelectedPressed: MaybeVar<Color>,

  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelOpacityDisabled: MaybeVar<Opacity>,

  readonly iconColor: MaybeVar<Color>,
  readonly iconColorHovered: MaybeVar<Color>,
  readonly iconColorFocused: MaybeVar<Color>,
  readonly iconColorPressed: MaybeVar<Color>,
  readonly iconColorSelected: MaybeVar<Color>,
  readonly iconColorSelectedHovered: MaybeVar<Color>,
  readonly iconColorSelectedFocused: MaybeVar<Color>,
  readonly iconColorSelectedPressed: MaybeVar<Color>,

  readonly iconColorDisabled: MaybeVar<Color>,
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

export const create = (): StandardToolbar => ({
  containerShape: Vars.ShapeScheme.Full(),
  containerColor: Vars.ColorScheme.SurfaceContainer(),
  
  buttonContainerColor: Vars.ColorScheme.SurfaceContainer(),
  buttonContainerColorSelected: Vars.ColorScheme.SecondaryContainer(),

  labelColor: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorSelected: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedPressed: Vars.ColorScheme.OnSecondaryContainer(),

  labelColorDisabled: Vars.ColorScheme.OnSurface(),
  labelOpacityDisabled: Ui.create(0.38),

  iconColor: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorSelected: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorSelectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorSelectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorSelectedPressed: Vars.ColorScheme.OnSecondaryContainer(),

  iconColorDisabled: Vars.ColorScheme.OnSurface(),
  iconOpacityDisabled: Ui.create(0.38),

  stateLayerColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorSelectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorSelectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorSelectedPressed: Vars.ColorScheme.OnSecondaryContainer(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const StandardToolbar = {
  create,
};