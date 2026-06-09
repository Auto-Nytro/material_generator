import { Vars, MaybeVar, Color, Ui, Opacity } from "@internal/prelude";


export interface Text {
  readonly labelColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,

  readonly disabledContainerColor: MaybeVar<Color>,
  readonly disabledContainerOpacity: MaybeVar<Opacity>,

  readonly disabledLabelColor: MaybeVar<Color>,
  readonly disabledLabelOpacity: MaybeVar<Opacity>,
  readonly disabledIconColor: MaybeVar<Color>,
  readonly disabledIconOpacity: MaybeVar<Opacity>,

  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredLabelColor: MaybeVar<Color>,
  readonly hoveredIconColor: MaybeVar<Color>,

  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedLabelColor: MaybeVar<Color>,
  readonly focusedIconColor: MaybeVar<Color>,

  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedLabelColor: MaybeVar<Color>,
  readonly pressedIconColor: MaybeVar<Color>,
}

export const baseline = (): Text => {
  return {
    labelColor: Vars.ColorScheme.Primary(),
    iconColor: Vars.ColorScheme.Primary(),

    disabledContainerColor: Vars.ColorScheme.OnSurface(),
    disabledContainerOpacity: Ui.create(0.1),

    disabledLabelColor: Vars.ColorScheme.OnSurface(),
    disabledLabelOpacity: Ui.create(0.38),
    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledIconOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.Primary(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredLabelColor: Vars.ColorScheme.Primary(),
    hoveredIconColor: Vars.ColorScheme.Primary(),

    focusedStateLayerColor: Vars.ColorScheme.Primary(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedLabelColor: Vars.ColorScheme.Primary(),
    focusedIconColor: Vars.ColorScheme.Primary(),

    pressedStateLayerColor: Vars.ColorScheme.Primary(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedLabelColor: Vars.ColorScheme.Primary(),
    pressedIconColor: Vars.ColorScheme.Primary(),
  };
};