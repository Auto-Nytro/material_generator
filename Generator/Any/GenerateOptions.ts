import { CornerRadiiRef, TypefaceRef } from "@internal/prelude";

export interface GenerateOptions {
  readonly willChange: {
    readonly typeface: Set<TypefaceRef.Any>,
    readonly cornerRadii: Set<CornerRadiiRef>,
  },
  readonly ypeface: boolean,
  readonly inlineTypefaceInTypescale: boolean,

  readonly inlineCornerRadii: boolean,
  readonly inlineCornerRadiiInShapeRadii: boolean,

  readonly inlineColorPalette: boolean,
  readonly inlineColorPaletteInColorScheme: boolean,
  readonly inlineColorScheme: boolean,

  readonly inline
  readonly includedTypeRoles: Set<TypescaleRefRole>,
}