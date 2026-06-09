import { M } from "@internal/css";

export const toCss = (it: M.Dp): string => {
  return `${M.Dp.value(it)}px`;
};

export const Dp = {
  toCss,
};