import { Reference, Opacities } from "@internal/prelude";

export const StateLayerOpacitiesReferences = {
  dragged: Reference.create(
    "Opacities.dragged",
    (it: Opacities) => it.dragged,
  ),
  pressed: Reference.create(
    "Opacities.pressed",
    (it: Opacities) => it.pressed,
  ),
  hovered: Reference.create(
    "Opacities.hovered",
    (it: Opacities) => it.hovered,
  ),
  focused: Reference.create(
    "Opacities.focused",
    (it: Opacities) => it.focused,
  ),
  disabled: Reference.create(
    "Opacities.disabled",
    (it: Opacities) => it.disabled,
  ),
} as const;