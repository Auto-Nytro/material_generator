import { Vars, MaybeVar, Color, Ui } from "@internal/prelude";

export interface Standard {
  readonly iconColor: MaybeVar<Color>,

  readonly disabledIconColor: MaybeVar<Color>,
  readonly disabledOpacity: MaybeVar<Opacity>,

  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredIconColor: MaybeVar<Color>,

  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedIconColor: MaybeVar<Color>,

  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedIconColor: MaybeVar<Color>,

  readonly unselectedIconColor: MaybeVar<Color>,
  readonly unselectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly unselectedHoveredIconColor: MaybeVar<Color>,
  readonly unselectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly unselectedFocusedIconColor: MaybeVar<Color>,
  readonly unselectedPressedStateLayerColor: MaybeVar<Color>,
  readonly unselectedPressedIconColor: MaybeVar<Color>,

  readonly selectedIconColor: MaybeVar<Color>,
  readonly selectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly selectedHoveredIconColor: MaybeVar<Color>,
  readonly selectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly selectedFocusedIconColor: MaybeVar<Color>,
  readonly selectedPressedStateLayerColor: MaybeVar<Color>,
  readonly selectedPressedIconColor: MaybeVar<Color>,
}

export const create = (): Standard => {
  return {
    iconColor: Vars.ColorScheme.OnSurfaceVariant(),

    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    focusedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    pressedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    unselectedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedHoveredStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedHoveredIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedFocusedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedFocusedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedPressedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedPressedIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    selectedIconColor: Vars.ColorScheme.Primary(),
    selectedHoveredStateLayerColor: Vars.ColorScheme.Primary(),
    selectedHoveredIconColor: Vars.ColorScheme.Primary(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.Primary(),
    selectedFocusedIconColor: Vars.ColorScheme.Primary(),
    selectedPressedStateLayerColor: Vars.ColorScheme.Primary(),
    selectedPressedIconColor: Vars.ColorScheme.Primary(),
  }
};