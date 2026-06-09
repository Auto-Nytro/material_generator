import { Vars, MaybeVar, CornerRadius, Dp, CircleRadius, ShapeRadii } from "@internal/prelude";

// NOTE: The spec assigned 50% to outerCornerSize
//       and trailingButtonInnerCornerSelectedSize.

// NOTE: In the spec, only ExtraSmall had outerCornerSize,
//       but we added it to all of them.

export interface SplitButtonSizeStyle {
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly spaceMiddle: Dp,
  readonly innerCornerSize: MaybeVar<CornerRadius> | CircleRadius,
  readonly outerCornerSize: MaybeVar<CornerRadius> | CircleRadius,
  readonly leadingButtonLeadingSpace: Dp,
  readonly leadingButtonTrailingSpace: Dp,
  readonly trailingButtonIconSize: Dp,
  readonly trailingButtonLeadingSpace: Dp,
  readonly trailingButtonTrailingSpace: Dp,
  readonly innerCornerHoveredSize: MaybeVar<CornerRadius> | CircleRadius,
  readonly innerCornerPressedSize: MaybeVar<CornerRadius> | CircleRadius,
  readonly trailingButtonInnerCornerSelectedSize: MaybeVar<CornerRadius> | CircleRadius,
}

export const ExtraSmall = (): SplitButtonSizeStyle => {
  return {
    containerHeight: Dp.create(32),
    containerShape: Vars.ShapeScheme.Full(),
    spaceMiddle: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.ExtraSmall(),
    outerCornerSize: CircleRadius.create(),
    leadingButtonLeadingSpace: Dp.create(12),
    leadingButtonTrailingSpace: Dp.create(10),
    trailingButtonIconSize: Dp.create(22),
    trailingButtonLeadingSpace: Dp.create(13),
    trailingButtonTrailingSpace: Dp.create(13),
    innerCornerHoveredSize: Vars.CornerRadii.Small(),
    innerCornerPressedSize: Vars.CornerRadii.Small(),
    trailingButtonInnerCornerSelectedSize: CircleRadius.create(),
  };
};


export const Small = (): SplitButtonSizeStyle => {
  return {
    containerHeight: Dp.create(40),
    containerShape: Vars.ShapeScheme.Full(),
    spaceMiddle: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.ExtraSmall(),
    outerCornerSize: CircleRadius.create(),
    leadingButtonLeadingSpace: Dp.create(16),
    leadingButtonTrailingSpace: Dp.create(12),
    trailingButtonIconSize: Dp.create(22),
    trailingButtonLeadingSpace: Dp.create(13),
    trailingButtonTrailingSpace: Dp.create(13),
    innerCornerHoveredSize: Vars.CornerRadii.Medium(),
    innerCornerPressedSize: Vars.CornerRadii.Medium(),
    trailingButtonInnerCornerSelectedSize: CircleRadius.create(),
  };
};

export const Medium = (): SplitButtonSizeStyle => {
  return {
    containerHeight: Dp.create(56),
    containerShape: Vars.ShapeScheme.Full(),
    spaceMiddle: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.ExtraSmall(),
    outerCornerSize: CircleRadius.create(),
    leadingButtonLeadingSpace: Dp.create(24),
    leadingButtonTrailingSpace: Dp.create(24),
    trailingButtonIconSize: Dp.create(26),
    trailingButtonLeadingSpace: Dp.create(15),
    trailingButtonTrailingSpace: Dp.create(15),
    innerCornerHoveredSize: Vars.CornerRadii.Medium(),
    innerCornerPressedSize: Vars.CornerRadii.Medium(),
    trailingButtonInnerCornerSelectedSize: CircleRadius.create(),
  };
};

export const Large = (): SplitButtonSizeStyle => {
  return {
    containerHeight: Dp.create(96),
    containerShape: Vars.ShapeScheme.Full(),
    spaceMiddle: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.Small(),
    outerCornerSize: CircleRadius.create(),
    leadingButtonLeadingSpace: Dp.create(48),
    leadingButtonTrailingSpace: Dp.create(48),
    trailingButtonIconSize: Dp.create(38),
    trailingButtonLeadingSpace: Dp.create(29),
    trailingButtonTrailingSpace: Dp.create(29),
    innerCornerHoveredSize: Vars.CornerRadii.LargeIncreased(),
    innerCornerPressedSize: Vars.CornerRadii.LargeIncreased(),
    trailingButtonInnerCornerSelectedSize: CircleRadius.create(),
    
  };
};

export const ExtraLarge = (): SplitButtonSizeStyle => {
  return {
    containerHeight: Dp.create(136),
    containerShape: Vars.ShapeScheme.Full(),
    spaceMiddle: Dp.create(2),
    innerCornerSize: Vars.CornerRadii.Medium(),
    outerCornerSize: CircleRadius.create(),
    leadingButtonLeadingSpace: Dp.create(64),
    leadingButtonTrailingSpace: Dp.create(64),
    trailingButtonIconSize: Dp.create(50),
    trailingButtonLeadingSpace: Dp.create(43),
    trailingButtonTrailingSpace: Dp.create(43),
    innerCornerHoveredSize: Vars.CornerRadii.LargeIncreased(),
    innerCornerPressedSize: Vars.CornerRadii.LargeIncreased(),
    trailingButtonInnerCornerSelectedSize: CircleRadius.create(),  
  };
};