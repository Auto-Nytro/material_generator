import { Vars, MaybeVar, Color, Dp, ShapeRadii, TextStyle, Opacity, Elevation, Outline } from "@internal/prelude";

export interface PrimaryTabs {
  readonly containerHeight: Dp,
  readonly containerHeightWithIconAndLabel: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerColor: MaybeVar<Color>,
  readonly containerElevation: MaybeVar<Elevation>,

  readonly labelStyle: MaybeVar<TextStyle>,
  readonly labelColorInactive: MaybeVar<Color>,
  readonly labelColorInactiveHovered: MaybeVar<Color>,
  readonly labelColorInactiveFocused: MaybeVar<Color>,
  readonly labelColorInactivePressed: MaybeVar<Color>,
  readonly labelColorActive: MaybeVar<Color>,
  readonly labelColorActiveHovered: MaybeVar<Color>,
  readonly labelColorActiveFocused: MaybeVar<Color>,
  readonly labelColorActivePressed: MaybeVar<Color>,

  readonly iconSize: Dp,
  readonly iconColorInactive: MaybeVar<Color>,
  readonly iconColorInactiveHoveredIcon: MaybeVar<Color>,
  readonly iconColorInactiveFocused: MaybeVar<Color>,
  readonly iconColorInactivePressed: MaybeVar<Color>,
  readonly iconColorActive: MaybeVar<Color>,
  readonly iconColorActiveHoveredIcon: MaybeVar<Color>,
  readonly iconColorActiveFocused: MaybeVar<Color>,
  readonly iconColorActivePressed: MaybeVar<Color>,

  readonly activeIndicatorHeight: Dp,
  readonly activeIndicatorShape: MaybeVar<ShapeRadii>,
  readonly activeIndicatorColor: MaybeVar<Color>,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly stateLayerColorInactiveHovered: MaybeVar<Color>,
  readonly stateLayerColorInactiveFocused: MaybeVar<Color>,
  readonly stateLayerColorInactivePressed: MaybeVar<Color>,
  readonly stateLayerColorActiveHovered: MaybeVar<Color>,
  readonly stateLayerColorActiveFocused: MaybeVar<Color>,
  readonly stateLayerColorActivePressed: MaybeVar<Color>,

  readonly stateLayerOpacityInactiveHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityInactiveFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityInactivePressed: MaybeVar<Opacity>,
  readonly stateLayerOpacityActiveHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityActiveFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityActivePressed: MaybeVar<Opacity>,
}

export const create = (): PrimaryTabs => ({
  containerHeight: Dp.create(48),
  containerHeightWithIconAndLabel: Dp.create(64),
  containerShape: Vars.ShapeScheme.None(),
  containerColor: Vars.ColorScheme.Surface(),
  containerElevation: Vars.ElevationScheme.Level0(),

  labelStyle: Vars.Typescale.TitleSmall(),
  labelColorInactive: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorInactiveHovered: Vars.ColorScheme.OnSurface(),
  labelColorInactiveFocused: Vars.ColorScheme.OnSurface(),
  labelColorInactivePressed: Vars.ColorScheme.OnSurface(),
  labelColorActive: Vars.ColorScheme.Primary(),
  labelColorActiveHovered: Vars.ColorScheme.Primary(),
  labelColorActiveFocused: Vars.ColorScheme.Primary(),
  labelColorActivePressed: Vars.ColorScheme.Primary(),

  iconSize: Dp.create(24),
  iconColorInactive: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorInactiveHoveredIcon: Vars.ColorScheme.OnSurface(),
  iconColorInactiveFocused: Vars.ColorScheme.OnSurface(),
  iconColorInactivePressed: Vars.ColorScheme.OnSurface(),
  iconColorActive: Vars.ColorScheme.Primary(),
  iconColorActiveHoveredIcon: Vars.ColorScheme.Primary(),
  iconColorActiveFocused: Vars.ColorScheme.Primary(),
  iconColorActivePressed: Vars.ColorScheme.Primary(),

  activeIndicatorHeight: Dp.create(3),
  activeIndicatorShape: ShapeRadii.TopUniform(Dp.create(3)),
  activeIndicatorColor: Vars.ColorScheme.Primary(),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.InnerOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  stateLayerColorInactiveHovered: Vars.ColorScheme.OnSurface(),
  stateLayerColorInactiveFocused: Vars.ColorScheme.OnSurface(),
  stateLayerColorInactivePressed: Vars.ColorScheme.Primary(),
  stateLayerColorActiveHovered: Vars.ColorScheme.Primary(),
  stateLayerColorActiveFocused: Vars.ColorScheme.Primary(),
  stateLayerColorActivePressed: Vars.ColorScheme.Primary(),

  stateLayerOpacityInactiveHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityInactiveFocused: Vars.Opacities.Focused(),
  stateLayerOpacityInactivePressed: Vars.Opacities.Pressed(),
  stateLayerOpacityActiveHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityActiveFocused: Vars.Opacities.Focused(),
  stateLayerOpacityActivePressed: Vars.Opacities.Pressed(),
});

export const PrimaryTabs = {
  create,
};