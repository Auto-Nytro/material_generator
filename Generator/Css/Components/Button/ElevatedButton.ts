import { M } from "@internal/css";

const ColorWithOpacity = null as any;
const withAlpha = (it: any, other: any): any => {};

export class Stylesheet {
  forClass(cssClass: string): Style { return new Style(); }
  forSelector(selector: string): Style { return new Style(); }
}

export class Style {
  display(value: string) { return this; }
  flexFlow(value: string) { return this; }
  gap(value: M.MaybeVar<M.Length>) { return this; }

  height(value: M.MaybeVar<M.Length>) { return this; }
  paddingLeft(value: M.MaybeVar<M.Length>) { return this; }
  paddingRight(value: M.MaybeVar<M.Length>) { return this; }
  width(value: M.MaybeVar<M.Length>) { return this; }

  textStyle(textStyle: M.MaybeVar<M.TextStyle>): Style { return this; }
  backgroundColor(color: M.MaybeVar<M.Color>): Style { return this; }
  backgroundColorTranslucent(color: M.MaybeVar<M.Color>, alpha: any): Style { return this; }
  color(color: M.MaybeVar<M.Color>): Style { return this; }
  colorTranslucent(color: M.MaybeVar<M.Color>, opacity: M.MaybeVar<M.Opacity>): Style { return this; }
  shadowColor(value: any): Style { return this; }
  shadowElevation(shadowColor: any, elevationLevel: any): Style { return this; }
  elevationLevel(elevationLevel: any): Style { return this; }
  shape(value: M.MaybeVar<M.ShapeRadii>): Style { return this; }
  shapeMorphSpring(value: M.MaybeVar<M.Spring>): Style { return this; }
  iconSize(value: M.MaybeVar<M.Length>,): Style { return this; }
  
  stateLayer(color: any, opacity: any): Style { return this; }
  stateLayerColor(color: any): Style { return this; }
  stateLayerOpacity(color: any): Style { return this; }
  var(name: string, value: any): Style { return this; }

  extend(cssClass: string): Style { return this; }

  forModifier(modifier: string): Style { return new Style(); }
  forAncestorModifier(ancestorClass: string, ancestorModifier: string): Style { return new Style(); }

  forHovered(): Style { return new Style(); }
  forFocused(): Style { return new Style() }
  forPressed(): Style { return new Style(); }
  forDisabled(): Style { return new Style(); }

  onModifier(x: string, styler: (style: Style) => void): Style { return this; }
  onAncestorToggleModifier(
    ancestorClass: string, 
    ancestorModifier: string,
    stylers: {
      on: (style: Style) => void
      off: (style: Style) => void
    }
  ): Style { 
    return this; 
  }

  onAncestorModifiers(
    ancestorClass: string, 
    ancestorModifiers: Record<string, (style: Style) => void>
  ): Style { 
    return this; 
  }

  onToggleModifier(x: string, {}: {
    on: (style: Style) => void
    off: (style: Style) => void
  }): Style { return this; }
  onHovered(styler: (style: Style) => void): Style { return this; }
  onFocused(styler: (style: Style) => void): Style { return this; }
  onPressed(styler: (style: Style) => void): Style { return this; }
  onDisabled(styler: (style: Style) => void): Style { return this; }
  onAncestorDisabled(ancestorClass: string, styler: (style: Style) => void): Style { return this; }
  
  onStates({}: {
    normal?: (style: Style) => void,
    hovered?: (style: Style) => void,
    pressed?: (style: Style) => void,
    focused?: (style: Style) => void,
    disabled?: (style: Style) => void,
  }): Style { 
    return this; 
  }

  onAncestorStates(ancestorClass: string, {}: {
    normal?: (style: Style) => void,
    hovered?: (style: Style) => void,
    pressed?: (style: Style) => void,
    focused?: (style: Style) => void,
    disabled?: (style: Style) => void,
  }): Style { 
    return this; 
  }

  colorOnStates(values: {
    normal?: M.MaybeVar<M.Color>,
    hovered?: M.MaybeVar<M.Color>,
    pressed?: M.MaybeVar<M.Color>,
    focused?: M.MaybeVar<M.Color>,
    disabled?: M.MaybeVar<M.Color>,
  }): Style { 
    return this; 
  }

