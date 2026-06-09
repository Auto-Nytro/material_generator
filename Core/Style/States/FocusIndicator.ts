import { Dp } from "@internal/prelude";

export interface FocusIndicator {
  readonly thickness: Dp,
  readonly outerOffset: Dp,
  readonly innerOffset: Dp,
}

export const baseline = (): FocusIndicator => {
  return {
    thickness: Dp.create(3),
    outerOffset: Dp.create(2),
    innerOffset: Dp.create(-3),
  };
};

export const FocusIndicator = {
  baseline,
};