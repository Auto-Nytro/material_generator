import { Color, MaybeVar, Vars } from "@internal/prelude";

export interface ColorScheme {
  readonly background: MaybeVar<Color>
  readonly error: MaybeVar<Color>
  readonly errorContainer: MaybeVar<Color>
  readonly inverseOnSurface: MaybeVar<Color>
  readonly inversePrimary: MaybeVar<Color>
  readonly inverseSurface: MaybeVar<Color>
  readonly onBackground: MaybeVar<Color>
  readonly onError: MaybeVar<Color>
  readonly onErrorContainer: MaybeVar<Color>
  readonly onPrimary: MaybeVar<Color>
  readonly onPrimaryContainer: MaybeVar<Color>
  readonly onPrimaryFixed: MaybeVar<Color>
  readonly onPrimaryFixedVariant: MaybeVar<Color>
  readonly onSecondary: MaybeVar<Color>
  readonly onSecondaryContainer: MaybeVar<Color>
  readonly onSecondaryFixed: MaybeVar<Color>
  readonly onSecondaryFixedVariant: MaybeVar<Color>
  readonly onSurface: MaybeVar<Color>
  readonly onSurfaceVariant: MaybeVar<Color>
  readonly onTertiary: MaybeVar<Color>
  readonly onTertiaryContainer: MaybeVar<Color>
  readonly onTertiaryFixed: MaybeVar<Color>
  readonly onTertiaryFixedVariant: MaybeVar<Color>
  readonly outline: MaybeVar<Color>
  readonly outlineVariant: MaybeVar<Color>
  readonly primary: MaybeVar<Color>
  readonly primaryContainer: MaybeVar<Color>
  readonly primaryFixed: MaybeVar<Color>
  readonly primaryFixedDim: MaybeVar<Color>
  readonly scrim: MaybeVar<Color>
  readonly secondary: MaybeVar<Color>
  readonly secondaryContainer: MaybeVar<Color>
  readonly secondaryFixed: MaybeVar<Color>
  readonly secondaryFixedDim: MaybeVar<Color>
  readonly shadow: MaybeVar<Color>
  readonly surface: MaybeVar<Color>
  readonly surfaceBright: MaybeVar<Color>
  readonly surfaceContainer: MaybeVar<Color>
  readonly surfaceContainerHigh: MaybeVar<Color>
  readonly surfaceContainerHighest: MaybeVar<Color>
  readonly surfaceContainerLow: MaybeVar<Color>
  readonly surfaceContainerLowest: MaybeVar<Color>
  readonly surfaceDim: MaybeVar<Color>
  readonly surfaceTint: MaybeVar<Color>
  readonly surfaceVariant: MaybeVar<Color>
  readonly tertiary: MaybeVar<Color>
  readonly tertiaryContainer: MaybeVar<Color>
  readonly tertiaryFixed: MaybeVar<Color>
  readonly tertiaryFixedDim: MaybeVar<Color>
}

export const drak = (): ColorScheme => ({
  background: Vars.ColorPalette.Neutral6(),
  error: Vars.ColorPalette.Error80(),
  errorContainer: Vars.ColorPalette.Error30(),
  inverseOnSurface: Vars.ColorPalette.Neutral20(),
  inversePrimary: Vars.ColorPalette.Primary40(),
  inverseSurface: Vars.ColorPalette.Neutral90(),
  onBackground: Vars.ColorPalette.Neutral90(),
  onError: Vars.ColorPalette.Error20(),
  onErrorContainer: Vars.ColorPalette.Error90(),
  onPrimary: Vars.ColorPalette.Primary20(),
  onPrimaryContainer: Vars.ColorPalette.Primary90(),
  onPrimaryFixed: Vars.ColorPalette.Primary10(),
  onPrimaryFixedVariant: Vars.ColorPalette.Primary30(),
  onSecondary: Vars.ColorPalette.Secondary20(),
  onSecondaryContainer: Vars.ColorPalette.Secondary90(),
  onSecondaryFixed: Vars.ColorPalette.Secondary10(),
  onSecondaryFixedVariant: Vars.ColorPalette.Secondary30(),
  onSurface: Vars.ColorPalette.Neutral90(),
  onSurfaceVariant: Vars.ColorPalette.NeutralVariant80(),
  onTertiary: Vars.ColorPalette.Tertiary20(),
  onTertiaryContainer: Vars.ColorPalette.Tertiary90(),
  onTertiaryFixed: Vars.ColorPalette.Tertiary10(),
  onTertiaryFixedVariant: Vars.ColorPalette.Tertiary30(),
  outline: Vars.ColorPalette.NeutralVariant60(),
  outlineVariant: Vars.ColorPalette.NeutralVariant30(),
  primary: Vars.ColorPalette.Primary80(),
  primaryContainer: Vars.ColorPalette.Primary30(),
  primaryFixed: Vars.ColorPalette.Primary90(),
  primaryFixedDim: Vars.ColorPalette.Primary80(),
  scrim: Vars.ColorPalette.Neutral0(),
  secondary: Vars.ColorPalette.Secondary80(),
  secondaryContainer: Vars.ColorPalette.Secondary30(),
  secondaryFixed: Vars.ColorPalette.Secondary90(),
  secondaryFixedDim: Vars.ColorPalette.Secondary80(),
  shadow: Vars.ColorPalette.Neutral0(),
  surface: Vars.ColorPalette.Neutral6(),
  surfaceBright: Vars.ColorPalette.Neutral24(),
  surfaceContainer: Vars.ColorPalette.Neutral12(),
  surfaceContainerHigh: Vars.ColorPalette.Neutral17(),
  surfaceContainerHighest: Vars.ColorPalette.Neutral22(),
  surfaceContainerLow: Vars.ColorPalette.Neutral10(),
  surfaceContainerLowest: Vars.ColorPalette.Neutral4(),
  surfaceDim: Vars.ColorPalette.Neutral6(),
  surfaceTint: Vars.ColorPalette.Primary80(),
  surfaceVariant: Vars.ColorPalette.NeutralVariant30(),
  tertiary: Vars.ColorPalette.Tertiary80(),
  tertiaryContainer: Vars.ColorPalette.Tertiary30(),
  tertiaryFixed: Vars.ColorPalette.Tertiary90(),
  tertiaryFixedDim: Vars.ColorPalette.Tertiary80(),
});

