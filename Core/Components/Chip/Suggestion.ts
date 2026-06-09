import { Color, Dp, Elevation, MaybeVar, Opacity, Outline, ShapeRadii, TextStyle, Ui, Vars } from "@internal/prelude";

export interface Suggestion {
  readonly outlineWidth: Dp,

  readonly outlineColor: MaybeVar<Color>,
  readonly outlineColorDisabled: MaybeVar<Color>,
  readonly outlineColorFocused: MaybeVar<Color>,

  readonly outlineOpacityDisabled: MaybeVar<Opacity>,

  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerHeight: Dp,

  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerElevationElevated: MaybeVar<Elevation>,
  readonly containerElevationElevatedDisabled: MaybeVar<Elevation>,
  readonly containerElevationElevatedHovered: MaybeVar<Elevation>,
  readonly containerElevationDragged: MaybeVar<Elevation>,
  readonly containerElevationElevatedFocused: MaybeVar<Elevation>,
  readonly containerElevationElevatedPressed: MaybeVar<Elevation>,

  readonly containerColorElevated: MaybeVar<Color>,
  readonly containerColorElevatedDisabled: MaybeVar<Color>,

  readonly containerShadowColorElevated: MaybeVar<Color>,

  readonly containerOpacityElevatedDisabled: MaybeVar<Opacity>,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly labelStyle: MaybeVar<TextStyle>,

  readonly labelColor: MaybeVar<Color>,
  readonly labelColorDisabled: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorDragged: MaybeVar<Color>,
  readonly labelColorElevatedPressed: MaybeVar<Color>,

  readonly labelOpacityDisabled: MaybeVar<Opacity>,

  readonly iconSizeLeading: Dp,

  readonly iconColorLeading: MaybeVar<Color>,
  readonly iconColorLeadingDisabled: MaybeVar<Color>,
  readonly iconColorLeadingHovered: MaybeVar<Color>,
  readonly iconColorLeadingFocused: MaybeVar<Color>,
  readonly iconColorLeadingPressed: MaybeVar<Color>,
  readonly iconColorLeadingDragged: MaybeVar<Color>,

  readonly iconOpacityLeadingDisabled: MaybeVar<Opacity>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,
  readonly stateLayerColorDragged: MaybeVar<Color>,

  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityDragged: MaybeVar<Opacity>,
}

export const Suggestion = (): Suggestion => ({
  outlineWidth: Dp.create(1),

  outlineColor: Vars.ColorScheme.OutlineVariant(),
  outlineColorDisabled: Vars.ColorScheme.OnSurface(),
  outlineColorFocused: Vars.ColorScheme.OnSurfaceVariant(),

  outlineOpacityDisabled: Ui.create(0.12),

  containerShape: Vars.ShapeScheme.Small(),
  containerHeight: Dp.create(32),

  containerElevation: Vars.ElevationScheme.Level0(),
  containerElevationDragged: Vars.ElevationScheme.Level4(),
  containerElevationElevated: Vars.ElevationScheme.Level1(),
  containerElevationElevatedDisabled: Vars.ElevationScheme.Level0(),
  containerElevationElevatedHovered: Vars.ElevationScheme.Level2(),
  containerElevationElevatedFocused: Vars.ElevationScheme.Level1(),
  containerElevationElevatedPressed: Vars.ElevationScheme.Level1(),

  containerColorElevated: Vars.ColorScheme.SurfaceContainerLow(),
  containerColorElevatedDisabled: Vars.ColorScheme.OnSurface(),

  containerShadowColorElevated: Vars.ColorScheme.Shadow(),

  containerOpacityElevatedDisabled: Ui.create(0.12),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.OuterOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  labelStyle: Vars.Typescale.LabelLarge(),

  labelColor: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorDisabled: Vars.ColorScheme.OnSurface(),
  labelColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorDragged: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorElevatedPressed: Vars.ColorScheme.OnSurfaceVariant(),

  labelOpacityDisabled: Ui.create(0.38),

  iconSizeLeading: Dp.create(18),

  iconColorLeading: Vars.ColorScheme.Primary(),
  iconColorLeadingDisabled: Vars.ColorScheme.OnSurface(),
  iconColorLeadingHovered: Vars.ColorScheme.Primary(),
  iconColorLeadingFocused: Vars.ColorScheme.Primary(),
  iconColorLeadingPressed: Vars.ColorScheme.Primary(),
  iconColorLeadingDragged: Vars.ColorScheme.Primary(),

  iconOpacityLeadingDisabled: Ui.create(0.38),

  stateLayerColorHovered: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorFocused: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorPressed: Vars.ColorScheme.OnSurfaceVariant(),
  stateLayerColorDragged: Vars.ColorScheme.OnSurfaceVariant(),

  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
  stateLayerOpacityDragged: Vars.Opacities.Dragged(),
});