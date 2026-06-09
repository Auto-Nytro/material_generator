import { Vars, MaybeVar, Dp } from "@internal/prelude";

export interface SliderWithoutIcon {
  readonly activeTrackHeight: Dp,
  readonly activeTrackLeadingShape: Dp,
  readonly inactiveTrackHeight: Dp,
  readonly inactiveTrackTrailingShape: Dp,
  readonly activeHandleHeight: Dp,
}

export const ExtraSmall = (): SliderWithoutIcon => {
  return {
    activeTrackHeight: Dp.create(16),
    activeTrackLeadingShape: Dp.create(8),
    inactiveTrackHeight: Dp.create(16),
    inactiveTrackTrailingShape: Dp.create(8),
    activeHandleHeight: Dp.create(44),
  };
};

export const Small = (): SliderWithoutIcon => {
  return {
    activeTrackHeight: Dp.create(24),
    activeTrackLeadingShape: Dp.create(8),
    inactiveTrackHeight: Dp.create(24),
    inactiveTrackTrailingShape: Dp.create(8),
    activeHandleHeight: Dp.create(44),
  };
};