import { Color, MaybeVar, Nullable, StateLayer, Vars } from "@internal/prelude";

export interface StateLayers {
  readonly dragged: Nullable<StateLayer>,
  readonly pressed: Nullable<StateLayer>,
  readonly hovered: Nullable<StateLayer>,
  readonly focused: Nullable<StateLayer>,
}

export const StateLayers = {
  BaselineSingleColor: ({
    color,
    dragged,
    focused,
    hovered,
    pressed,
  }: {
    readonly color: MaybeVar<Color>,
    readonly dragged?: false,
    readonly pressed?: false,
    readonly hovered?: false,
    readonly focused?: false,
  }): StateLayers => {
    return {
      dragged: dragged
        ? { color, opacity: Vars.Opacities.Dragged() }
        : null,
      hovered: hovered
        ? { color, opacity: Vars.Opacities.Hovered() }
        : null,
      focused: focused
        ? { color, opacity: Vars.Opacities.Focused() }
        : null,
      pressed: pressed
        ? { color, opacity: Vars.Opacities.Pressed() }
        : null,
    }
  },
}
