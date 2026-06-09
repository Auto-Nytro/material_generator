import { Vars, MaybeVar, Color, Ui } from "@internal/prelude";

export interface Outlined {
  readonly color: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,

  readonly disabledOutlineColor: MaybeVar<Color>,
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

  readonly unselectedColor: MaybeVar<Color>,
  readonly unselectedIconColor: MaybeVar<Color>,
  readonly unselectedDisabledOutlineColor: MaybeVar<Color>,
  readonly unselectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly unselectedHoveredIconColor: MaybeVar<Color>,
  readonly unselectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly unselectedFocusedIconColor: MaybeVar<Color>,
  readonly unselectedPressedStateLayerColor: MaybeVar<Color>,
  readonly unselectedPressedIconColor: MaybeVar<Color>,

  readonly selectedContainerColor: MaybeVar<Color>,
  readonly selectedIconColor: MaybeVar<Color>,
  readonly selectedDisabledContainerColor: MaybeVar<Color>,
  readonly selectedDisabledContainerOpacity: MaybeVar<Opacity>,
  readonly selectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly selectedHoveredIconColor: MaybeVar<Color>,
  readonly selectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly selectedFocusedIconColor: MaybeVar<Color>,
  readonly selectedPressedStateLayerColor: MaybeVar<Color>,
  readonly selectedPressedIconColor: MaybeVar<Color>,
}

export const create = (): Outlined => {
  return {
    color: Vars.ColorScheme.OutlineVariant(),
    iconColor: Vars.ColorScheme.OnSurfaceVariant(),

    disabledOutlineColor: Vars.ColorScheme.OutlineVariant(),
    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledIconOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    focusedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    pressedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    unselectedColor: Vars.ColorScheme.OutlineVariant(),
    unselectedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedDisabledOutlineColor: Vars.ColorScheme.OutlineVariant(),
    unselectedHoveredStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedHoveredIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedFocusedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedFocusedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedPressedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedPressedIconColor: Vars.ColorScheme.OnSurfaceVariant(),

    selectedContainerColor: Vars.ColorScheme.InverseSurface(),
    selectedIconColor: Vars.ColorScheme.InverseOnSurface(),
    selectedDisabledContainerColor: Vars.ColorScheme.OnSurface(),
    selectedDisabledContainerOpacity: Ui.create(0.1),
    selectedHoveredStateLayerColor: Vars.ColorScheme.InverseOnSurface(),
    selectedHoveredIconColor: Vars.ColorScheme.InverseOnSurface(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.InverseOnSurface(),
    selectedFocusedIconColor: Vars.ColorScheme.InverseOnSurface(),
    selectedPressedStateLayerColor: Vars.ColorScheme.InverseOnSurface(),
    selectedPressedIconColor: Vars.ColorScheme.InverseOnSurface(),
  };
};