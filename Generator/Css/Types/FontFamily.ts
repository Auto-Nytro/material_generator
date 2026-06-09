import { M } from "@internal/css";

export const toCss = (it: M.FontFamily): string => {
  return M.FontFamily.value(it);
};

export const FontFamily = {
  toCss,
};