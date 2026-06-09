import { C, M } from "@internal/css";

export const toCss = (it: M.LineHeight): string => {
  return C.Value.toCss(it);
};

export const LineHeight = {
  toCss,
};