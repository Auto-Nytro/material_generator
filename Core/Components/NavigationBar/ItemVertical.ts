import { Vars, MaybeVar, Dp, TypescaleRef, TextStyle,  } from "@internal/prelude";

export interface NavigationBarVertical {
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly activeIndicatorHeight: Dp,
  readonly activeIndicatorWidth: Dp,
  readonly containerBetweenSpace: Dp
  readonly activeIndicatorIconLabelSpace: Dp
}

export const create = (): NavigationBarVertical => {
  return {
    labelStyle: Vars.Typescale.LabelMedium(),
    activeIndicatorHeight: Dp.create(32),
    activeIndicatorWidth: Dp.create(56),
    containerBetweenSpace: Dp.create(6),
    activeIndicatorIconLabelSpace: Dp.create(4),
  };
};