import { Reference, FocusIndicator } from "@internal/prelude";

export const FocusIndicatorReferences = {
  thickness: Reference.create(
    "FocusIndicator.thickness",
    (it: FocusIndicator) => it.thickness,
  ),
  outerOffset: Reference.create(
    "FocusIndicator.outerOffset",
    (it: FocusIndicator) => it.outerOffset,
  ),
  innerOffset: Reference.create(
    "FocusIndicator.innerOffset",
    (it: FocusIndicator) => it.innerOffset,
  ),
} as const;