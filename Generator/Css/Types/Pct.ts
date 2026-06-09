import { M } from "@internal/css";

export const toCss = (it: M.Pct): string => {
  return `${M.Pct.value(it)}%`;
};

export const Pct = {
  toCss,
};