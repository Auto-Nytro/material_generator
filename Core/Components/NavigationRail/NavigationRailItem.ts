import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, Ui } from "@internal/prelude";

export interface NavigationRailItem {
  readonly activeIndicatorColor: MaybeVar<Color>,
  readonly activeLabelTextColor: MaybeVar<Color>,
  readonly inactiveLabelTextColor: MaybeVar<Color>,
  readonly activeIconColor: MaybeVar<Color>,
  readonly inactiveIconColor: MaybeVar<Color>,

  readonly activeHoveredStateLayerColor: MaybeVar<Color>,
  readonly activeHoveredStateLayer_opacity: MaybeVar<Opacity>,
  readonly inactiveHoveredStateLayerColor: MaybeVar<Color>,

  readonly active_focusedStateLayerColor: MaybeVar<Color>,
  readonly active_focusedStateLayer_opacity: MaybeVar<Opacity>,
  readonly inactive_focusedStateLayerColor: MaybeVar<Color>,

  readonly active_pressedStateLayerColor: MaybeVar<Color>,
  readonly active_pressedStateLayer_opacity: MaybeVar<Opacity>,
  readonly inactive_pressedStateLayerColor: MaybeVar<Color>,

  readonly iconSize: Dp,
  readonly activeIndicatorShape: MaybeVar<ShapeRadii>,
  readonly activeIndicatorLeadingSpace: Dp,
  readonly activeIndicatorIconLabelSpace: Dp,
  readonly activeIndicatorTrailingSpace: Dp,
  readonly containerHeight: Dp,
  readonly shortContainerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerVerticalSpace: Dp,
  readonly headerSpaceMinimum: Dp,
}

export const create = (): NavigationRailItem => {
  return {
  activeIndicatorColor: Vars.ColorScheme.SecondaryContainer(),
    activeLabelTextColor: Vars.ColorScheme.Secondary(),
    inactiveLabelTextColor: Vars.ColorScheme.OnSurfaceVariant(),
    activeIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    inactiveIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    activeHoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    activeHoveredStateLayer_opacity: Vars.Opacities.Hovered(),
    inactiveHoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),

    active_focusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    active_focusedStateLayer_opacity: Vars.Opacities.Focused(),
    inactive_focusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),

    active_pressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    active_pressedStateLayer_opacity: Vars.Opacities.Pressed(),
    inactive_pressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),

    iconSize: Dp.create(24),
    activeIndicatorShape: Vars.ShapeScheme.Full(),
    activeIndicatorLeadingSpace: Dp.create(16),
    activeIndicatorIconLabelSpace: Dp.create(8),
    activeIndicatorTrailingSpace: Dp.create(16),
    containerHeight: Dp.create(64),
    shortContainerHeight: Dp.create(56),
    containerShape: Vars.ShapeScheme.None(),
    containerVerticalSpace: Dp.create(6),
    headerSpaceMinimum: Dp.create(40),
  }
};