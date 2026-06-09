import { Opacities, Ui } from "@internal/prelude";

export const enum OpacitiesKey {
  Dragged,
  Pressed,
  Hovered,
  Focused,
  Disabled,
}

export class OpacitiesRef {
  private constructor(readonly discriminant: OpacitiesKey) {}

  private static readonly internalDragged = new OpacitiesRef(OpacitiesKey.Dragged);
  private static readonly internalPressed = new OpacitiesRef(OpacitiesKey.Pressed);
  private static readonly internalHovered = new OpacitiesRef(OpacitiesKey.Hovered);
  private static readonly internalFocused = new OpacitiesRef(OpacitiesKey.Focused);
  private static readonly internalDisabled = new OpacitiesRef(OpacitiesKey.Disabled);

  static Dragged() {
    return this.internalDragged;
  }
  static Pressed() {
    return this.internalPressed;
  }
  static Hovered() {
    return this.internalHovered;
  }
  static Focused() {
    return this.internalFocused;
  }
  static Disabled() {
    return this.internalDisabled;
  }

  deref(opacities: Opacities): Ui {
    switch (this.discriminant) {
      case OpacitiesKey.Dragged: return opacities.dragged;
      case OpacitiesKey.Pressed: return opacities.pressed;
      case OpacitiesKey.Hovered: return opacities.hovered;
      case OpacitiesKey.Focused: return opacities.focused;
      case OpacitiesKey.Disabled: return opacities.disabled;
    }
  }
}