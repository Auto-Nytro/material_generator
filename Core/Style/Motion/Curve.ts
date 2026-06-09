import { CubicBezier, Duration } from "@internal/prelude";

export interface Curve {
  readonly easing: CubicBezier,
  readonly duration: Duration,
}
