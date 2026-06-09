import { M } from "@internal/css";

export const toCss = (it: M.Int): string => {
  return M.Int.value(it).toString();
};

export const Int = {
  toCss,
};