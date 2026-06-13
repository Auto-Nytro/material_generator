// I'm currently trying to figure how the Stylesheet's and 
// Style's apis should look like by writing button styles
// to them and adjusting the api as needed.

import { M } from "@internal/css";
import { Style, Stylesheet } from "../Css/Main.ts"

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
  }

  readonly entities: {
    readonly button: string,
    readonly buttonIcon: string,
    readonly buttonLabel: string,
  }

  readonly modifiers: {
    readonly color: string,
    readonly size: string,
    readonly shape: string,
  }

  readonly modifierValues: {
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

const Container = (context: Context, stylesheet: Stylesheet) => {
  const { button } = context.entities;

  stylesheet.forEntity(button)
    /** ------------------
     *  Common Style
     *  ------------------
     */
    .flex()
    .flexNowrap()
};

const Filled = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.filled;
  const { button, buttonLabel, buttonIcon } = context.entities;
  const { color } = context.modifiers;
  const { filled, toggle, selected } = context.modifierValues;

  /**
   * -----------------
   * CONTAINER
   * -----------------
   */
  stylesheet.forEntity(button).forEnumModifier(color, filled)
    .elevationLevel(style.containerElevation)
    .shadowColor(style.containerShadowColor)
    .onPressed(s => s 
      .elevationLevel(style.containerElevationPressed)
      .stateLayerOpacity(style.stateLayerOpacityPressed)
    )
    .onHovered(s => s 
      .stateLayerOpacity(style.stateLayerOpacityHovered)
    )
    .onFocused(s => s 
      .elevationLevel(style.containerElevationFocused)
      .stateLayerOpacity(style.stateLayerOpacityFocused)
    )
    .onDisabled(s => s
      .bgColor(style.containerColorDisabled)
      .bgOpacity(style.containerOpacityDisabled)
    )
    
    .onEnumModifierValue(color, filled, s => s.onToggleModifier(toggle, {
      inactive: s => s
        .bgColor(style.containerColor)
        .onPressed(s => s.stateLayerColor(style.stateLayerColorPressed))
        .onHovered(s => s.stateLayerColor(style.stateLayerColorHovered))
        .onFocused(s => s.stateLayerColor(style.stateLayerColorFocused)),

      active: s => s.onToggleModifier(selected, {
        inactive: s => s 
          .bgColor(style.containerColorUnselected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorUnselectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorUnselectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorUnselectedFocused)),

        active: s => s 
          .bgColor(style.containerColorSelected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorSelectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorSelectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorSelectedFocused)),
      })
    }))

  /**
   * -----------------
   * LABEL
   * -----------------
   */
  stylesheet.forEntity(buttonLabel)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, filled)

    .onAncestorDisabled(s => s
      .textColor(style.labelColorDisabled)
      .textOpacity(style.labelOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .textColor(style.labelColor)
        .onAncestorPressed(s => s.textColor(style.labelColorPressed))
        .onAncestorHovered(s => s.textColor(style.labelColorHovered))
        .onAncestorFocused(s => s.textColor(style.labelColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .textColor(style.labelColorUnselected)
          .onAncestorPressed(s => s.textColor(style.labelColorUnselectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorUnselectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorUnselectedFocused)),

        active: s => s
          .textColor(style.labelColorSelected)
          .onAncestorPressed(s => s.textColor(style.labelColorSelectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorSelectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorSelectedFocused)),
      })
    });

  /**
   * -----------------
   * ICON
   * -----------------
   */
  stylesheet.forEntity(buttonIcon)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, filled)

    .onAncestorDisabled(s => s
      .iconColor(style.iconColorDisabled)
      .iconOpacity(style.iconOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .iconColor(style.iconColor)
        .onAncestorPressed(s => s.iconColor(style.iconColorPressed))
        .onAncestorHovered(s => s.iconColor(style.iconColorHovered))
        .onAncestorFocused(s => s.iconColor(style.iconColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .iconColor(style.iconColorUnselected)
          .onAncestorPressed(s => s.iconColor(style.iconColorUnselectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorUnselectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorUnselectedFocused)),

        active: s => s
          .iconColor(style.iconColorSelected)
          .onAncestorPressed(s => s.iconColor(style.iconColorSelectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorSelectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorSelectedFocused)),
      })
    });
};

