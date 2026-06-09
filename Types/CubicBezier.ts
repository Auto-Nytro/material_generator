import { Discriminant, Float, Pct } from "@internal/prelude";

export interface CubicBezier {
  readonly discriminant: Discriminant.CubicBezier,
  readonly x1: Pct,
  readonly y1: Float,
  readonly x2: Pct,
  readonly y2: Float,
}

export const create = (
  x1: Pct,
  y1: Float,
  x2: Pct,
  y2: Float,
): CubicBezier => {
  return {
    discriminant: Discriminant.CubicBezier(),
    x1,
    y1,
    x2,
    y2,
  };
};

export const quick = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): CubicBezier => {
  return {
    discriminant: Discriminant.CubicBezier(),
    x1: Pct.create(x1),
    y1: Float.create(y1),
    x2: Pct.create(x2),
    y2: Float.create(y2),
  };
};

export const x1 = (it: CubicBezier): Pct => {
  return it.x1;
};

export const y1 = (it: CubicBezier): Float => {
  return it.y1;
};

export const x2 = (it: CubicBezier): Pct => {
  return it.x2;
};

export const y2 = (it: CubicBezier): Float => {
  return it.y2;
};

export const CubicBezier = {
  create,
  quick,
  x1,
  x2,
  y1,
  y2,
};