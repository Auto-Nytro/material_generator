import { Vars, MaybeVar, Color, Ui } from "@internal/prelude";

export interface Filled {
  readonly containerColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,

  readonly disabledContainerColor: MaybeVar<Color>,
  readonly disabledContainerOpacity: MaybeVar<Opacity>;
  readonly disabledIconColor: MaybeVar<Color>,
  readonly disabledIconOpacity: MaybeVar<Opacity>;

  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>;
  readonly hoveredIconColor: MaybeVar<Color>,

  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>;
  readonly focusedIconColor: MaybeVar<Color>,

  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>;
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

export const create = (): Filled => {
  return {
    containerColor: Vars.ColorScheme.Primary(),
    iconColor: Vars.ColorScheme.OnPrimary(),

    disabledContainerColor: Vars.ColorScheme.OnSurface(),
    disabledContainerOpacity: Ui.create(0.1),
    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledIconOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.OnPrimary(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnPrimary(),
    
    focusedStateLayerColor: Vars.ColorScheme.OnPrimary(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnPrimary(),
    
    pressedStateLayerColor: Vars.ColorScheme.OnPrimary(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnPrimary(),
    
    unselectedContainerColor: Vars.ColorScheme.OnPrimary(),
    unselectedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedHoveredStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedHoveredIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedFocusedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedFocusedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedPressedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    unselectedPressedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    
    selectedContainerColor: Vars.ColorScheme.Primary(),
    selectedIconColor: Vars.ColorScheme.OnPrimary(),
    selectedHoveredStateLayerColor: Vars.ColorScheme.OnPrimary(),
    selectedHoveredIconColor: Vars.ColorScheme.OnPrimary(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.OnPrimary(),
    selectedFocusedIconColor: Vars.ColorScheme.OnPrimary(),
    selectedPressedStateLayerColor: Vars.ColorScheme.OnPrimary(),
    selectedPressedIconColor: Vars.ColorScheme.OnPrimary(),
  };
};