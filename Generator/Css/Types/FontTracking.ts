import { C, M } from "@internal/css";

export const toCss = (it: M.FontTracking): string => {
  return C.Value.toCss(M.FontTracking.value(it));
};

export const FontTracking = {
  toCss,
};