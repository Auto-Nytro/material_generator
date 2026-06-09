import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef } from "@internal/prelude";

export interface NavigationRailVerticalItem {
  readonly activeIndicatorHeight: Dp,
  readonly activeIndicatorWidth: Dp,
  readonly activeIndicatorShape: MaybeVar<ShapeRadii>,
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly leadingSpace: Dp,
  readonly iconLabelSpace: Dp,
  readonly trailingSpace: Dp,    
}

export const create = (): NavigationRailVerticalItem => {
  return {
    activeIndicatorHeight: Dp.create(32),
    activeIndicatorWidth: Dp.create(56),
    activeIndicatorShape: Vars.ShapeScheme.Full(),
    labelStyle: Vars.Typescale.LabelMedium(),
    leadingSpace: Dp.create(16),
    iconLabelSpace: Dp.create(4),
    trailingSpace: Dp.create(16),
  }
};