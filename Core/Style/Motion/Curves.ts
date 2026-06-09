import { CubicBezier, Duration, Curve } from "@internal/prelude";

export interface CurveCategory {
  readonly slow: Curve,
  readonly default: Curve,
  readonly fast: Curve,
}

export interface CurveScheme {
  readonly spatial: CurveCategory,
  readonly effects: CurveCategory,
}

export interface Curves {
  readonly expressive: CurveScheme,
  readonly standard: CurveScheme,
}

const baseline = (): Curves => {
  return {
    expressive: {
      spatial: {
        fast: {
          easing: CubicBezier.quick(0.42, 1.67, 0.21, 0.90),
          duration: Duration.ms(350),
        },
        default: {
          easing: CubicBezier.quick(0.38, 1.21, 0.22, 1.00),
          duration: Duration.ms(500),
        },
        slow: {
          easing: CubicBezier.quick(0.39, 1.29, 0.35, 0.98),
          duration: Duration.ms(650),
        },
      },
      effects: {
        fast: {
          easing: CubicBezier.quick(0.31, 0.94, 0.34, 1.00),
          duration: Duration.ms(150),
        },
        default: {
          easing: CubicBezier.quick(0.34, 0.80, 0.34, 1.00),
          duration: Duration.ms(200),
        },
        slow: {
          easing: CubicBezier.quick(0.34, 0.88, 0.34, 1.00),
          duration: Duration.ms(300),
        },
      },
    },
    standard: {
      spatial: {
        fast: {
          easing: CubicBezier.quick(0.27, 1.06, 0.18, 1.00),
          duration: Duration.ms(350),
        },
        default: {
          easing: CubicBezier.quick(0.27, 1.06, 0.18, 1.00),
          duration: Duration.ms(500),
        },
        slow: {
          easing: CubicBezier.quick(0.27, 1.06, 0.18, 1.00),
          duration: Duration.ms(750),
        },
      },
      effects: {
        fast: {
          easing: CubicBezier.quick(0.31, 0.94, 0.34, 1.00),
          duration: Duration.ms(150),
        },
        default: {
          easing: CubicBezier.quick(0.34, 0.80, 0.34, 1.00),
          duration: Duration.ms(200),
        },
        slow: {
          easing: CubicBezier.quick(0.34, 0.88, 0.34, 1.00),
          duration: Duration.ms(300),
        },
      },
    }
  };
};

export const Curves = {
  baseline,
};