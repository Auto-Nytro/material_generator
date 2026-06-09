import { Vars, MaybeVar, Dp } from "@internal/prelude";

export interface SliderWithIconSizeStyle {
  readonly activeTrackHeight: Dp,
  readonly activeTrackLeadingShape: Dp,
  readonly inactiveTrackHeight: Dp,
  readonly inactiveTrackTrailingShape: Dp,
  readonly activeHandleHeight: Dp,
  readonly iconPadding: Dp,
  readonly iconSize: Dp,
}

export const Medium = (): SliderWithIconSizeStyle => {
  return {
    activeTrackHeight: Dp.create(40),
    activeTrackLeadingShape: Dp.create(12),
    inactiveTrackHeight: Dp.create(40),
    inactiveTrackTrailingShape: Dp.create(12),
    activeHandleHeight: Dp.create(44),
    iconPadding: Dp.create(6),
    iconSize: Dp.create(24),
  };
};

export const Large = (): SliderWithIconSizeStyle => {
  return {
    activeTrackHeight: Dp.create(56),
    activeTrackLeadingShape: Dp.create(16),
    inactiveTrackHeight: Dp.create(56),
    inactiveTrackTrailingShape: Dp.create(16),
    activeHandleHeight: Dp.create(68),
    iconPadding: Dp.create(6),
    iconSize: Dp.create(24),
  };
};

export const ExtraLarge = (): SliderWithIconSizeStyle => {
  return {
    activeTrackHeight: Dp.create(96),
    activeTrackLeadingShape: Dp.create(28),
    inactiveTrackHeight: Dp.create(96),
    inactiveTrackTrailingShape: Dp.create(28),
    activeHandleHeight: Dp.create(108),
    iconPadding: Dp.create(8),
    iconSize: Dp.create(32),
  };
};