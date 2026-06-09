import { C, M } from "@internal/css";

export const toCss = (it: M.FontWeight): string => {
  return C.Value.toCss(M.FontWeight.value(it));
};

export const FontWeight = {
  toCss,
};