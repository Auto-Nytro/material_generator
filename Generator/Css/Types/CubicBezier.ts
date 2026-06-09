import { C, M } from "@internal/css";

export const toCss = (it: M.CubicBezier): string => {
  return `cubic-bezier(${
    C.Pct.toCss(it.x1)
  }, ${
    C.Float.toCss(it.y1)
  }, ${
    C.Pct.toCss(it.x2)
  }, ${
    C.Float.toCss(it.y2)
  })`;
};

export const CubicBezier = {
  toCss,
};