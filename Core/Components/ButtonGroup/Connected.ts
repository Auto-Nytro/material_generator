import { Vars, MaybeVar, CornerRadius, Dp, Pct, ShapeRadii } from "@internal/prelude";

export interface Connected {
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly spaceInterButton: Dp,
  readonly innerCornerSize: MaybeVar<CornerRadius>,
  readonly innerCornerSizePressed: MaybeVar<CornerRadius>,
  readonly innerCornerSizeSelected: Pct,
}

export const ExtraSmall = (): Connected => {
  return {
    containerHeight: Dp.create(32),
    containerShape: Vars.ShapeScheme.Full(),
    spaceInterButton: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.Small(),
    innerCornerSizePressed: Vars.CornerRadii.ExtraSmall(),
    innerCornerSizeSelected: Pct.create(50),
  };
};

export const Small = (): Connected => {
  return {
    containerHeight: Dp.create(40),
    containerShape: Vars.ShapeScheme.Full(),
    spaceInterButton: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.Small(),
    innerCornerSizePressed: Vars.CornerRadii.ExtraSmall(),
    innerCornerSizeSelected: Pct.create(50),
  };
};

export const Medium = (): Connected => {
  return {
    containerHeight: Dp.create(56),
    containerShape: Vars.ShapeScheme.Full(),
    spaceInterButton: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.Small(),
    innerCornerSizePressed: Vars.CornerRadii.ExtraSmall(),
    innerCornerSizeSelected: Pct.create(50),
  };
};

export const Large = (): Connected => {
  return {
    containerHeight: Dp.create(96),
    containerShape: Vars.ShapeScheme.Full(),
    spaceInterButton: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.Large(),
    innerCornerSizePressed: Vars.CornerRadii.Medium(),
    innerCornerSizeSelected: Pct.create(50),
  };
};

export const ExtraLarge = (): Connected => {
  return {
    containerHeight: Dp.create(136),
    containerShape: Vars.ShapeScheme.Full(),
    spaceInterButton: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.LargeIncreased(),
    innerCornerSizePressed: Vars.CornerRadii.Large(),
    innerCornerSizeSelected: Pct.create(50),
  };
};

export const Connected = {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
};