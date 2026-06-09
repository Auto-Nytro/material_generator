import { Vars, MaybeVar, CornerRadius, Dp, Pct, ShapeRadii } from "@internal/prelude";

export interface Connected {
  readonly containerHeight: Dp,
  readonly spaceBetweenButtons: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly innerCornerSize: MaybeVar<CornerRadius>,
  readonly pressedInnerCornerSize: MaybeVar<CornerRadius>,
  readonly selectedInnerCornerSize: Pct,
}

export const ExtraSmall = (): Connected => {
  return {
    containerHeight: Dp.create(32),
    spaceBetweenButtons: Dp.create(2),
    containerShape: Vars.ShapeScheme.Full(),
    innerCornerSize: Vars.CornerRadii.Small(),
    pressedInnerCornerSize: Vars.CornerRadii.ExtraSmall(),
    selectedInnerCornerSize: Pct.create(50),
  };
};

export const Small = (): Connected => {
  return {
    containerHeight: Dp.create(40),
    spaceBetweenButtons: Dp.create(2),
    containerShape: Vars.ShapeScheme.Full(),
    innerCornerSize: Vars.CornerRadii.Small(),
    pressedInnerCornerSize: Vars.CornerRadii.ExtraSmall(),
    selectedInnerCornerSize: Pct.create(50),
  };
};

export const Medium = (): Connected => {
  return {
    containerHeight: Dp.create(56),
    spaceBetweenButtons: Dp.create(2),
    containerShape: Vars.ShapeScheme.Full(),
    innerCornerSize: Vars.CornerRadii.Small(),
    pressedInnerCornerSize: Vars.CornerRadii.ExtraSmall(),
    selectedInnerCornerSize: Pct.create(50),
  };
};

export const Large = (): Connected => {
  return {
    containerHeight: Dp.create(96),
    spaceBetweenButtons: Dp.create(2),
    containerShape: Vars.ShapeScheme.Full(),
    innerCornerSize: Vars.CornerRadii.Large(),
    pressedInnerCornerSize: Vars.CornerRadii.Medium(),
    selectedInnerCornerSize: Pct.create(50),
  };
};

export const ExtraLarge = (): Connected => {
  return {
    containerHeight: Dp.create(136),
    spaceBetweenButtons: Dp.create(2),
    containerShape: Vars.ShapeScheme.Full(),
    innerCornerSize: Vars.CornerRadii.LargeIncreased(),
    pressedInnerCornerSize: Vars.CornerRadii.Large(),
    selectedInnerCornerSize: Pct.create(50),
  };
};