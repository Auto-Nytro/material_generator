import { Vars, MaybeVar, Dp, TypescaleRef, TextStyle,  } from "@internal/prelude";

export interface NavigationBarHorizontal {
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly activeIndicatorHeight: Dp,
  readonly activeIndicatorLeadingSpace: Dp,
  readonly activeIndicatorTrailingSpace: Dp,
  readonly activeIndicatorIconLabelSpace: Dp
}

export const create = (): NavigationBarHorizontal => {
  return {
    labelStyle: Vars.Typescale.LabelMedium(),
    activeIndicatorHeight: Dp.create(40),
    activeIndicatorLeadingSpace: Dp.create(16),
    activeIndicatorTrailingSpace: Dp.create(16),
    activeIndicatorIconLabelSpace: Dp.create(4),
  };
};