const Tonal = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.tonal;
  const { button, buttonLabel, buttonIcon } = context.entities;
  const { color } = context.modifiers;
  const { tonal, toggle, selected } = context.modifierValues;

  /**
   * -----------------
   * CONTAINER
   * -----------------
   */
  stylesheet.forEntity(button).forEnumModifier(color, tonal)
    .elevationLevel(style.containerElevation)
    .shadowColor(style.containerShadowColor)
    .onPressed(s => s 
      .elevationLevel(style.containerElevationPressed)
      .stateLayerOpacity(style.stateLayerOpacityPressed)
    )
    .onHovered(s => s 
      .stateLayerOpacity(style.stateLayerOpacityHovered)
    )
    .onFocused(s => s 
      .elevationLevel(style.containerElevationFocused)
      .stateLayerOpacity(style.stateLayerOpacityFocused)
    )
    .onDisabled(s => s
      .bgColor(style.containerColorDisabled)
      .bgOpacity(style.containerOpacityDisabled)
    )
    
    .onEnumModifierValue(color, tonal, s => s.onToggleModifier(toggle, {
      inactive: s => s
        .bgColor(style.containerColor)
        .onPressed(s => s.stateLayerColor(style.stateLayerColorPressed))
        .onHovered(s => s.stateLayerColor(style.stateLayerColorHovered))
        .onFocused(s => s.stateLayerColor(style.stateLayerColorFocused)),

      active: s => s.onToggleModifier(selected, {
        inactive: s => s 
          .bgColor(style.containerColorUnselected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorUnselectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorUnselectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorUnselectedFocused)),

        active: s => s 
          .bgColor(style.containerColorSelected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorSelectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorSelectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorSelectedFocused)),
      })
    }))

  /**
   * -----------------
   * LABEL
   * -----------------
   */
  stylesheet.forEntity(buttonLabel)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, tonal)

    .onAncestorDisabled(s => s
      .textColor(style.labelColorDisabled)
      .textOpacity(style.labelOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .textColor(style.labelColor)
        .onAncestorPressed(s => s.textColor(style.labelColorPressed))
        .onAncestorHovered(s => s.textColor(style.labelColorHovered))
        .onAncestorFocused(s => s.textColor(style.labelColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .textColor(style.labelColorUnselected)
          .onAncestorPressed(s => s.textColor(style.labelColorUnselectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorUnselectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorUnselectedFocused)),

        active: s => s
          .textColor(style.labelColorSelected)
          .onAncestorPressed(s => s.textColor(style.labelColorSelectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorSelectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorSelectedFocused)),
      })
    });

  /**
   * -----------------
   * ICON
   * -----------------
   */
  stylesheet.forEntity(buttonIcon)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, tonal)

    .onAncestorDisabled(s => s
      .iconColor(style.iconColorDisabled)
      .iconOpacity(style.iconOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .iconColor(style.iconColor)
        .onAncestorPressed(s => s.iconColor(style.iconColorPressed))
        .onAncestorHovered(s => s.iconColor(style.iconColorHovered))
        .onAncestorFocused(s => s.iconColor(style.iconColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .iconColor(style.iconColorUnselected)
          .onAncestorPressed(s => s.iconColor(style.iconColorUnselectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorUnselectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorUnselectedFocused)),

        active: s => s
          .iconColor(style.iconColorSelected)
          .onAncestorPressed(s => s.iconColor(style.iconColorSelectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorSelectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorSelectedFocused)),
      })
    });
};

