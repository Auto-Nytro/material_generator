import { Vars, MaybeVar, Dp, ShapeRadii, ShapesRef } from "@internal/prelude";

export interface DockedToolbar {
  readonly containerHeight: Dp,
  readonly leadingPadding: Dp,
  readonly trailingPadding: Dp,
  readonly maxSpaceBetweenActions: Dp,
  readonly minSpaceBetweenActions: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
}

export const create = (): DockedToolbar => {
  return {
    containerHeight: Dp.create(64),
    leadingPadding: Dp.create(16),
    trailingPadding: Dp.create(16),
    maxSpaceBetweenActions: Dp.create(32),
    minSpaceBetweenActions: Dp.create(4),
    containerShape: Vars.ShapeScheme.None(),
  };
};