import { Vars, MaybeVar, Dp, ShapeRadii } from "@internal/prelude";

export interface DockedToolbar {
  readonly containerHeight: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly paddingLeading: Dp,
  readonly paddingTrailing: Dp,
  readonly spaceBetweenActionsMaximum: Dp,
  readonly spaceBetweenActionsMinimum: Dp,
}

export const create = (): DockedToolbar => ({
  containerHeight: Dp.create(64),
  containerShape: Vars.ShapeScheme.None(),
  paddingLeading: Dp.create(16),
  paddingTrailing: Dp.create(16),
  spaceBetweenActionsMaximum: Dp.create(32),
  spaceBetweenActionsMinimum: Dp.create(4),
});

export const DockedToolbar = {
  create,
};