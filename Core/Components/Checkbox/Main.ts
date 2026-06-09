import { Vars, MaybeVar, Color, Dp, ShapeRadii, Ui, Opacity, Outline } from "@internal/prelude";

export interface Checkbox {
  readonly outlineWidthUnselected: Dp,
  readonly outlineWidthUnselectedDisabled: Dp,
  readonly outlineWidthUnselectedHovered: Dp,
  readonly outlineWidthUnselectedFocused: Dp,
  readonly outlineWidthUnselectedPressed: Dp,
  readonly outlineWidthSelected: Dp,
  readonly outlineWidthSelectedDisabled: Dp,
  readonly outlineWidthSelectedHovered: Dp,
  readonly outlineWidthSelectedFocused: Dp,
  readonly outlineWidthSelectedPressed: Dp,

  readonly outlineColorUnselected: MaybeVar<Color>,
  readonly outlineColorUnselectedDisabled: MaybeVar<Color>,
  readonly outlineColorUnselectedHovered: MaybeVar<Color>,
  readonly outlineColorUnselectedFocused: MaybeVar<Color>,
  readonly outlineColorUnselectedPressed: MaybeVar<Color>,
  readonly outlineColorUnselectedErrored: MaybeVar<Color>,
  readonly outlineColorUnselectedErroredHovered: MaybeVar<Color>,
  readonly outlineColorUnselectedErroredFocused: MaybeVar<Color>,
  readonly outlineColorUnselectedErroredPressed: MaybeVar<Color>,

  readonly containerSize: Dp,

  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly containerColorUnselectedErrored: MaybeVar<Color>,
  readonly containerColorSelected: MaybeVar<Color>,
  readonly containerColorSelectedDisabled: MaybeVar<Color>,
  readonly containerColorSelectedHovered: MaybeVar<Color>,
  readonly containerColorSelectedFocused: MaybeVar<Color>,
  readonly containerColorSelectedPressed: MaybeVar<Color>,
  readonly containerColorSelectedErroredHovered: MaybeVar<Color>,
  readonly containerColorSelectedErroredFocused: MaybeVar<Color>,
  readonly containerColorSelectedErroredPressed: MaybeVar<Color>,

  readonly containerOpacityUnselectedDisabled: MaybeVar<Opacity>,
  readonly containerOpacitySelectedDisabled: MaybeVar<Opacity>,

  readonly iconSize: Dp,

  readonly iconColorSelected: MaybeVar<Color>,
  readonly iconColorSelectedDisabled: MaybeVar<Color>,
  readonly iconColorSelectedHovered: MaybeVar<Color>,
  readonly iconColorSelectedFocused: MaybeVar<Color>,
  readonly iconColorSelectedPressed: MaybeVar<Color>,
  readonly iconColorSelectedErrored: MaybeVar<Color>,
  readonly iconColorSelectedErroredHovered: MaybeVar<Color>,
  readonly iconColorSelectedErroredFocused: MaybeVar<Color>,
  readonly iconColorSelectedErroredPressed: MaybeVar<Color>,

  readonly touchAreaSize: Dp,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly stateLayerSize: Dp,
  readonly stateLayerShape: MaybeVar<ShapeRadii>,

  readonly stateLayerColorErrorredHovered: MaybeVar<Color>,
  readonly stateLayerColorErrorredFocused: MaybeVar<Color>,
  readonly stateLayerColorErrorredPressed: MaybeVar<Color>,
  readonly stateLayerColorUnselectedHovered: MaybeVar<Color>,
  readonly stateLayerColorUnselectedFocused: MaybeVar<Color>,
  readonly stateLayerColorUnselectedPressed: MaybeVar<Color>,
  readonly stateLayerColorSelectedHovered: MaybeVar<Color>,
  readonly stateLayerColorSelectedFocused: MaybeVar<Color>,
  readonly stateLayerColorSelectedPressed: MaybeVar<Color>,

  readonly stateLayerOpacityErrorredHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityErrorredFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityErrorredPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityUnselectedPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacitySelectedPressed: MaybeVar<Opacity>,
}

