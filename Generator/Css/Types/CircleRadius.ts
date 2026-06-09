import { M } from "@internal/css";

export const toCss = (it: M.CircleRadius) => {
  // 9999px is a hack to make a corner circular.
  return "9999px";
};

export const CircleRadius = {
  toCss,
};