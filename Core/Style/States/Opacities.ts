import { Ui } from "@internal/prelude";

export interface Opacities {
  readonly dragged: Ui,
  readonly pressed: Ui,
  readonly hovered: Ui,
  readonly focused: Ui,
  readonly disabled: Ui,
}

export const baseline = (): Opacities => {
  return {
    dragged: Ui.create(0.16),
    pressed: Ui.create(0.10),
    hovered: Ui.create(0.08),
    focused: Ui.create(0.10),
    disabled: Ui.create(0.38),
  };
};