const Elevated = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.elevated;
  const { button, buttonLabel, buttonIcon } = context.entities;
  const { color } = context.modifiers;
  const { elevated, toggle, selected } = context.modifierValues;

  /**
   * -----------------
   * CONTAINER
   * -----------------
   */
  stylesheet.forEntity(button).forEnumModifier(color, elevated)
    .elevationLevel(style.containerElevation)
    .shadowColor(style.containerShadowColor)
    .onPressed(s => s 
      .elevationLevel(style.containerElevationPressed)
      .stateLayerOpacity(style.stateLayerOpacityPressed)
    )
    .onHovered(s => s 
      .stateLayerOpacity(style.stateLayerOpacityHovered)
    )
    .onFocused(s => s 
      .elevationLevel(style.containerElevationFocused)
      .stateLayerOpacity(style.stateLayerOpacityFocused)
    )
    .onDisabled(s => s
      .bgColor(style.containerColorDisabled)
      .bgOpacity(style.containerOpacityDisabled)
    )
    
    .onEnumModifierValue(color, elevated, s => s.onToggleModifier(toggle, {
      inactive: s => s
        .bgColor(style.containerColor)
        .onPressed(s => s.stateLayerColor(style.stateLayerColorPressed))
        .onHovered(s => s.stateLayerColor(style.stateLayerColorHovered))
        .onFocused(s => s.stateLayerColor(style.stateLayerColorFocused)),

      active: s => s.onToggleModifier(selected, {
        inactive: s => s 
          .bgColor(style.containerColorUnselected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorUnselectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorUnselectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorUnselectedFocused)),

        active: s => s 
          .bgColor(style.containerColorSelected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorSelectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorSelectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorSelectedFocused)),
      })
    }))

  /**
   * -----------------
   * LABEL
   * -----------------
   */
  stylesheet.forEntity(buttonLabel)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, elevated)

    .onAncestorDisabled(s => s
      .textColor(style.labelColorDisabled)
      .textOpacity(style.labelOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .textColor(style.labelColor)
        .onAncestorPressed(s => s.textColor(style.labelColorPressed))
        .onAncestorHovered(s => s.textColor(style.labelColorHovered))
        .onAncestorFocused(s => s.textColor(style.labelColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .textColor(style.labelColorUnselected)
          .onAncestorPressed(s => s.textColor(style.labelColorUnselectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorUnselectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorUnselectedFocused)),

        active: s => s
          .textColor(style.labelColorSelected)
          .onAncestorPressed(s => s.textColor(style.labelColorSelectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorSelectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorSelectedFocused)),
      })
    });

  /**
   * -----------------
   * ICON
   * -----------------
   */
  stylesheet.forEntity(buttonIcon)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, elevated)

    .onAncestorDisabled(s => s
      .iconColor(style.iconColorDisabled)
      .iconOpacity(style.iconOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .iconColor(style.iconColor)
        .onAncestorPressed(s => s.iconColor(style.iconColorPressed))
        .onAncestorHovered(s => s.iconColor(style.iconColorHovered))
        .onAncestorFocused(s => s.iconColor(style.iconColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .iconColor(style.iconColorUnselected)
          .onAncestorPressed(s => s.iconColor(style.iconColorUnselectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorUnselectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorUnselectedFocused)),

        active: s => s
          .iconColor(style.iconColorSelected)
          .onAncestorPressed(s => s.iconColor(style.iconColorSelectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorSelectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorSelectedFocused)),
      })
    });
};

