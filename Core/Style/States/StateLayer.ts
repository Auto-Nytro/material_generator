import { Color, MaybeVar, Opacity } from "@internal/prelude";

export interface StateLayer {
  readonly color: MaybeVar<Color>,
  readonly opacity: MaybeVar<Opacity>,
}

export const StateLayer = {
  
};