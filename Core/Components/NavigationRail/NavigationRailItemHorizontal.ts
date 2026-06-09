import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef } from "@internal/prelude";

export interface NavigationRailHorizontalItem {
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly activeIndicatorHeight: Dp,
  readonly activeIndicatorShape: MaybeVar<ShapeRadii>,
  readonly fullWidthLeadingSpace: Dp,
  readonly fullWidthTrailingSpace: Dp,
  readonly iconLabelSpace: Dp,
}

export const create = (): NavigationRailHorizontalItem => {
  return {
    labelStyle: Vars.Typescale.LabelLarge(),
    activeIndicatorHeight: Dp.create(56),
    activeIndicatorShape: Vars.ShapeScheme.Full(),
    fullWidthLeadingSpace: Dp.create(16),
    fullWidthTrailingSpace: Dp.create(16),
    iconLabelSpace: Dp.create(8),
  }
};