const Outlined = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.outlined;
  const { button, buttonLabel, buttonIcon } = context.entities;
  const { color } = context.modifiers;
  const { outlined, toggle, selected } = context.modifierValues;

  /**
   * -----------------
   * CONTAINER
   * -----------------
   */
  stylesheet.forEntity(button).forEnumModifier(color, outlined)
    .borderColor(style.outlineColor)
    .onPressed(s => s .stateLayerOpacity(style.stateLayerOpacityPressed))
    .onHovered(s => s.stateLayerOpacity(style.stateLayerOpacityHovered))
    .onFocused(s => s.stateLayerOpacity(style.stateLayerOpacityFocused))
    
    .onEnumModifierValue(color, outlined, s => s.onToggleModifier(toggle, {
      inactive: s => s
        .onPressed(s => s 
          .borderColor(style.outlineColorPressed)
          .stateLayerColor(style.stateLayerColorPressed)
        )
        .onHovered(s => s 
          .borderColor(style.outlineColorHovered)
          .stateLayerColor(style.stateLayerColorHovered)
        )
        .onFocused(s => s 
          .borderColor(style.outlineColorFocused)
          .stateLayerColor(style.stateLayerColorFocused)
        )
        .onDisabled(s => s 
          .borderColor(style.outlineColorDisabled)
        ),

      active: s => s.onToggleModifier(selected, {
        inactive: s => s
          .onPressed(s => s 
            .borderColor(style.outlineColorUnselectedPressed)
            .stateLayerColor(style.stateLayerColorPressed)
          )
          .onHovered(s => s 
            .borderColor(style.outlineColorUnselectedHovered)
            .stateLayerColor(style.stateLayerColorHovered)
          )
          .onFocused(s => s 
            .borderColor(style.outlineColorUnselectedFocused)
            .stateLayerColor(style.stateLayerColorFocused)
          )
          .onDisabled(s => s 
            .borderColor(style.outlineColorUnselectedDisabled)
          ),

        active: s => s 
          .bgColor(style.containerColorSelected)
          .onPressed(s => s.stateLayerColor(style.stateLayerColorSelectedPressed))
          .onHovered(s => s.stateLayerColor(style.stateLayerColorSelectedHovered))
          .onFocused(s => s.stateLayerColor(style.stateLayerColorSelectedFocused))
          .onDisabled(s => s 
            .bgColor(style.containerColorSelectedDisabled)
            .bgOpacity(style.containerOpacityDisabled)
          ),
      })
    }))

  /**
   * -----------------
   * LABEL
   * -----------------
   */
  stylesheet.forEntity(buttonLabel)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, outlined)

    .onAncestorDisabled(s => s
      .textColor(style.labelColorDisabled)
      .textOpacity(style.labelOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .textColor(style.labelColor)
        .onAncestorPressed(s => s.textColor(style.labelColorPressed))
        .onAncestorHovered(s => s.textColor(style.labelColorHovered))
        .onAncestorFocused(s => s.textColor(style.labelColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .textColor(style.labelColorUnselected)
          .onAncestorPressed(s => s.textColor(style.labelColorUnselectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorUnselectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorUnselectedFocused)),

        active: s => s
          .textColor(style.labelColorSelected)
          .onAncestorPressed(s => s.textColor(style.labelColorSelectedPressed))
          .onAncestorHovered(s => s.textColor(style.labelColorSelectedHovered))
          .onAncestorFocused(s => s.textColor(style.labelColorSelectedFocused)),
      })
    });

  /**
   * -----------------
   * ICON
   * -----------------
   */
  stylesheet.forEntity(buttonIcon)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, outlined)

    .onAncestorDisabled(s => s
      .iconColor(style.iconColorDisabled)
      .iconOpacity(style.iconOpacityDisabled)
    )

    .onAncestorToggleModifier(toggle, {
      inactive: s => s
        .iconColor(style.iconColor)
        .onAncestorPressed(s => s.iconColor(style.iconColorPressed))
        .onAncestorHovered(s => s.iconColor(style.iconColorHovered))
        .onAncestorFocused(s => s.iconColor(style.iconColorFocused)),

      active: s => s.onAncestorToggleModifier(selected, {
        inactive: s => s
          .iconColor(style.iconColorUnselected)
          .onAncestorPressed(s => s.iconColor(style.iconColorUnselectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorUnselectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorUnselectedFocused)),

        active: s => s
          .iconColor(style.iconColorSelected)
          .onAncestorPressed(s => s.iconColor(style.iconColorSelectedPressed))
          .onAncestorHovered(s => s.iconColor(style.iconColorSelectedHovered))
          .onAncestorFocused(s => s.iconColor(style.iconColorSelectedFocused)),
      })
    });
};

