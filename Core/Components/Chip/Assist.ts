import { Color, Dp, Elevation, MaybeVar, Opacity, Outline, ShapeRadii, TextStyle, Ui, Vars } from "@internal/prelude";

export interface Assist {
  readonly outlineWidth: Dp,

  readonly outlineColor: MaybeVar<Color>,
  readonly outlineColorDisabled: MaybeVar<Color>,
  readonly outlineColorFocused: MaybeVar<Color>,

  readonly outlineOpacityDisabled: MaybeVar<Opacity>,

  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerHeight: Dp,
  readonly containerElevation: MaybeVar<Elevation>,

  readonly containerColorElevated: MaybeVar<Color>,
  readonly containerColorElevatedDisabled: MaybeVar<Color>,

  readonly containerOpacityElevatedDisabled: MaybeVar<Opacity>,

  readonly containerElevationElevated: MaybeVar<Elevation>,
  readonly containerElevationElevatedDisabled: MaybeVar<Elevation>,
  readonly containerElevationElevatedHovered: MaybeVar<Elevation>,
  readonly containerElevationElevatedFocused: MaybeVar<Elevation>,
  readonly containerElevationElevatedPressed: MaybeVar<Elevation>,
  readonly containerElevationDragged: MaybeVar<Elevation>,

  readonly containerShadowColorElevated: MaybeVar<Color>,

  readonly labelStyle: MaybeVar<TextStyle>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,
  readonly labelColorDragged: MaybeVar<Color>,

  readonly labelOpacityDisabled: MaybeVar<Opacity>,

  readonly iconSize: Dp,

  readonly iconColor: MaybeVar<Color>,
  readonly iconColorDisabled: MaybeVar<Color>,
  readonly iconColorHovered: MaybeVar<Color>,
  readonly iconColorFocused: MaybeVar<Color>,
  readonly iconColorPressed: MaybeVar<Color>,
  readonly iconColorDragged: MaybeVar<Color>,

  readonly iconOpacityDisabled: MaybeVar<Opacity>,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorDragged: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityDragged: MaybeVar<Opacity>,
}

export const Assist = (): Assist => ({
  outlineWidth: Dp.create(1),

  outlineColor: Vars.ColorScheme.OutlineVariant(),
  outlineColorDisabled: Vars.ColorScheme.OnSurface(),
  outlineColorFocused: Vars.ColorScheme.OnSurface(),

  outlineOpacityDisabled: Ui.create(0.12),

  containerShape: Vars.ShapeScheme.Small(),
  containerHeight: Dp.create(32),
  containerElevation: Vars.ElevationScheme.Level0(),

  containerColorElevated: Vars.ColorScheme.SurfaceContainerLow(),
  containerColorElevatedDisabled: Vars.ColorScheme.OnSurface(),

  containerOpacityElevatedDisabled: Ui.create(0.12),

  containerElevationElevated: Vars.ElevationScheme.Level1(),
  containerElevationElevatedDisabled: Vars.ElevationScheme.Level0(),
  containerElevationElevatedHovered: Vars.ElevationScheme.Level2(),
  containerElevationElevatedFocused: Vars.ElevationScheme.Level1(),
  containerElevationElevatedPressed: Vars.ElevationScheme.Level1(),
  containerElevationDragged: Vars.ElevationScheme.Level4(),

  containerShadowColorElevated: Vars.ColorScheme.Shadow(),

  labelStyle: Vars.Typescale.LabelLarge(),

  labelColor: Vars.ColorScheme.OnSurface(),
  labelColorDisabled: Vars.ColorScheme.OnSurface(),
  labelColorHovered: Vars.ColorScheme.OnSurface(),
  labelColorFocused: Vars.ColorScheme.OnSurface(),
  labelColorPressed: Vars.ColorScheme.OnSurface(),
  labelColorDragged: Vars.ColorScheme.OnSurface(),

  labelOpacityDisabled: Ui.create(0.38),

  iconSize: Dp.create(18),

  iconColor: Vars.ColorScheme.Primary(),
  iconColorDisabled: Vars.ColorScheme.OnSurface(),
  iconColorHovered: Vars.ColorScheme.Primary(),
  iconColorFocused: Vars.ColorScheme.Primary(),
  iconColorPressed: Vars.ColorScheme.Primary(),
  iconColorDragged: Vars.ColorScheme.Primary(),

  iconOpacityDisabled: Ui.create(0.38),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.OuterOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  stateLayerColorHovered: Vars.ColorScheme.OnSurface(),
  stateLayerColorFocused: Vars.ColorScheme.OnSurface(),
  stateLayerColorPressed: Vars.ColorScheme.OnSurface(),
  stateLayerColorDragged: Vars.ColorScheme.OnSurface(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  stateLayerOpacityDragged: Vars.Opacities.Dragged(),
});
