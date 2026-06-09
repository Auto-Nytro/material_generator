import { M } from "@internal/css";

export const toCss = (it: M.HexColor): string => {
  return M.HexColor.toString(it);
};

export const Color = {
  toCss,
};