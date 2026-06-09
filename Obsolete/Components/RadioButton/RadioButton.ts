import { Vars, MaybeVar, Color, Dp, Ui } from "@internal/prelude";

export interface RadioButton {
  readonly iconSize: Dp,

  readonly stateLayerSize: Dp,

  readonly unselectedIconColor: MaybeVar<Color>,
  readonly unselectedDisabledIconColor: MaybeVar<Color>,
  readonly unselectedDisabledIconOpacity: MaybeVar<Opacity>,
  readonly unselectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly unselectedHoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly unselectedHoveredIconColor: MaybeVar<Color>,
  readonly unselectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly unselectedFocusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly unselectedFocusedIconColor: MaybeVar<Color>,
  readonly unselectedPressedStateLayerColor: MaybeVar<Color>,
  readonly unselectedPressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly unselectedPressedIconColor: MaybeVar<Color>,

  readonly selectedIconColor: MaybeVar<Color>,
  readonly selectedDisabledIconColor: MaybeVar<Color>,
  readonly selectedDisabledIconOpacity: MaybeVar<Opacity>,
  readonly selectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly selectedHoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly selectedHoveredIconColor: MaybeVar<Color>,
  readonly selectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly selectedFocusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly selectedFocusedIconColor: MaybeVar<Color>,
  readonly selectedPressedStateLayerColor: MaybeVar<Color>,
  readonly selectedPressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly selectedPressedIconColor: MaybeVar<Color>,
}

export const create = (): RadioButton => {
  return {
    iconSize: Dp.create(20),

    stateLayerSize: Dp.create(40),

    unselectedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedDisabledIconColor: Vars.ColorScheme.OnSurface(),
    unselectedDisabledIconOpacity: Ui.create(0.38),
    unselectedHoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    unselectedHoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    unselectedHoveredIconColor: Vars.ColorScheme.OnSurface(),
    unselectedFocusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    unselectedFocusedStateLayerOpacity: Vars.Opacities.Focused(),
    unselectedFocusedIconColor: Vars.ColorScheme.OnSurface(),
    unselectedPressedStateLayerColor: Vars.ColorScheme.Primary(),
    unselectedPressedStateLayerOpacity: Vars.Opacities.Pressed(),
    unselectedPressedIconColor: Vars.ColorScheme.OnSurface(),

    selectedIconColor: Vars.ColorScheme.Primary(),
    selectedDisabledIconColor: Vars.ColorScheme.OnSurface(),
    selectedDisabledIconOpacity: Ui.create(0.38),
    selectedHoveredStateLayerColor: Vars.ColorScheme.Primary(),
    selectedHoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    selectedHoveredIconColor: Vars.ColorScheme.Primary(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.Primary(),
    selectedFocusedStateLayerOpacity: Vars.Opacities.Focused(),
    selectedFocusedIconColor: Vars.ColorScheme.Primary(),
    selectedPressedStateLayerColor: Vars.ColorScheme.OnSurface(),
    selectedPressedStateLayerOpacity: Vars.Opacities.Pressed(),
    selectedPressedIconColor: Vars.ColorScheme.Primary(),
  };
};