  elevationLevelOnStates(values: {
    normal?: M.MaybeVar<M.Elevation>,
    hovered?: M.MaybeVar<M.Elevation>,
    pressed?: M.MaybeVar<M.Elevation>,
    focused?: M.MaybeVar<M.Elevation>,
    disabled?: M.MaybeVar<M.Elevation>,
  }): Style { 
    return this; 
  }

  colorOnAncestorStates(
    ancestorClass: string,
    values: {
      normal?: M.MaybeVar<M.Color>,
      hovered?: M.MaybeVar<M.Color>,
      pressed?: M.MaybeVar<M.Color>,
      focused?: M.MaybeVar<M.Color>,
      disabled?: M.MaybeVar<M.Color>,
    }
  ): Style { 
    return this; 
  }
  
  iconSizeOnAncestorModifiers(
    ancestorClass: string,
    modifiers: Record<string, M.MaybeVar<M.Length>>
  ): Style { 
    return this; 
  }
  
  textStyleOnAncestorModifiers(
    ancestorClass: string,
    modifiers: Record<string, M.MaybeVar<M.TextStyle>>
  ): Style { 
    return this; 
  }
  
}

export interface Context {
  readonly style: {
    readonly button: {
      readonly xs: M.ButtonSize,
      readonly sm: M.ButtonSize,
      readonly md: M.ButtonSize,
      readonly lg: M.ButtonSize,
      readonly xl: M.ButtonSize,
      readonly filled: M.FilledButton,
      readonly tonal: M.TonalButton,
      readonly elevated: M.ElevatedButton,
      readonly outlined: M.OutlinedButton,
      readonly text: M.TextButton,
    }
    filledButton: M.FilledButton,
    elevation: M.ElevationScheme,
  }
  readonly vars: {
    readonly colorPalette: Record<string, { name: string, value: string }>,
    readonly colorScheme: Record<string, { name: string, value: string }>,
    readonly opacities: Record<string, { name: string, value: string }>,
    readonly shadowElevation: Record<string, { name: string, value: string }>,
    readonly focusIndicator: Record<string, { name: string, value: string }>,
    readonly shapes: Record<string, { name: string, value: string }>,
    readonly springs: Record<string, { name: string, value: string }>,
    readonly elevation0: string,
    readonly elevation1: string,
    readonly elevation2: string,
    readonly elevation3: string,
    readonly elevation4: string,
    readonly elevation5: string,
  }
  readonly class: {
    readonly button: string,
    readonly buttonIcon: string,
    readonly buttonLabel: string,
  }
  readonly modifier: {
    readonly xs: string,
    readonly sm: string,
    readonly md: string,
    readonly lg: string,
    readonly xl: string,
    
    readonly toggle: string,
    readonly selected: string,

    readonly filled: string,
    readonly tonal: string,
    readonly elevated: string,
    readonly outlined: string,
    readonly text: string,

    readonly square: string,
    readonly round: string,
  },
}

