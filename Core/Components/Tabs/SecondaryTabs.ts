import { Vars, MaybeVar, Color, Dp, ShapeRadii, TextStyle, Elevation, Opacity, Outline } from "@internal/prelude";

export interface SecondaryTabs {
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerColor: MaybeVar<Color>,
  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,

  readonly labelStyle: MaybeVar<TextStyle>,
  readonly labelColorActive: MaybeVar<Color>,
  readonly labelColorInactive: MaybeVar<Color>,
  readonly labelColorHovered: MaybeVar<Color>,
  readonly labelColorFocused: MaybeVar<Color>,
  readonly labelColorPressed: MaybeVar<Color>,

  readonly iconSize: Dp,
  readonly iconColorActive: MaybeVar<Color>,
  readonly iconColorInactive: MaybeVar<Color>,
  readonly iconColorHover: MaybeVar<Color>,
  readonly iconColorFocused: MaybeVar<Color>,
  readonly iconColorPressed: MaybeVar<Color>,

  readonly activeIndicatorColor: MaybeVar<Color>,
  readonly activeIndicatorHeight: Dp,

  readonly focusIndicator: MaybeVar<Outline>,

  readonly stateLayerColorHovered: MaybeVar<Color>,
  readonly stateLayerColorFocused: MaybeVar<Color>,
  readonly stateLayerColorPressed: MaybeVar<Color>,

  readonly stateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly stateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly stateLayerOpacityPressed: MaybeVar<Opacity>,
}

export const create  = (): SecondaryTabs => ({
  containerHeight: Dp.create(48),
  containerShape: Vars.ShapeScheme.None(),
  containerColor: Vars.ColorScheme.Surface(),
  containerElevation: Vars.ElevationScheme.Level0(),
  containerShadowColor: Vars.ColorScheme.Shadow(),

  labelStyle: Vars.Typescale.TitleSmall(),
  labelColorActive: Vars.ColorScheme.OnSurface(),
  labelColorInactive: Vars.ColorScheme.OnSurfaceVariant(),
  labelColorHovered: Vars.ColorScheme.OnSurface(),
  labelColorFocused: Vars.ColorScheme.OnSurface(),
  labelColorPressed: Vars.ColorScheme.OnSurface(),

  iconSize: Dp.create(24),
  iconColorActive: Vars.ColorScheme.OnSurface(),
  iconColorInactive: Vars.ColorScheme.OnSurfaceVariant(),
  iconColorHover: Vars.ColorScheme.OnSurface(),
  iconColorFocused: Vars.ColorScheme.OnSurface(),
  iconColorPressed: Vars.ColorScheme.OnSurface(),

  activeIndicatorColor: Vars.ColorScheme.Primary(),
  activeIndicatorHeight: Dp.create(2),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.InnerOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  stateLayerColorHovered: Vars.ColorScheme.OnSurface(),
  stateLayerColorFocused: Vars.ColorScheme.OnSurface(),
  stateLayerColorPressed: Vars.ColorScheme.OnSurface(),

  stateLayerOpacityHovered: Vars.Opacities.Hovered(),
  stateLayerOpacityFocused: Vars.Opacities.Focused(),
  stateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const SecondaryTabs = {
  create,
};