const Text = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.text;
  const { button, buttonLabel, buttonIcon } = context.entities;
  const { color } = context.modifiers;
  const { text } = context.modifierValues;

  /**
   * -----------------
   * CONTAINER
   * -----------------
   */
  stylesheet.forEntity(button).forEnumModifier(color, text)
    .onPressed(s => s
      .stateLayerOpacity(style.stateLayerOpacityPressed)
      .stateLayerColor(style.stateLayerColorPressed)
    )
    .onHovered(s => s
      .stateLayerOpacity(style.stateLayerOpacityHovered)
      .stateLayerColor(style.stateLayerColorHovered)
    )
    .onFocused(s => s
      .stateLayerOpacity(style.stateLayerOpacityFocused)
      .stateLayerColor(style.stateLayerColorFocused)
    )
    .onDisabled(s => s
      .bgColor(style.containerColorDisabled)
      .bgOpacity(style.containerOpacityDisabled)
    )

  /**
   * -----------------
   * LABEL
   * -----------------
   */
  stylesheet.forEntity(buttonLabel)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, text)

    .textColor(style.labelColor)
    .onAncestorPressed(s => s.textColor(style.labelColorPressed))
    .onAncestorHovered(s => s.textColor(style.labelColorHovered))
    .onAncestorFocused(s => s.textColor(style.labelColorFocused))
    .onAncestorDisabled(s => s
      .textColor(style.labelColorDisabled)
      .textOpacity(style.labelOpacityDisabled)
    );

  /**
   * -----------------
   * ICON
   * -----------------
   */
  stylesheet.forEntity(buttonIcon)
    .forAncestorModifier(button)
    .forAncestorEnumModifierValue(color, text)

    .iconColor(style.iconColor)
    .onAncestorPressed(s => s.iconColor(style.iconColorPressed))
    .onAncestorHovered(s => s.iconColor(style.iconColorHovered))
    .onAncestorFocused(s => s.iconColor(style.iconColorFocused))
    .onAncestorDisabled(s => s
      .iconColor(style.iconColorDisabled)
      .iconOpacity(style.iconOpacityDisabled)
    );
};

const Size = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.xs;
  const { button, buttonIcon, buttonLabel } = context.entities;
  const { size, shape, color } = context.modifiers;
  const { outlined, toggle, selected, square, round, xs } = context.modifierValues;

  stylesheet.forEntity(button).onEnumModifierValue(size, xs, s => s
    .h(style.containerHeight)
    .pl(style.spaceLeading)
    .pr(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onPressed(s => s.shape(style.shapePressed))
    .onToggleModifier(toggle, {
      inactive: s => s.onEnumModifierValues(shape, {
        [square]: s => s.shape(style.shapeSquare),
        [round]: s => s.shape(style.shapeRound),
      }),
      active: s => s.onToggleModifier(selected, {
        active: s => s.onEnumModifierValues(shape, {
          [square]: s => s.shape(style.shapeSelectedSquare),
          [round]: s => s.shape(style.shapeSelectedRound),
        }),
      })
    })
  );

  stylesheet.forEntity(button)
    .forEnumModifier(size, xs)
    .forEnumModifier(color, outlined)
    .borderWidth(style.outlineWidth);

  stylesheet.forEntity(buttonIcon)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, xs)
    .iconSize(style.iconSize);

  stylesheet.forEntity(buttonLabel)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, xs)
    .textStyle(style.labelStyle);
};

const Small = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.sm;
  const { button, buttonIcon, buttonLabel } = context.entities;
  const { color, size, shape } = context.modifiers;
  const { outlined, toggle, selected, square, round, sm } = context.modifierValues;

  stylesheet.forEntity(button).onEnumModifierValue(size, sm, s => s
    .h(style.containerHeight)
    .pl(style.spaceLeading)
    .pr(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onPressed(s => s.shape(style.shapePressed))
    .onToggleModifier(toggle, {
      inactive: s => s.onEnumModifierValues(shape, {
        [square]: s => s.shape(style.shapeSquare),
        [round]: s => s.shape(style.shapeRound),
      }),
      active: s => s.onToggleModifier(selected, {
        active: s => s.onEnumModifierValues(shape, {
          [square]: s => s.shape(style.shapeSelectedSquare),
          [round]: s => s.shape(style.shapeSelectedRound),
        }),
      })
    })
  );

  stylesheet.forEntity(button)
    .forEnumModifier(size, sm)
    .forEnumModifier(color, outlined)
    .borderWidth(style.outlineWidth);

  stylesheet.forEntity(buttonIcon)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, sm)
    .iconSize(style.iconSize);

  stylesheet.forEntity(buttonLabel)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, sm)
    .textStyle(style.labelStyle);
};

