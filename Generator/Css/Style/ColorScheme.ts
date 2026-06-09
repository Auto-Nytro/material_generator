import { ColorPalette, ColorPaletteOptions, ColorSchemeOptions, M, StyleBlock, Writer } from "@internal/css";
import { Stylesheet } from "../Css/StyleBlock.ts";

export const writeLight = (
  colorScheme: M.ColorScheme,
  colorSchemeOptions: ColorSchemeOptions,
  colorPalette: M.ColorPalette,
  colorPaletteOptions: ColorPaletteOptions,
  stylesheet: Stylesheet,
): StyleBlock => {
  const {
    vars,
    attribute,
    atrributeLight,
  } = colorSchemeOptions;

  const style = stylesheet.forSelector(`[data-${attribute}=${atrributeLight}]`);

  StyleBlock.var(style, vars.background, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.background));
  StyleBlock.var(style, vars.error, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.error));
  StyleBlock.var(style, vars.errorContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.errorContainer));
  StyleBlock.var(style, vars.inverseOnSurface, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.inverseOnSurface));
  StyleBlock.var(style, vars.inversePrimary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.inversePrimary));
  StyleBlock.var(style, vars.inverseSurface, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.inverseSurface));
  StyleBlock.var(style, vars.onBackground, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onBackground));
  StyleBlock.var(style, vars.onError, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onError));
  StyleBlock.var(style, vars.onErrorContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onErrorContainer));
  StyleBlock.var(style, vars.onPrimary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onPrimary));
  StyleBlock.var(style, vars.onPrimaryContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onPrimaryContainer));
  StyleBlock.var(style, vars.onPrimaryFixed, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onPrimaryFixed));
  StyleBlock.var(style, vars.onPrimaryFixedVariant, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onPrimaryFixedVariant));
  StyleBlock.var(style, vars.onSecondary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onSecondary));
  StyleBlock.var(style, vars.onSecondaryContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onSecondaryContainer));
  StyleBlock.var(style, vars.onSecondaryFixed, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onSecondaryFixed));
  StyleBlock.var(style, vars.onSecondaryFixedVariant, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onSecondaryFixedVariant));
  StyleBlock.var(style, vars.onSurface, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onSurface));
  StyleBlock.var(style, vars.onSurfaceVariant, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onSurfaceVariant));
  StyleBlock.var(style, vars.onTertiary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onTertiary));
  StyleBlock.var(style, vars.onTertiaryContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onTertiaryContainer));
  StyleBlock.var(style, vars.onTertiaryFixed, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onTertiaryFixed));
  StyleBlock.var(style, vars.onTertiaryFixedVariant, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.onTertiaryFixedVariant));
  StyleBlock.var(style, vars.outline, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.outline));
  StyleBlock.var(style, vars.outlineVariant, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.outlineVariant));
  StyleBlock.var(style, vars.primary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.primary));
  StyleBlock.var(style, vars.primaryContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.primaryContainer));
  StyleBlock.var(style, vars.primaryFixed, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.primaryFixed));
  StyleBlock.var(style, vars.primaryFixedDim, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.primaryFixedDim));
  StyleBlock.var(style, vars.scrim, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.scrim));
  StyleBlock.var(style, vars.secondary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.secondary));
  StyleBlock.var(style, vars.secondaryContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.secondaryContainer));
  StyleBlock.var(style, vars.secondaryFixed, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.secondaryFixed));
  StyleBlock.var(style, vars.secondaryFixedDim, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.secondaryFixedDim));
  StyleBlock.var(style, vars.shadow, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.shadow));
  StyleBlock.var(style, vars.surface, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surface));
  StyleBlock.var(style, vars.surfaceBright, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceBright));
  StyleBlock.var(style, vars.surfaceContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceContainer));
  StyleBlock.var(style, vars.surfaceContainerHigh, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceContainerHigh));
  StyleBlock.var(style, vars.surfaceContainerHighest, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceContainerHighest));
  StyleBlock.var(style, vars.surfaceContainerLow, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceContainerLow));
  StyleBlock.var(style, vars.surfaceContainerLowest, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceContainerLowest));
  StyleBlock.var(style, vars.surfaceDim, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceDim));
  StyleBlock.var(style, vars.surfaceTint, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceTint));
  StyleBlock.var(style, vars.surfaceVariant, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.surfaceVariant));
  StyleBlock.var(style, vars.tertiary, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.tertiary));
  StyleBlock.var(style, vars.tertiaryContainer, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.tertiaryContainer));
  StyleBlock.var(style, vars.tertiaryFixed, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.tertiaryFixed));
  StyleBlock.var(style, vars.tertiaryFixedDim, ColorPalette.get(colorPalette, colorPaletteOptions, colorScheme.tertiaryFixedDim));

  return style;
};