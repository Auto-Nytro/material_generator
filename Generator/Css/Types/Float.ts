import { M } from "@internal/css";

export const toCss = (it: M.Float): string => {
  return M.Float.value(it).toString();
};

export const Float = {
  toCss,
};