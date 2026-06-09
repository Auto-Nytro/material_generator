import { Vars, MaybeVar, Dp } from "@internal/prelude";

// The close button and FAB share the top 
// trailing corner as an anchor and appear 
// in the same place.

export interface FabMenu {
  // Vertical space separating the fab items from each other
  readonly interItemSpace: Dp,
  // Vertical space separating the fab items from the close button.
  readonly interSectionSpace: Dp,
  readonly openFabVerticalMargin: Dp,
  readonly openFabHorizontalMargin: Dp,
}

export const create = (): FabMenu => {
  return {
    interItemSpace: Dp.create(4),
    interSectionSpace: Dp.create(8),
    openFabVerticalMargin: Dp.create(16),
    openFabHorizontalMargin: Dp.create(16),
  };
};