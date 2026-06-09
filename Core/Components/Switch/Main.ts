import { Vars, MaybeVar, Color, Dp, ShapeRadii, Ui, Opacity, Outline } from "@internal/prelude";

export interface Switch {
  readonly trackOutlineWidth: Dp,

  readonly trackOutlineColor: MaybeVar<Color>,
  readonly trackOutlineColorUnselectedDisabled: MaybeVar<Color>,
  readonly trackOutlineColorUnselectedHovered: MaybeVar<Color>,
  readonly trackOutlineColorUnselectedFocused: MaybeVar<Color>,
  readonly trackOutlineColorUnselectedPressed: MaybeVar<Color>,

  readonly trackHeight: Dp,
  readonly trackWidth: Dp,
  readonly trackShape: MaybeVar<ShapeRadii>,

  readonly trackColorUnselected: MaybeVar<Color>,
  readonly trackColorUnselectedDisabled: MaybeVar<Color>,
  readonly trackColorUnselectedHovered: MaybeVar<Color>,
  readonly trackColorUnselectedFocused: MaybeVar<Color>,
  readonly trackColorUnselectedPressed: MaybeVar<Color>,
  readonly trackColorSelected: MaybeVar<Color>,
  readonly trackColorSelectedDisabled: MaybeVar<Color>,
  readonly trackColorSelectedHovered: MaybeVar<Color>,
  readonly trackColorSelectedFocused: MaybeVar<Color>,
  readonly trackColorSelectedPressed: MaybeVar<Color>,

  readonly trackOpacityDisabled: MaybeVar<Opacity>,

  readonly handleHeightWithIcon: Dp,
  readonly handleHeightUnselected: Dp,
  readonly handleHeightSelected: Dp,
  readonly handleHeightpressed: Dp,
      
  readonly handleWidthWithIcon: Dp,
  readonly handleWidthUnselected: Dp,
  readonly handleWidthSelected: Dp,
  readonly handleWidthpressed: Dp,
      
  readonly handleShape: MaybeVar<ShapeRadii>,

  readonly handleColorUnselected: MaybeVar<Color>,
  readonly handleColorUnselectedDisabled: MaybeVar<Color>,
  readonly handleColorUnselectedHovered: MaybeVar<Color>,
  readonly handleColorUnselectedFocused: MaybeVar<Color>,
  readonly handleColorUnselectedPressed: MaybeVar<Color>,
  readonly handleColorSelected: MaybeVar<Color>,
  readonly handleColorSelectedDisabled: MaybeVar<Color>,
  readonly handleColorSelectedHovered: MaybeVar<Color>,
  readonly handleColorSelectedFocused: MaybeVar<Color>,
  readonly handleColorSelectedPressed: MaybeVar<Color>,

  readonly handleOpacityUnselectedDisabled: MaybeVar<Opacity>,
  readonly handleOpacitySelectedDisabled: MaybeVar<Opacity>,

  readonly iconSizeUnselected: Dp,
  readonly iconSizeSelected: Dp,

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

