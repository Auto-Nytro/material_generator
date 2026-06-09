import { ShapeRadii, Vars } from "@internal/prelude";

export interface Shapes {
  readonly full: ShapeRadii,
  readonly extraLargeTop: ShapeRadii,
  readonly extraLarge: ShapeRadii,
  readonly largeTop: ShapeRadii,
  readonly largeEnd: ShapeRadii,
  readonly largeStart: ShapeRadii,
  readonly large: ShapeRadii,
  readonly medium: ShapeRadii,
  readonly small: ShapeRadii,
  readonly extraSmallTop: ShapeRadii,
  readonly extraSmall: ShapeRadii,
  readonly none: ShapeRadii,
  readonly largeIncreased: ShapeRadii,
  readonly extraLargeIncreased: ShapeRadii,
  readonly extraExtraLarge: ShapeRadii,
}

export const baseline = (): Shapes => {
  return {
    // Full rounding.
    full: ShapeRadii.All(Vars.CornerRadii.Full()),

    // Extra large top rounding
    extraLargeTop: {
      tl: Vars.CornerRadii.ExtraLarge(),
      tr: Vars.CornerRadii.ExtraLarge(),
      bl: Vars.CornerRadii.None(),
      br: Vars.CornerRadii.None(),
    },

    // Extra large rounding
    extraLarge: {
      tl: Vars.CornerRadii.ExtraLarge(),
      tr: Vars.CornerRadii.ExtraLarge(),
      bl: Vars.CornerRadii.ExtraLarge(),
      br: Vars.CornerRadii.ExtraLarge(),
    },

    // Large top rounding
    largeTop: {
      tl: Vars.CornerRadii.ExtraLarge(),
      tr: Vars.CornerRadii.ExtraLarge(),
      bl: Vars.CornerRadii.None(),
      br: Vars.CornerRadii.None(),
    },

    // Large end rounding
    largeEnd: {
      tr: Vars.CornerRadii.Large(),
      br: Vars.CornerRadii.Large(),
      tl: Vars.CornerRadii.None(),
      bl: Vars.CornerRadii.None(),
    },

    // Large start rounding
    largeStart: {
      tl: Vars.CornerRadii.Large(),
      bl: Vars.CornerRadii.Large(),
      tr: Vars.CornerRadii.None(),
      br: Vars.CornerRadii.None(),
    },

    // Large rounding
    large: {
      tl: Vars.CornerRadii.Large(),
      tr: Vars.CornerRadii.Large(),
      bl: Vars.CornerRadii.Large(),
      br: Vars.CornerRadii.Large(),
    },

    // Medium rounding
    medium: {
      tl: Vars.CornerRadii.Medium(),
      tr: Vars.CornerRadii.Medium(),
      bl: Vars.CornerRadii.Medium(),
      br: Vars.CornerRadii.Medium(),
    },

    // Small rounding
    small: {
      tl: Vars.CornerRadii.Small(),
      tr: Vars.CornerRadii.Small(),
      bl: Vars.CornerRadii.Small(),
      br: Vars.CornerRadii.Small(),
    },

    // Extra small top rounding
    extraSmallTop: {
      tl: Vars.CornerRadii.ExtraSmall(),
      tr: Vars.CornerRadii.ExtraSmall(),
      bl: Vars.CornerRadii.None(),
      br: Vars.CornerRadii.None(),
    },

    // Extra small rounding
    extraSmall: {
      tl: Vars.CornerRadii.ExtraSmall(),
      tr: Vars.CornerRadii.ExtraSmall(),
      bl: Vars.CornerRadii.ExtraSmall(),
      br: Vars.CornerRadii.ExtraSmall(),
    },

    // No rounding
    none: {
      tl: Vars.CornerRadii.None(),
      tr: Vars.CornerRadii.None(),
      bl: Vars.CornerRadii.None(),
      br: Vars.CornerRadii.None(),
    },

    // Large increased rounding
    largeIncreased: {
      tl: Vars.CornerRadii.LargeIncreased(),
      tr: Vars.CornerRadii.LargeIncreased(),
      bl: Vars.CornerRadii.LargeIncreased(),
      br: Vars.CornerRadii.LargeIncreased(),
    },

    // Extra large increased rounding
    extraLargeIncreased: {
      tl: Vars.CornerRadii.ExtraLargeIncreased(),
      tr: Vars.CornerRadii.ExtraLargeIncreased(),
      bl: Vars.CornerRadii.ExtraLargeIncreased(),
      br: Vars.CornerRadii.ExtraLargeIncreased(),
    },

    // Extra extra large rounding
    extraExtraLarge: {
      tl: Vars.CornerRadii.ExtraExtraLarge(),
      tr: Vars.CornerRadii.ExtraExtraLarge(),
      bl: Vars.CornerRadii.ExtraExtraLarge(),
      br: Vars.CornerRadii.ExtraExtraLarge(),
    },
  };
};