export const create = (): Checkbox => {
  return {
    outlineWidthUnselected: Dp.create(2),
    outlineWidthUnselectedDisabled: Dp.create(2),
    outlineWidthUnselectedHovered: Dp.create(2),
    outlineWidthUnselectedFocused: Dp.create(2),
    outlineWidthUnselectedPressed: Dp.create(2),
    outlineWidthSelectedDisabled: Dp.create(0),
    outlineWidthSelected: Dp.create(0),
    outlineWidthSelectedHovered: Dp.create(0),
    outlineWidthSelectedFocused: Dp.create(0),
    outlineWidthSelectedPressed: Dp.create(0),

    outlineColorUnselected: Vars.ColorScheme.OnSurfaceVariant(),
    outlineColorUnselectedDisabled: Vars.ColorScheme.OnSurface(),
    outlineColorUnselectedHovered: Vars.ColorScheme.OnSurface(),
    outlineColorUnselectedFocused: Vars.ColorScheme.OnSurface(),
    outlineColorUnselectedPressed: Vars.ColorScheme.OnSurface(),
    outlineColorUnselectedErrored: Vars.ColorScheme.Error(),
    outlineColorUnselectedErroredHovered: Vars.ColorScheme.Error(),
    outlineColorUnselectedErroredFocused: Vars.ColorScheme.Error(),
    outlineColorUnselectedErroredPressed: Vars.ColorScheme.Error(),

    containerOpacityUnselectedDisabled: Ui.create(0.38),
    containerOpacitySelectedDisabled: Ui.create(0.38),

    containerSize: Dp.create(18),

    containerShape: ShapeRadii.All(Dp.create(2)),

    containerColorUnselectedErrored: Vars.ColorScheme.Error(),
    containerColorSelected: Vars.ColorScheme.Primary(),
    containerColorSelectedHovered: Vars.ColorScheme.Primary(),
    containerColorSelectedFocused: Vars.ColorScheme.Primary(),
    containerColorSelectedPressed: Vars.ColorScheme.Primary(),
    containerColorSelectedDisabled: Vars.ColorScheme.OnSurface(),
    containerColorSelectedErroredHovered: Vars.ColorScheme.Error(),
    containerColorSelectedErroredFocused: Vars.ColorScheme.Error(),
    containerColorSelectedErroredPressed: Vars.ColorScheme.Error(),

    iconSize: Dp.create(18),

    iconColorSelected: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedDisabled: Vars.ColorScheme.Surface(),
    iconColorSelectedHovered: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedFocused: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedPressed: Vars.ColorScheme.OnPrimary(),
    iconColorSelectedErrored: Vars.ColorScheme.OnError(),
    iconColorSelectedErroredHovered: Vars.ColorScheme.OnError(),
    iconColorSelectedErroredFocused: Vars.ColorScheme.OnError(),
    iconColorSelectedErroredPressed: Vars.ColorScheme.OnError(),

    focusIndicator: Outline.create({
      color: Vars.ColorScheme.Secondary(),
      offset: Vars.FocusIndicator.OuterOffset(),
      thickness: Vars.FocusIndicator.Thickness(),
    }),

    touchAreaSize: Dp.create(48),

    stateLayerSize: Dp.create(40),
    stateLayerShape: Vars.ShapeScheme.Full(),

    stateLayerColorErrorredHovered: Vars.ColorScheme.Error(),
    stateLayerColorErrorredFocused: Vars.ColorScheme.Error(),
    stateLayerColorErrorredPressed: Vars.ColorScheme.Error(),
    stateLayerColorUnselectedHovered: Vars.ColorScheme.OnSurface(),
    stateLayerColorUnselectedFocused: Vars.ColorScheme.OnSurface(),
    stateLayerColorUnselectedPressed: Vars.ColorScheme.Primary(),
    stateLayerColorSelectedHovered: Vars.ColorScheme.Primary(),
    stateLayerColorSelectedFocused: Vars.ColorScheme.Primary(),
    stateLayerColorSelectedPressed: Vars.ColorScheme.OnSurface(),

    stateLayerOpacityErrorredHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityErrorredFocused: Vars.Opacities.Focused(),
    stateLayerOpacityErrorredPressed: Vars.Opacities.Pressed(),
    stateLayerOpacityUnselectedHovered: Vars.Opacities.Hovered(),
    stateLayerOpacityUnselectedFocused: Vars.Opacities.Focused(),
    stateLayerOpacityUnselectedPressed: Vars.Opacities.Pressed(),
    stateLayerOpacitySelectedHovered: Vars.Opacities.Hovered(),
    stateLayerOpacitySelectedFocused: Vars.Opacities.Focused(),
    stateLayerOpacitySelectedPressed: Vars.Opacities.Pressed(),
  };
};

export const Checkbox = {
  create,
};