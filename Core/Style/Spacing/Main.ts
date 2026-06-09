import { Dp } from "@internal/prelude";

// md.sys.measurement.space100

export interface Spacing {
  readonly n0: Dp,
  readonly n25: Dp,
  readonly n50: Dp,
  readonly n75: Dp,
  readonly n100: Dp,
  readonly n125: Dp,
  readonly n150: Dp,
  readonly n175: Dp,
  readonly n200: Dp,
  readonly n250: Dp,
  readonly n300: Dp,
  readonly n400: Dp,
  readonly n450: Dp,
  readonly n500: Dp,
  readonly n600: Dp,
  readonly n700: Dp,
  readonly n800: Dp,
  readonly n900: Dp,
}

export const create = (): Spacing => ({
  n0: Dp.create(0),
  n25: Dp.create(2),
  n50: Dp.create(4),
  n75: Dp.create(6),
  n100: Dp.create(8),
  n125: Dp.create(10),
  n150: Dp.create(12),
  n175: Dp.create(14),
  n200: Dp.create(16),
  n250: Dp.create(20),
  n300: Dp.create(24),
  n400: Dp.create(32),
  n450: Dp.create(36),
  n500: Dp.create(40),
  n600: Dp.create(48),
  n700: Dp.create(56),
  n800: Dp.create(64),
  n900: Dp.create(72),
});