const Tonal = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.filledButton;
  const button = context.classes.button;
  const tonal = button.tonal;

  stylesheet.forClass(tonal.container)
    .onDisabled(s => s.backgroundColorTranslucent(
      style.containerColorDisabled, 
      style.containerOpacityDisabled,
    ))
    .shadowColor(style.containerShadowColor)
    .elevationLevelOnStates({
      normal: style.containerElevation,
      pressed: style.containerElevationPressed,
      focused: style.containerElevationFocused,
      disabled: style.containerElevationDisabled,
    })
    .onStates({
      pressed: s => s.stateLayerOpacity(style.stateLayerOpacityPressed),
      hovered: s => s.stateLayerOpacity(style.stateLayerOpacityHovered),
      focused: s => s.stateLayerOpacity(style.stateLayerOpacityFocused),
    })
    .onModifier(tonal.containerRegular, s => s 
      .backgroundColor(style.containerColor)
      .onStates({
        pressed: s => s.stateLayerColor(style.stateLayerColorPressed),
        hovered: s => s.stateLayerColor(style.stateLayerColorHovered),
        focused: s => s.stateLayerColor(style.stateLayerColorFocused),
      })
    )
    .onModifier(tonal.containerToggle, s => s
      .onToggleModifier(tonal.containerSelected, {
        off: s => s 
          .backgroundColor(style.containerColorUnselected)
          .onStates({
            pressed: s => s.stateLayerColor(style.stateLayerColorUnselectedPressed),
            hovered: s => s.stateLayerColor(style.stateLayerColorUnselectedHovered),
            focused: s => s.stateLayerColor(style.stateLayerColorUnselectedFocused),
          }),

        on: s => s 
          .backgroundColor(style.containerColorSelected)
          .onStates({
            pressed: s => s.stateLayerColor(style.stateLayerColorSelectedPressed),
            hovered: s => s.stateLayerColor(style.stateLayerColorSelectedHovered),
            focused: s => s.stateLayerColor(style.stateLayerColorSelectedFocused),
          }),
      })
    );

  stylesheet.forClass(tonal.label)
    .extend(button.label)
    .color(style.labelColor)
    .onDisabled(s => s.colorTranslucent(
      style.labelColorDisabled,
      style.labelOpacityDisabled,
    ))
    .onModifier(tonal.labelRegular, s => s
      .onStates({
        normal: s => s.color(style.labelColor),
        pressed: s => s.color(style.labelColorPressed),
        hovered: s => s.color(style.labelColorHovered),
        focused: s => s.color(style.labelColorFocused),
      })
    )
    .onModifier(tonal.labelToggle, s => s 
      .onToggleModifier(tonal.labelSelected, {
        off: s => s.onStates({
          normal: s => s.color(style.labelColorUnselected),
          pressed: s => s.color(style.labelColorUnselectedPressed),
          hovered: s => s.color(style.labelColorUnselectedHovered),
          focused: s => s.color(style.labelColorUnselectedFocused),
        }),
        on: s => s.onStates({
          normal: s => s.color(style.labelColorSelected),
          pressed: s => s.color(style.labelColorSelectedPressed),
          hovered: s => s.color(style.labelColorSelectedHovered),
          focused: s => s.color(style.labelColorSelectedFocused),
        }),
      })
    )

  stylesheet.forClass(tonal.icon)
    .extend(button.icon)
    .color(style.iconColor)
    .onDisabled(s => s.colorTranslucent(
      style.iconColorDisabled,
      style.iconOpacityDisabled,
    ))
    .onModifier(tonal.iconRegular, s => s
      .onStates({
        normal: s => s.color(style.iconColor),
        pressed: s => s.color(style.iconColorPressed),
        hovered: s => s.color(style.iconColorHovered),
        focused: s => s.color(style.iconColorFocused),
      })
    )
    .onModifier(tonal.iconToggle, s => s 
      .onToggleModifier(tonal.iconSelected, {
        off: s => s.onStates({
          normal: s => s.color(style.iconColorUnselected),
          pressed: s => s.color(style.iconColorUnselectedPressed),
          hovered: s => s.color(style.iconColorUnselectedHovered),
          focused: s => s.color(style.iconColorUnselectedFocused),
        }),
        on: s => s.onStates({
          normal: s => s.color(style.iconColorSelected),
          pressed: s => s.color(style.iconColorSelectedPressed),
          hovered: s => s.color(style.iconColorSelectedHovered),
          focused: s => s.color(style.iconColorSelectedFocused),
        }),
      })
    )
};

const ExtraSmall = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.xs;
  const { button } = context.class;
  const { toggle, selected, square, round, xs } = context.modifier;

  stylesheet.forClass(button).onModifier(xs, s => s 
    .height(style.containerHeight)
    .paddingLeft(style.spaceLeading)
    .paddingRight(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onStates({ pressed: s => s.shape(style.shapePressed) })
    .onToggleModifier(toggle, {
      off: s => s
        .onModifier(square, s => s.shape(style.shapeSquare))
        .onModifier(round, s => s.shape(style.shapeRound)),
      on: s => s.onModifier(selected, s => s 
        .onModifier(square, s => s.shape(style.shapeSelectedSquare))
        .onModifier(round, s => s.shape(style.shapeSelectedRound))
      )
    })
  );
};

