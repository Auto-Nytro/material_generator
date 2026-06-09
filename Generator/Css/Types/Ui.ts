import { M } from "@internal/css";

export const toCss = (it: M.Ui): string => {
  return M.Ui.value(it).toString();
};

export const Ui = {
  toCss,
};