  readonly iconOpacitySelectedDisabled: MaybeVar<Opacity>,
  readonly iconOpacityUnselectedDisabled: MaybeVar<Opacity>,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly stateLayerSize: Dp,
  readonly stateLayerShape: MaybeVar<ShapeRadii>,

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

export const create = (): Switch => ({
  trackOutlineWidth: Dp.create(2),

  trackOutlineColor: Vars.ColorScheme.Outline(),
  trackOutlineColorUnselectedDisabled: Vars.ColorScheme.OnSurface(),
  trackOutlineColorUnselectedHovered: Vars.ColorScheme.Outline(),
  trackOutlineColorUnselectedFocused: Vars.ColorScheme.Outline(),
  trackOutlineColorUnselectedPressed: Vars.ColorScheme.Outline(),

  trackHeight: Dp.create(32),
  trackWidth: Dp.create(52),
  trackShape: Vars.ShapeScheme.Full(),

  trackColorUnselected: Vars.ColorScheme.SurfaceContainerHighest(),
  trackColorUnselectedDisabled: Vars.ColorScheme.SurfaceContainerHighest(),
  trackColorUnselectedHovered: Vars.ColorScheme.SurfaceContainerHighest(),
  trackColorUnselectedFocused: Vars.ColorScheme.SurfaceContainerHighest(),
  trackColorUnselectedPressed: Vars.ColorScheme.SurfaceContainerHighest(),
  trackColorSelected: Vars.ColorScheme.Primary(),
  trackColorSelectedDisabled: Vars.ColorScheme.OnSurface(),
  trackColorSelectedHovered: Vars.ColorScheme.Primary(),
  trackColorSelectedFocused: Vars.ColorScheme.Primary(),
  trackColorSelectedPressed: Vars.ColorScheme.Primary(),

  trackOpacityDisabled: Ui.create(0.12),

  handleHeightWithIcon: Dp.create(24),
  handleHeightUnselected: Dp.create(16),
  handleHeightSelected: Dp.create(24),
  handleHeightpressed: Dp.create(28),
  
  handleWidthWithIcon: Dp.create(24),
  handleWidthUnselected: Dp.create(16),
  handleWidthSelected: Dp.create(24),
  handleWidthpressed: Dp.create(28),
  
  handleShape: Vars.ShapeScheme.Full(),

  handleColorUnselected: Vars.ColorScheme.Outline(),
  handleColorUnselectedDisabled: Vars.ColorScheme.OnSurface(),
  handleColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
  handleColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
  handleColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
  handleColorSelected: Vars.ColorScheme.OnPrimary(),
  handleColorSelectedDisabled: Vars.ColorScheme.Surface(),
  handleColorSelectedHovered: Vars.ColorScheme.PrimaryContainer(),
  handleColorSelectedFocused: Vars.ColorScheme.PrimaryContainer(),
  handleColorSelectedPressed: Vars.ColorScheme.PrimaryContainer(),

  handleOpacityUnselectedDisabled: Ui.create(0.38),
  handleOpacitySelectedDisabled: Ui.create(1),

  iconSizeUnselected: Dp.create(16),
  iconSizeSelected: Dp.create(16),

  iconColorUnselected: Vars.ColorScheme.SurfaceContainerHighest(),
  iconColorUnselectedDisabled: Vars.ColorScheme.SurfaceContainerHighest(),
  iconColorUnselectedHovered: Vars.ColorScheme.SurfaceContainerHighest(),
  iconColorUnselectedFocused: Vars.ColorScheme.SurfaceContainerHighest(),
  iconColorUnselectedPressed: Vars.ColorScheme.SurfaceContainerHighest(),
  iconColorSelected: Vars.ColorScheme.Primary(),
  iconColorSelectedDisabled: Vars.ColorScheme.OnSurface(),
  iconColorSelectedHovered: Vars.ColorScheme.Primary(),
  iconColorSelectedFocused: Vars.ColorScheme.Primary(),
  iconColorSelectedPressed: Vars.ColorScheme.Primary(),

  iconOpacitySelectedDisabled: Ui.create(0.38),
  iconOpacityUnselectedDisabled: Ui.create(0.38),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.OuterOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  stateLayerSize: Dp.create(40),
  stateLayerShape: Vars.ShapeScheme.Full(),

  stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurface(),
  stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurface(),
  stateLayerColorUnselectedPressed: Vars.ColorScheme.OnSurface(),
  stateLayerColorSelectedHovered: Vars.ColorScheme.Primary(),
  stateLayerColorSelectedFocused: Vars.ColorScheme.Primary(),
  stateLayerColorSelectedPressed: Vars.ColorScheme.Primary(),

  stateLayerOpacityUnselectedHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityUnselectedFocused: Vars.Opacities.Focused(),
  stateLayerOpacityUnselectedPressed: Vars.Opacities.Pressed(),
  stateLayerOpacitySelectedHovered: Vars.Opacities.Hovered(),
  stateLayerOpacitySelectedFocused: Vars.Opacities.Focused(),
  stateLayerOpacitySelectedPressed: Vars.Opacities.Pressed(),
});

export const Switch = {
  create,
};