const Small = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.sm;
  const { button } = context.class;
  const { toggle, selected, square, round, sm } = context.modifier;

  stylesheet.forClass(button).onModifier(sm, s => s 
    .height(style.containerHeight)
    .paddingLeft(style.spaceLeading)
    .paddingRight(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onStates({ pressed: s => s.shape(style.shapePressed) })
    .onToggleModifier(toggle, {
      off: s => s
        .onModifier(square, s => s.shape(style.shapeSquare))
        .onModifier(round, s => s.shape(style.shapeRound)),
      on: s => s.onModifier(selected, s => s 
        .onModifier(square, s => s.shape(style.shapeSelectedSquare))
        .onModifier(round, s => s.shape(style.shapeSelectedRound))
      )
    })
  );
};

const Medium = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.md;
  const { button } = context.class;
  const { toggle, selected, square, round, md } = context.modifier;

  stylesheet.forClass(button).onModifier(md, s => s 
    .height(style.containerHeight)
    .paddingLeft(style.spaceLeading)
    .paddingRight(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onStates({ pressed: s => s.shape(style.shapePressed) })
    .onToggleModifier(toggle, {
      off: s => s
        .onModifier(square, s => s.shape(style.shapeSquare))
        .onModifier(round, s => s.shape(style.shapeRound)),
      on: s => s.onModifier(selected, s => s 
        .onModifier(square, s => s.shape(style.shapeSelectedSquare))
        .onModifier(round, s => s.shape(style.shapeSelectedRound))
      )
    })
  );
};

const Large = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.lg;
  const { button } = context.class;
  const { toggle, selected, square, round, lg } = context.modifier;

  stylesheet.forClass(button).onModifier(lg, s => s 
    .height(style.containerHeight)
    .paddingLeft(style.spaceLeading)
    .paddingRight(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onStates({ pressed: s => s.shape(style.shapePressed) })
    .onToggleModifier(toggle, {
      off: s => s
        .onModifier(square, s => s.shape(style.shapeSquare))
        .onModifier(round, s => s.shape(style.shapeRound)),
      on: s => s.onModifier(selected, s => s 
        .onModifier(square, s => s.shape(style.shapeSelectedSquare))
        .onModifier(round, s => s.shape(style.shapeSelectedRound))
      )
    })
  );
};

const ExtraLarge = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.xl;
  const { button } = context.class;
  const { toggle, selected, square, round, xl } = context.modifier;

  stylesheet.forClass(button).onModifier(xl, s => s 
    .height(style.containerHeight)
    .paddingLeft(style.spaceLeading)
    .paddingRight(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onStates({ pressed: s => s.shape(style.shapePressed) })
    .onToggleModifier(toggle, {
      off: s => s
        .onModifier(square, s => s.shape(style.shapeSquare))
        .onModifier(round, s => s.shape(style.shapeRound)),
      on: s => s.onModifier(selected, s => s 
        .onModifier(square, s => s.shape(style.shapeSelectedSquare))
        .onModifier(round, s => s.shape(style.shapeSelectedRound))
      )
    })
  );
};

