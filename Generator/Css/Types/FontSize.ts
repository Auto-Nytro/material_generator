import { C, M } from "@internal/css";

export const toCss = (it: M.FontSize): string => {
  return C.Value.toCss(M.FontSize.value(it));
};

export const FontSize = {
  toCss,
};