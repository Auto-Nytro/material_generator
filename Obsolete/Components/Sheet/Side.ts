import { Vars, MaybeVar, Color, Dp, FocusIndicatorRef, Pct, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui } from "@internal/prelude";

export interface SideSheet {
  readonly dockedModalContainerColor: MaybeVar<Color>,
  readonly dockedStandardContainerColor: MaybeVar<Color>,
  readonly dockedModalContainerElevation: MaybeVar<Elevation>,
  readonly dockedStandardContainerElevation: MaybeVar<Elevation>,
  readonly dockedContainerHeight: Pct,
  readonly dockedContainerShape: MaybeVar<ShapeRadii>,
  readonly detachedContainerShape: MaybeVar<ShapeRadii>,
  readonly dockedContainerWidth: Dp,
  readonly dockedModalContainerShape: MaybeVar<ShapeRadii>,
  readonly dockedHeadlineColor: MaybeVar<Color>,
  readonly dockedHeadlineRole: MaybeVar<TextStyle>,

  readonly dockedDividerColor: MaybeVar<Color>,

  readonly dockedActionHoverLabelTextColor: MaybeVar<Color>,
  readonly dockedActionHoverStateLayerColor: MaybeVar<Color>,
  readonly dockedActionHoverStateLayerOpacity: MaybeVar<Opacity>,

  readonly dockedFocusedIndicatorColor: MaybeVar<Color>,
  readonly dockedFocusedIndicatorThickness: FocusIndicatorRefThickness,
  readonly dockedFocusedIndicatorOffset: MaybeVar<Dp>,

  readonly dockedActionFocusedLabelTextColor: MaybeVar<Color>,
  readonly dockedActionFocusedStateLayerColor: MaybeVar<Color>,
  readonly dockedActionFocusedStateLayerOpacity: MaybeVar<Opacity>,

  readonly dockedActionPressedLabelTextColor: MaybeVar<Color>,
  readonly dockedActionPressedStateLayerColor: MaybeVar<Color>,
  readonly dockedActionPressedStateLayerOpacity: MaybeVar<Opacity>,
}

export const create = (): SideSheet => {
  return {
    dockedModalContainerColor: Vars.ColorScheme.SurfaceContainerLow(),
    dockedStandardContainerColor: Vars.ColorScheme.Surface(),
    dockedModalContainerElevation: Vars.ElevationScheme.Level1(),
    dockedStandardContainerElevation: Vars.ElevationScheme.Level0(),
    dockedContainerHeight: Pct.create(100),
    dockedContainerShape: Vars.ShapeScheme.None(),
    detachedContainerShape: Vars.ShapeScheme.Large(),
    dockedContainerWidth: Dp.create(256),
    dockedModalContainerShape: Vars.ShapeScheme.LargeStart(),
    dockedHeadlineColor: Vars.ColorScheme.OnSurfaceVariant(),
    dockedHeadlineRole: Vars.Typescale.TitleLarge(),

    dockedDividerColor: Vars.ColorScheme.Outline(),

    dockedActionHoverLabelTextColor: Vars.ColorScheme.Primary(),
    dockedActionHoverStateLayerColor: Vars.ColorScheme.Primary(),
    dockedActionHoverStateLayerOpacity: Vars.Opacities.Hovered(),

    dockedFocusedIndicatorColor: Vars.ColorScheme.Secondary(),
    dockedFocusedIndicatorThickness: Vars.FocusIndicator.Thickness(),
    dockedFocusedIndicatorOffset: Vars.FocusIndicator.OuterOffset(),

    dockedActionFocusedLabelTextColor: Vars.ColorScheme.Primary(),
    dockedActionFocusedStateLayerColor: Vars.ColorScheme.Primary(),
    dockedActionFocusedStateLayerOpacity: Vars.Opacities.Focused(),

    dockedActionPressedLabelTextColor: Vars.ColorScheme.Primary(),
    dockedActionPressedStateLayerColor: Vars.ColorScheme.Primary(),
    dockedActionPressedStateLayerOpacity: Vars.Opacities.Pressed(),
  };
};