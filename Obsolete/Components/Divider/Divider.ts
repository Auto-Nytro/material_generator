import { Vars, MaybeVar, Color, Dp } from "@internal/prelude";

export interface Divider {
  readonly thickness: Dp,
  readonly color: MaybeVar<Color>,
}

export const create = (): Divider => {
  return {
    thickness: Dp.create(1),
    color: Vars.ColorScheme.OutlineVariant(),
  };
};