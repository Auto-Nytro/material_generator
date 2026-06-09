import { Vars, MaybeVar, Dp, ShapeRadii, TextStyle } from "@internal/prelude";

export interface Size {
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly labelStyle: MaybeVar<TextStyle>,
  readonly iconSize: Dp,
  readonly spaceLeading: Dp,
  readonly spaceMiddle: Dp,
  readonly spaceTrailing: Dp,
}

export const Small = (): Size => {
  return {
    containerHeight: Dp.create(56),
    containerShape: Vars.ShapeScheme.Large(),
    labelStyle: Vars.Typescale.TitleMedium(),
    iconSize: Dp.create(24),
    spaceLeading: Dp.create(16),
    spaceMiddle: Dp.create(8),
    spaceTrailing: Dp.create(16),
  };
};

export const Medium = (): Size => {
  return {
    containerHeight: Dp.create(80),
    containerShape: Vars.ShapeScheme.LargeIncreased(),
    labelStyle: Vars.Typescale.TitleLarge(),
    iconSize: Dp.create(28),
    spaceLeading: Dp.create(26),
    spaceMiddle: Dp.create(12),
    spaceTrailing: Dp.create(26),
  }
};

export const Large = (): Size => {
  return {
    containerHeight: Dp.create(96),
    containerShape: Vars.ShapeScheme.ExtraLarge(),
    labelStyle: Vars.Typescale.HeadlineSmall(),
    iconSize: Dp.create(36),
    spaceLeading: Dp.create(28),
    spaceMiddle: Dp.create(16),
    spaceTrailing: Dp.create(28),
  };
};

export const Size = {
  Small,
  Medium,
  Large,
};