import { Vars, MaybeVar, Dp } from "@internal/prelude";

interface Common {
  readonly inter_element_padding: Dp
  // Apply this padding the side (left or right) if it does have an icon.
  readonly with_icon_horizontal_padding: Dp,
  // Apply this padding the side (left or right) if it doesn't have an icon.
  readonly without_icon_horizontal_padding: Dp,
}

export const Common_create = (): Common => {
  return {
    inter_element_padding: Dp.create(8),
    with_icon_horizontal_padding: Dp.create(8),
    without_icon_horizontal_padding: Dp.create(16),
  }
};