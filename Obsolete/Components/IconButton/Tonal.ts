import { Vars, MaybeVar, Color, Ui } from "@internal/prelude";

export interface Tonal {
  readonly containerColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,

  readonly disabledContainerColor: MaybeVar<Color>,
  readonly disabledContainerOpacity: MaybeVar<Opacity>,
  readonly disabledIconColor: MaybeVar<Color>,
  readonly disabledIconOpacity: MaybeVar<Opacity>,

  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredIconColor: MaybeVar<Color>,

  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedIconColor: MaybeVar<Color>,

  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedIconColor: MaybeVar<Color>,

  readonly unselectedContainerColor: MaybeVar<Color>,
  readonly unselectedIconColor: MaybeVar<Color>,
  readonly unselectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly unselectedHoveredIconColor: MaybeVar<Color>,
  readonly unselectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly unselectedFocusedIconColor: MaybeVar<Color>,
  readonly unselectedPressedStateLayerColor: MaybeVar<Color>,
  readonly unselectedPressedIconColor: MaybeVar<Color>,

  readonly selectedContainerColor: MaybeVar<Color>,
  readonly selectedIconColor: MaybeVar<Color>,
  readonly selectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly selectedHoveredIconColor: MaybeVar<Color>,
  readonly selectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly selectedFocusedIconColor: MaybeVar<Color>,
  readonly selectedPressedStateLayerColor: MaybeVar<Color>,
  readonly selectedPressedIconColor: MaybeVar<Color>,
}

export const create = (): Tonal => {
  return {
    containerColor: Vars.ColorScheme.SecondaryContainer(),
    iconColor: Vars.ColorScheme.OnSecondaryContainer(),

    disabledContainerColor: Vars.ColorScheme.OnSurface(),
    disabledContainerOpacity: Ui.create(0.1),
    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledIconOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSecondaryContainer(),

    focusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSecondaryContainer(),

    pressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSecondaryContainer(),

    unselectedContainerColor: Vars.ColorScheme.SecondaryContainer(),
    unselectedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    unselectedHoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    unselectedHoveredIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    unselectedFocusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    unselectedFocusedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    unselectedPressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    unselectedPressedIconColor: Vars.ColorScheme.OnSecondaryContainer(),

    selectedContainerColor: Vars.ColorScheme.Secondary(),
    selectedIconColor: Vars.ColorScheme.OnSecondary(),
    selectedHoveredStateLayerColor: Vars.ColorScheme.OnSecondary(),
    selectedHoveredIconColor: Vars.ColorScheme.OnSecondary(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.OnSecondary(),
    selectedFocusedIconColor: Vars.ColorScheme.OnSecondary(),
    selectedPressedStateLayerColor: Vars.ColorScheme.OnSecondary(),
    selectedPressedIconColor: Vars.ColorScheme.OnSecondary(),
  };
};