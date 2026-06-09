import { M } from "@internal/css";

export const toCss = (it: M.Duration): string => {
  const milliseconds = M.Duration.toMilliseconds(it);
  if (milliseconds === 0) {
    return "0ms";
  }
  if (milliseconds % 1000 === 0) {
    return `${milliseconds / 1000}s`;
  }
  return `${milliseconds}ms`;
};

export const Duration = {
  toCss,
};