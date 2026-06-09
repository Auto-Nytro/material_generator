import { Float } from "@internal/prelude";

export interface Spring {
  readonly damping: Float,
  readonly stiffness: Float,
}