const Medium = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.md;
  const { button, buttonIcon, buttonLabel } = context.entities;
  const { color, size, shape } = context.modifiers;
  const { outlined, toggle, selected, square, round, md } = context.modifierValues;

  stylesheet.forEntity(button).onEnumModifierValue(size, md, s => s
    .h(style.containerHeight)
    .pl(style.spaceLeading)
    .pr(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onPressed(s => s.shape(style.shapePressed))
    .onToggleModifier(toggle, {
      inactive: s => s.onEnumModifierValues(shape, {
        [square]: s => s.shape(style.shapeSquare),
        [round]: s => s.shape(style.shapeRound),
      }),
      active: s => s.onToggleModifier(selected, {
        active: s => s.onEnumModifierValues(shape, {
          [square]: s => s.shape(style.shapeSelectedSquare),
          [round]: s => s.shape(style.shapeSelectedRound),
        }),
      })
    })
  );

  stylesheet.forEntity(button)
    .forEnumModifier(size, md)
    .forEnumModifier(color, outlined)
    .borderWidth(style.outlineWidth);

  stylesheet.forEntity(buttonIcon)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, md)
    .iconSize(style.iconSize);

  stylesheet.forEntity(buttonLabel)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, md)
    .textStyle(style.labelStyle);
};

const Large = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.lg;
  const { button, buttonIcon, buttonLabel } = context.entities;
  const { color, size, shape } = context.modifiers;
  const { outlined, toggle, selected, square, round, lg } = context.modifierValues;

  stylesheet.forEntity(button).onEnumModifierValue(size, lg, s => s
    .h(style.containerHeight)
    .pl(style.spaceLeading)
    .pr(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onPressed(s => s.shape(style.shapePressed))
    .onToggleModifier(toggle, {
      inactive: s => s.onEnumModifierValues(shape, {
        [square]: s => s.shape(style.shapeSquare),
        [round]: s => s.shape(style.shapeRound),
      }),
      active: s => s.onToggleModifier(selected, {
        active: s => s.onEnumModifierValues(shape, {
          [square]: s => s.shape(style.shapeSelectedSquare),
          [round]: s => s.shape(style.shapeSelectedRound),
        }),
      })
    })
  );

  stylesheet.forEntity(button)
    .forEnumModifier(size, lg)
    .forEnumModifier(color, outlined)
    .borderWidth(style.outlineWidth);

  stylesheet.forEntity(buttonIcon)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, lg)
    .iconSize(style.iconSize);

  stylesheet.forEntity(buttonLabel)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, lg)
    .textStyle(style.labelStyle);
};

const ExtraLarge = (context: Context, stylesheet: Stylesheet) => {
  const style = context.style.button.xl;
  const { button, buttonIcon, buttonLabel } = context.entities;
  const { color, size, shape } = context.modifiers;
  const { outlined, toggle, selected, square, round, xl } = context.modifierValues;

  stylesheet.forEntity(button).onEnumModifierValue(size, xl, s => s
    .h(style.containerHeight)
    .pl(style.spaceLeading)
    .pr(style.spaceTrailing)
    .gap(style.spaceMiddle)
    .shapeMorphSpring(style.shapeMorphSpring)
    .onPressed(s => s.shape(style.shapePressed))
    .onToggleModifier(toggle, {
      inactive: s => s.onEnumModifierValues(shape, {
        [square]: s => s.shape(style.shapeSquare),
        [round]: s => s.shape(style.shapeRound),
      }),
      active: s => s.onToggleModifier(selected, {
        active: s => s.onEnumModifierValues(shape, {
          [square]: s => s.shape(style.shapeSelectedSquare),
          [round]: s => s.shape(style.shapeSelectedRound),
        }),
      })
    })
  );

  stylesheet.forEntity(button)
    .forEnumModifier(size, xl)
    .forEnumModifier(color, outlined)
    .borderWidth(style.outlineWidth);

  stylesheet.forEntity(buttonIcon)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, xl)
    .iconSize(style.iconSize);

  stylesheet.forEntity(buttonLabel)
    .forAncestor(button)
    .forAncestorEnumModifierValue(size, xl)
    .textStyle(style.labelStyle);
};