import { M } from "@internal/css";

export const toCss = (it: M.Pt): string => {
  // TODO
  return `${M.Pt.value(it)}pt`;
};

export const Pt = {
  toCss,
};