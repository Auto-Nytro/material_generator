import { Vars, MaybeVar, Color, Dp, Ui, Opacity } from "@internal/prelude";

export interface RadioButton {
  readonly iconSize: Dp,

  readonly iconColorUnselected: MaybeVar<Color>,
  readonly iconColorUnselectedDisabled: MaybeVar<Color>,
  readonly iconColorUnselectedHovered: MaybeVar<Color>,
  readonly iconColorUnselectedFocused: MaybeVar<Color>,
  readonly iconColorUnselectedPressed: MaybeVar<Color>,
  readonly iconColorSelected: MaybeVar<Color>,
  readonly iconColorSelectedDisabled: MaybeVar<Color>,
  readonly iconColorSelectedHovered: MaybeVar<Color>,
  readonly iconColorSelectedFocused: MaybeVar<Color>,
  readonly iconColorSelectedPressed: MaybeVar<Color>,

  readonly iconOpacityUnselectedDisabled: MaybeVar<Opacity>,
  readonly iconOpacitySelectedDisabled: MaybeVar<Opacity>,

  readonly touchAreaSize: Dp,

  readonly stateLayerSize: Dp,

  readonly stateLayerColorUnselectedHovered: MaybeVar<Color>,
  readonly stateLayerColorUnselectedFocused: MaybeVar<Color>,
  readonly stateLayerColorUnselectedPressed: MaybeVar<Color>,
  readonly stateLayerColorSelectedHovered: MaybeVar<Color>,
  readonly stateLayerColorSelectedFocused: MaybeVar<Color>,
  readonly stateLayerColorSelectedPressed: MaybeVar<Color>,

  readonly stateLayerOpacityUnselectedHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedPressed: MaybeVar<Opacity>,
}

export const create = (): RadioButton => ({
  iconSize: Dp.create(20),

  iconColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorUnselectedDisabled: Vars.ColorScheme.OnSurface(),
  iconColorUnselectedHovered: Vars.ColorScheme.OnSurface(),
  iconColorUnselectedFocused: Vars.ColorScheme.OnSurface(),
  iconColorUnselectedPressed: Vars.ColorScheme.OnSurface(),
  iconColorSelected: Vars.ColorScheme.Primary(),
  iconColorSelectedDisabled: Vars.ColorScheme.OnSurface(),
  iconColorSelectedHovered: Vars.ColorScheme.Primary(),
  iconColorSelectedFocused: Vars.ColorScheme.Primary(),
  iconColorSelectedPressed: Vars.ColorScheme.Primary(),

  iconOpacityUnselectedDisabled: Ui.create(0.38),
  iconOpacitySelectedDisabled: Ui.create(0.38),

  touchAreaSize: Dp.create(48),

  stateLayerSize: Dp.create(40),

  stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurface(),
  stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurface(),
  stateLayerColorUnselectedPressed: Vars.ColorScheme.Primary(),
  stateLayerColorSelectedHovered: Vars.ColorScheme.Primary(),
  stateLayerColorSelectedFocused: Vars.ColorScheme.Primary(),
  stateLayerColorSelectedPressed: Vars.ColorScheme.OnSurface(),

  stateLayerOpacityUnselectedHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityUnselectedFocused: Vars.Opacities.Focused(),
  stateLayerOpacityUnselectedPressed: Vars.Opacities.Pressed(),
  stateLayerOpacitySelectedHovered: Vars.Opacities.Hovered(),
  stateLayerOpacitySelectedFocused: Vars.Opacities.Focused(),
  stateLayerOpacitySelectedPressed: Vars.Opacities.Pressed(),
});

export const RadioButton = {
  create,
};