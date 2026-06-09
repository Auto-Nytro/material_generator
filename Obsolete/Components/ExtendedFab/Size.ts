import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef } from "@internal/prelude";

export interface Size {
  readonly containerHeight: Dp,
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly iconSize: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly leadingSpace: Dp,
  readonly middleSpace: Dp,
  readonly trailingSpace: Dp,
}

export const Small = (): Size => {
  return {
    containerHeight: Dp.create(56),
    labelStyle: Vars.Typescale.TitleMedium(),
    iconSize: Dp.create(24),
    containerShape: Vars.ShapeScheme.Large(),
    leadingSpace: Dp.create(16),
    middleSpace: Dp.create(8),
    trailingSpace: Dp.create(16),
  };
};

export const Medium = (): Size => {
  return {
    containerHeight: Dp.create(80),
    labelStyle: Vars.Typescale.TitleLarge(),
    iconSize: Dp.create(28),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    leadingSpace: Dp.create(26),
    middleSpace: Dp.create(12),
    trailingSpace: Dp.create(26),
  }
};

export const Large = (): Size => {
  return {
    containerHeight: Dp.create(96),
    labelStyle: Vars.Typescale.HeadlineSmall(),
    iconSize: Dp.create(36),
    containerShape: Vars.ShapeScheme.ExtraLarge(),
    leadingSpace: Dp.create(28),
    middleSpace: Dp.create(16),
    trailingSpace: Dp.create(28),
  };
};