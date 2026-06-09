import { C, M } from "@internal/css";

export const toCss = (it: M.FontSizeMultiplier): string => {
  return C.Float.toCss(M.FontSizeMultiplier.value(it));
};

export const FontSizeMultiplier = {
  toCss,
};