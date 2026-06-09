import { Color, Dp, Elevation, MaybeVar, Opacity, Outline, ShapeRadii, TextStyle, Ui, Vars } from "@internal/prelude";

export interface Input {
  readonly outlineWidthUnselected: Dp,
  readonly outlineWidthSelected: Dp,

  readonly outlineColorUnselected: MaybeVar<Color>,
  readonly outlineColorUnselectedDisabled: MaybeVar<Color>,
  readonly outlineColorUnselectedFocused: MaybeVar<Color>,

  readonly outlineOpacityUnselectedDisabled: MaybeVar<Opacity>,

  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerHeight: Dp,

  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerElevationDragged: MaybeVar<Elevation>,

  readonly containerColorSelected: MaybeVar<Color>,
  readonly containerColorSelectedDisabled: MaybeVar<Color>,

  readonly containerOpacitySelectedDisabled: MaybeVar<Opacity>,

  readonly avatarSize: Dp,
  readonly avatarShape: MaybeVar<ShapeRadii>,
  readonly avatarOpacityDisabled: MaybeVar<Opacity>,

  readonly labelStyle: MaybeVar<TextStyle>,

  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelColorUnselected: MaybeVar<Color>,
  readonly labelColorUnselectedHovered: MaybeVar<Color>,
  readonly labelColorUnselectedFocused: MaybeVar<Color>,
  readonly labelColorUnselectedPressed: MaybeVar<Color>,
  readonly labelColorUnselectedDragged: MaybeVar<Color>,
  readonly labelColorSelected: MaybeVar<Color>,
  readonly labelColorSelectedHovered: MaybeVar<Color>,
  readonly labelColorSelectedFocused: MaybeVar<Color>,
  readonly labelColorSelectedPressed: MaybeVar<Color>,
  readonly labelColorSelectedDragged: MaybeVar<Color>,

  readonly labelOpacityDisabled: MaybeVar<Opacity>,

  readonly iconSizeLeading: Dp,
  readonly iconSizeTrailing: Dp,

  readonly iconColorLeadingDisabled: MaybeVar<Color>,
  readonly iconColorLeadingUnselected: MaybeVar<Color>,
  readonly iconColorLeadingUnselectedHovered: MaybeVar<Color>,
  readonly iconColorLeadingUnselectedFocused: MaybeVar<Color>,
  readonly iconColorLeadingUnselectedPressed: MaybeVar<Color>,
  readonly iconColorLeadingUnselectedDragged: MaybeVar<Color>,
  readonly iconColorLeadingSelected: MaybeVar<Color>,
  readonly iconColorLeadingSelectedHovered: MaybeVar<Color>,
  readonly iconColorLeadingSelectedFocused: MaybeVar<Color>,
  readonly iconColorLeadingSelectedPressed: MaybeVar<Color>,
  readonly iconColorLeadingSelectedDragged: MaybeVar<Color>,
  readonly iconColorTrailingDisabled: MaybeVar<Color>,
  readonly iconColorTrailingSelected: MaybeVar<Color>,
  readonly iconColorTrailingSelectedHovered: MaybeVar<Color>,
  readonly iconColorTrailingSelectedFocused: MaybeVar<Color>,
  readonly iconColorTrailingSelectedPressed: MaybeVar<Color>,
  readonly iconColorTrailingSelectedDragged: MaybeVar<Color>,
  readonly iconColorTrailingUnselected: MaybeVar<Color>,
  readonly iconColorTrailingUnselectedHovered: MaybeVar<Color>,
  readonly iconColorTrailingUnselectedFocused: MaybeVar<Color>,
  readonly iconColorTrailingUnselectedPressed: MaybeVar<Color>,
  readonly iconColorTrailingUnselectedDragged: MaybeVar<Color>,

  readonly iconOpacityLeadingDisabled: MaybeVar<Opacity>,
  readonly iconOpacityTrailingDisabled: MaybeVar<Opacity>,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly stateLayerColorUnselectedHovered: MaybeVar<Color>,
  readonly stateLayerColorUnselectedFocused: MaybeVar<Color>,
  readonly stateLayerColorUnselectedPressed: MaybeVar<Color>,
  readonly stateLayerColorUnselectedDragged: MaybeVar<Color>,
  readonly stateLayerColorSelectedHovered: MaybeVar<Color>,
  readonly stateLayerColorSelectedFocused: MaybeVar<Color>,
  readonly stateLayerColorSelectedPressed: MaybeVar<Color>,
  readonly stateLayerColorSelectedDragged: MaybeVar<Color>,

  readonly stateLayerOpacityUnselectedHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedDragged: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedDragged: MaybeVar<Opacity>,
}

export const Input = (): Input => ({
  outlineWidthUnselected: Dp.create(1),
  outlineWidthSelected: Dp.create(0),

  outlineColorUnselected: Vars.ColorScheme.OutlineVariant(),
  outlineColorUnselectedDisabled: Vars.ColorScheme.OnSurface(),
  outlineColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),

  outlineOpacityUnselectedDisabled: Ui.create(0.12),

  containerShape: Vars.ShapeScheme.Small(),
  containerHeight: Dp.create(32),

  containerElevation: Vars.ElevationScheme.Level0(),
  containerElevationDragged: Vars.ElevationScheme.Level4(),

  containerColorSelected: Vars.ColorScheme.SecondaryContainer(),
  containerColorSelectedDisabled: Vars.ColorScheme.OnSurface(),

  containerOpacitySelectedDisabled: Ui.create(0.12),

  avatarSize: Dp.create(24),
  avatarShape: Vars.ShapeScheme.Full(),
  avatarOpacityDisabled: Ui.create(0.38),

  labelStyle: Vars.Typescale.LabelLarge(),

  labelColorDisabled: Vars.ColorScheme.OnSurface(),
  labelColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorUnselectedDragged: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorSelected: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedPressed: Vars.ColorScheme.OnSecondaryContainer(),
  labelColorSelectedDragged: Vars.ColorScheme.OnSecondaryContainer(),

  labelOpacityDisabled: Ui.create(0.38),

  iconSizeLeading: Dp.create(18),
  iconSizeTrailing: Dp.create(18),

  iconColorLeadingDisabled: Vars.ColorScheme.OnSurface(),
  iconColorLeadingUnselected: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorLeadingUnselectedHovered: Vars.ColorScheme.Primary(),
  iconColorLeadingUnselectedFocused: Vars.ColorScheme.Primary(),
  iconColorLeadingUnselectedPressed: Vars.ColorScheme.Primary(),
  iconColorLeadingUnselectedDragged: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorLeadingSelected: Vars.ColorScheme.Primary(),
  iconColorLeadingSelectedHovered: Vars.ColorScheme.Primary(),
  iconColorLeadingSelectedFocused: Vars.ColorScheme.Primary(),
  iconColorLeadingSelectedPressed: Vars.ColorScheme.Primary(),
  iconColorLeadingSelectedDragged: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorTrailingDisabled: Vars.ColorScheme.OnSurface(),
  iconColorTrailingSelected: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorTrailingSelectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorTrailingSelectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorTrailingSelectedPressed: Vars.ColorScheme.OnSecondaryContainer(),
  iconColorTrailingSelectedDragged: Vars.ColorScheme.Primary(),
  iconColorTrailingUnselected: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorTrailingUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorTrailingUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorTrailingUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorTrailingUnselectedDragged: Vars.ColorScheme.Primary(),

  iconOpacityLeadingDisabled: Ui.create(0.38),
  iconOpacityTrailingDisabled: Ui.create(0.38),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.OuterOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorUnselectedPressed: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorUnselectedDragged: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorSelectedHovered: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorSelectedFocused: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorSelectedPressed: Vars.ColorScheme.OnSecondaryContainer(),
  stateLayerColorSelectedDragged: Vars.ColorScheme.OnSecondaryContainer(),

  stateLayerOpacityUnselectedHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityUnselectedFocused: Vars.Opacities.Focused(),
  stateLayerOpacityUnselectedPressed: Vars.Opacities.Pressed(),
  stateLayerOpacityUnselectedDragged: Vars.Opacities.Dragged(),
  stateLayerOpacitySelectedHovered: Vars.Opacities.Hovered(),
  stateLayerOpacitySelectedFocused: Vars.Opacities.Focused(),
  stateLayerOpacitySelectedPressed: Vars.Opacities.Pressed(),
  stateLayerOpacitySelectedDragged: Vars.Opacities.Dragged(),
});