const Label = (context: Context, stylesheet: Stylesheet) => {
  const { button, buttonLabel } = context.class;
  const { filled, tonal, elevated, outlined, text, toggle, selected, xs, sm, md, lg, xl } = context.modifier;
  const style = context.style.button;

  /** ----------------
   *  Filled Style
   *  ----------------
   */
  stylesheet.forClass(buttonLabel).forAncestorModifier(button, filled)
    .color(style.filled.labelColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.filled.labelColorDisabled,
      style.filled.labelOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.filled.labelColor,
        pressed: style.filled.labelColorPressed,
        hovered: style.filled.labelColorHovered,
        focused: style.filled.labelColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.filled.labelColorUnselected,
          pressed: style.filled.labelColorUnselectedPressed,
          hovered: style.filled.labelColorUnselectedHovered,
          focused: style.filled.labelColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.filled.labelColorSelected,
          pressed: style.filled.labelColorSelectedPressed,
          hovered: style.filled.labelColorSelectedHovered,
          focused: style.filled.labelColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Tonal Style
   *  ----------------
   */
  stylesheet.forClass(buttonLabel).forAncestorModifier(button, tonal)
    .color(style.tonal.labelColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.tonal.labelColorDisabled,
      style.tonal.labelOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.tonal.labelColor,
        pressed: style.tonal.labelColorPressed,
        hovered: style.tonal.labelColorHovered,
        focused: style.tonal.labelColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.tonal.labelColorUnselected,
          pressed: style.tonal.labelColorUnselectedPressed,
          hovered: style.tonal.labelColorUnselectedHovered,
          focused: style.tonal.labelColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.tonal.labelColorSelected,
          pressed: style.tonal.labelColorSelectedPressed,
          hovered: style.tonal.labelColorSelectedHovered,
          focused: style.tonal.labelColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Elevated Style
   *  ----------------
   */
  stylesheet.forClass(buttonLabel).forAncestorModifier(button, elevated)
    .color(style.elevated.labelColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.elevated.labelColorDisabled,
      style.elevated.labelOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.elevated.labelColor,
        pressed: style.elevated.labelColorPressed,
        hovered: style.elevated.labelColorHovered,
        focused: style.elevated.labelColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.elevated.labelColorUnselected,
          pressed: style.elevated.labelColorUnselectedPressed,
          hovered: style.elevated.labelColorUnselectedHovered,
          focused: style.elevated.labelColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.elevated.labelColorSelected,
          pressed: style.elevated.labelColorSelectedPressed,
          hovered: style.elevated.labelColorSelectedHovered,
          focused: style.elevated.labelColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Outlined Style
   *  ----------------
   */
  stylesheet.forClass(buttonLabel).forAncestorModifier(button, outlined)
    .color(style.outlined.labelColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.outlined.labelColorDisabled,
      style.outlined.labelOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.outlined.labelColor,
        pressed: style.outlined.labelColorPressed,
        hovered: style.outlined.labelColorHovered,
        focused: style.outlined.labelColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.outlined.labelColorUnselected,
          pressed: style.outlined.labelColorUnselectedPressed,
          hovered: style.outlined.labelColorUnselectedHovered,
          focused: style.outlined.labelColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.outlined.labelColorSelected,
          pressed: style.outlined.labelColorSelectedPressed,
          hovered: style.outlined.labelColorSelectedHovered,
          focused: style.outlined.labelColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Text Style
   *  ----------------
   */
  stylesheet.forClass(buttonLabel).forAncestorModifier(button, text)
    .color(style.text.labelColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.text.labelColorDisabled,
      style.text.labelOpacityDisabled,
    ))
    .colorOnAncestorStates(button, {
      normal: style.text.labelColor,
      pressed: style.text.labelColorPressed,
      hovered: style.text.labelColorHovered,
      focused: style.text.labelColorFocused,
    });

  /** ----------------
   *  Sizes
   *  ----------------
   */
  stylesheet.forClass(buttonLabel).textStyleOnAncestorModifiers(button, {
    [xs]: style.xs.labelStyle,
    [sm]: style.sm.labelStyle,
    [md]: style.md.labelStyle,
    [lg]: style.lg.labelStyle,
    [xl]: style.xl.labelStyle,
  });
};

const Icon = (context: Context, stylesheet: Stylesheet) => {
  const { button, buttonIcon } = context.class;
  const { filled, tonal, elevated, outlined, text, toggle, selected, xs, sm, md, lg, xl } = context.modifier;
  const style = context.style.button;

  /** ----------------
   *  Filled Style
   *  ----------------
   */
  stylesheet.forClass(buttonIcon).forAncestorModifier(button, filled)
    .color(style.filled.iconColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.filled.iconColorDisabled,
      style.filled.iconOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.filled.iconColor,
        pressed: style.filled.iconColorPressed,
        hovered: style.filled.iconColorHovered,
        focused: style.filled.iconColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.filled.iconColorUnselected,
          pressed: style.filled.iconColorUnselectedPressed,
          hovered: style.filled.iconColorUnselectedHovered,
          focused: style.filled.iconColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.filled.iconColorSelected,
          pressed: style.filled.iconColorSelectedPressed,
          hovered: style.filled.iconColorSelectedHovered,
          focused: style.filled.iconColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Tonal Style
   *  ----------------
   */
  stylesheet.forClass(buttonIcon).forAncestorModifier(button, tonal)
    .color(style.tonal.iconColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.tonal.iconColorDisabled,
      style.tonal.iconOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.tonal.iconColor,
        pressed: style.tonal.iconColorPressed,
        hovered: style.tonal.iconColorHovered,
        focused: style.tonal.iconColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.tonal.iconColorUnselected,
          pressed: style.tonal.iconColorUnselectedPressed,
          hovered: style.tonal.iconColorUnselectedHovered,
          focused: style.tonal.iconColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.tonal.iconColorSelected,
          pressed: style.tonal.iconColorSelectedPressed,
          hovered: style.tonal.iconColorSelectedHovered,
          focused: style.tonal.iconColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Elevated Style
   *  ----------------
   */
  stylesheet.forClass(buttonIcon).forAncestorModifier(button, elevated)
    .color(style.elevated.iconColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.elevated.iconColorDisabled,
      style.elevated.iconOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.elevated.iconColor,
        pressed: style.elevated.iconColorPressed,
        hovered: style.elevated.iconColorHovered,
        focused: style.elevated.iconColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.elevated.iconColorUnselected,
          pressed: style.elevated.iconColorUnselectedPressed,
          hovered: style.elevated.iconColorUnselectedHovered,
          focused: style.elevated.iconColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.elevated.iconColorSelected,
          pressed: style.elevated.iconColorSelectedPressed,
          hovered: style.elevated.iconColorSelectedHovered,
          focused: style.elevated.iconColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Outlined Style
   *  ----------------
   */
  stylesheet.forClass(buttonIcon).forAncestorModifier(button, outlined)
    .color(style.outlined.iconColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.outlined.iconColorDisabled,
      style.outlined.iconOpacityDisabled,
    ))
    .onAncestorToggleModifier(button, toggle, {
      off: s => s.colorOnStates({
        normal: style.outlined.iconColor,
        pressed: style.outlined.iconColorPressed,
        hovered: style.outlined.iconColorHovered,
        focused: style.outlined.iconColorFocused,
      }),
      on: s => s.onAncestorToggleModifier(button, selected, {
        off: s => s.colorOnStates({
          normal: style.outlined.iconColorUnselected,
          pressed: style.outlined.iconColorUnselectedPressed,
          hovered: style.outlined.iconColorUnselectedHovered,
          focused: style.outlined.iconColorUnselectedFocused,
        }),
        on: s => s.colorOnStates({
          normal: style.outlined.iconColorSelected,
          pressed: style.outlined.iconColorSelectedPressed,
          hovered: style.outlined.iconColorSelectedHovered,
          focused: style.outlined.iconColorSelectedFocused,
        }),
      })
    });

  /** ----------------
   *  Text Style
   *  ----------------
   */
  stylesheet.forClass(buttonIcon).forAncestorModifier(button, text)
    .color(style.text.iconColor)
    .onAncestorDisabled(button, s => s.colorTranslucent(
      style.text.iconColorDisabled,
      style.text.iconOpacityDisabled,
    ))
    .colorOnAncestorStates(button, {
      normal: style.text.iconColor,
      pressed: style.text.iconColorPressed,
      hovered: style.text.iconColorHovered,
      focused: style.text.iconColorFocused,
    });

  /** ----------------
   *  Sizes
   *  ----------------
   */
  stylesheet.forClass(buttonIcon).iconSizeOnAncestorModifiers(button, {
    [xs]: style.xs.iconSize,
    [sm]: style.sm.iconSize,
    [md]: style.md.iconSize,
    [lg]: style.lg.iconSize,
    [xl]: style.xl.iconSize,
  });
};

const IconSizes = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button;
  const { button, buttonIcon } = context.class;
  const { xs, sm, md, lg, xl } = context.modifier;

  stylesheet.forClass(buttonIcon).iconSizeOnAncestorStates(button, {
    [xs]: s => s.iconSize(style.xs.iconSize),
    [sm]: s => s.iconSize(style.sm.iconSize),
    [md]: s => s.iconSize(style.md.iconSize),
    [lg]: s => s.iconSize(style.lg.iconSize),
    [xl]: s => s.iconSize(style.xl.iconSize),
  });
};


// --- Main Root Function ---

const writeSizes = (context: Context, stylesheet: Stylesheet) => {
  const { button } = context.class;

  const selector = stylesheet.forSelector(button)
    .display("flex")
    .flexFlow("row nowrap");

  ExtraSmall(context, selector);
  writeSmSize(context, selector);
  writeMdSize(context, selector);
  writeLgSize(context, selector);
  writeXlSize(context, selector);

  LabelSizes(context, stylesheet);
  IconSizes(context, stylesheet);
};