export const light = (): ColorScheme => ({
  background: Vars.ColorPalette.Neutral98(),
  error: Vars.ColorPalette.Error40(),
  errorContainer: Vars.ColorPalette.Error90(),
  inverseOnSurface: Vars.ColorPalette.Neutral95(),
  inversePrimary: Vars.ColorPalette.Primary80(),
  inverseSurface: Vars.ColorPalette.Neutral20(),
  onBackground: Vars.ColorPalette.Neutral10(),
  onError: Vars.ColorPalette.Error100(),
  onErrorContainer: Vars.ColorPalette.Error10(),
  onPrimary: Vars.ColorPalette.Primary100(),
  onPrimaryContainer: Vars.ColorPalette.Primary10(),
  onPrimaryFixed: Vars.ColorPalette.Primary10(),
  onPrimaryFixedVariant: Vars.ColorPalette.Primary30(),
  onSecondary: Vars.ColorPalette.Secondary100(),
  onSecondaryContainer: Vars.ColorPalette.Secondary10(),
  onSecondaryFixed: Vars.ColorPalette.Secondary10(),
  onSecondaryFixedVariant: Vars.ColorPalette.Secondary30(),
  onSurface: Vars.ColorPalette.Neutral10(),
  onSurfaceVariant: Vars.ColorPalette.NeutralVariant30(),
  onTertiary: Vars.ColorPalette.Tertiary100(),
  onTertiaryContainer: Vars.ColorPalette.Tertiary10(),
  onTertiaryFixed: Vars.ColorPalette.Tertiary10(),
  onTertiaryFixedVariant: Vars.ColorPalette.Tertiary30(),
  outline: Vars.ColorPalette.NeutralVariant50(),
  outlineVariant: Vars.ColorPalette.NeutralVariant80(),
  primary: Vars.ColorPalette.Primary40(),
  primaryContainer: Vars.ColorPalette.Primary90(),
  primaryFixed: Vars.ColorPalette.Primary90(),
  primaryFixedDim: Vars.ColorPalette.Primary80(),
  scrim: Vars.ColorPalette.Neutral0(),
  secondary: Vars.ColorPalette.Secondary40(),
  secondaryContainer: Vars.ColorPalette.Secondary90(),
  secondaryFixed: Vars.ColorPalette.Secondary90(),
  secondaryFixedDim: Vars.ColorPalette.Secondary80(),
  shadow: Vars.ColorPalette.Neutral0(),
  surface: Vars.ColorPalette.Neutral98(),
  surfaceBright: Vars.ColorPalette.Neutral98(),
  surfaceContainer: Vars.ColorPalette.Neutral94(),
  surfaceContainerHigh: Vars.ColorPalette.Neutral92(),
  surfaceContainerHighest: Vars.ColorPalette.Neutral90(),
  surfaceContainerLow: Vars.ColorPalette.Neutral96(),
  surfaceContainerLowest: Vars.ColorPalette.Neutral100(),
  surfaceDim: Vars.ColorPalette.Neutral87(),
  surfaceTint: Vars.ColorPalette.Primary40(),
  surfaceVariant: Vars.ColorPalette.NeutralVariant90(),
  tertiary: Vars.ColorPalette.Tertiary40(),
  tertiaryContainer: Vars.ColorPalette.Tertiary90(),
  tertiaryFixed: Vars.ColorPalette.Tertiary90(),
  tertiaryFixedDim: Vars.ColorPalette.Tertiary80(),
});

export const ColorScheme = {
  drak,
  light,
};