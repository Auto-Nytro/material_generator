import { ColorScheme, Color, ColorPalette, ColorPaletteRef } from "@internal/prelude";

const enum ColorSchemeKey {
  Background,
  Error,
  ErrorContainer,
  InverseOnSurface,
  InversePrimary,
  InverseSurface,
  OnBackground,
  OnError,
  OnErrorContainer,
  OnPrimary,
  OnPrimaryContainer,
  OnPrimaryFixed,
  OnPrimaryFixedVariant,
  OnSecondary,
  OnSecondaryContainer,
  OnSecondaryFixed,
  OnSecondaryFixedVariant,
  OnSurface,
  OnSurfaceVariant,
  OnTertiary,
  OnTertiaryContainer,
  OnTertiaryFixed,
  OnTertiaryFixedVariant,
  Outline,
  OutlineVariant,
  Primary,
  PrimaryContainer,
  PrimaryFixed,
  PrimaryFixedDim,
  Scrim,
  Secondary,
  SecondaryContainer,
  SecondaryFixed,
  SecondaryFixedDim,
  Shadow,
  Surface,
  SurfaceBright,
  SurfaceContainer,
  SurfaceContainerHigh,
  SurfaceContainerHighest,
  SurfaceContainerLow,
  SurfaceContainerLowest,
  SurfaceDim,
  SurfaceTint,
  SurfaceVariant,
  Tertiary,
  TertiaryContainer,
  TertiaryFixed,
  TertiaryFixedDim,
}

export type Any = ColorSchemeKey;
export type Background = ColorSchemeKey.Background;
export type Error = ColorSchemeKey.Error;
export type ErrorContainer = ColorSchemeKey.ErrorContainer;
export type InverseOnSurface = ColorSchemeKey.InverseOnSurface;
export type InversePrimary = ColorSchemeKey.InversePrimary;
export type InverseSurface = ColorSchemeKey.InverseSurface;
export type OnBackground = ColorSchemeKey.OnBackground;
export type OnError = ColorSchemeKey.OnError;
export type OnErrorContainer = ColorSchemeKey.OnErrorContainer;
export type OnPrimary = ColorSchemeKey.OnPrimary;
export type OnPrimaryContainer = ColorSchemeKey.OnPrimaryContainer;
export type OnPrimaryFixed = ColorSchemeKey.OnPrimaryFixed;
export type OnPrimaryFixedVariant = ColorSchemeKey.OnPrimaryFixedVariant;
export type OnSecondary = ColorSchemeKey.OnSecondary;
export type OnSecondaryContainer = ColorSchemeKey.OnSecondaryContainer;
export type OnSecondaryFixed = ColorSchemeKey.OnSecondaryFixed;
export type OnSecondaryFixedVariant = ColorSchemeKey.OnSecondaryFixedVariant;
export type OnSurface = ColorSchemeKey.OnSurface;
export type OnSurfaceVariant = ColorSchemeKey.OnSurfaceVariant;
export type OnTertiary = ColorSchemeKey.OnTertiary;
export type OnTertiaryContainer = ColorSchemeKey.OnTertiaryContainer;
export type OnTertiaryFixed = ColorSchemeKey.OnTertiaryFixed;
export type OnTertiaryFixedVariant = ColorSchemeKey.OnTertiaryFixedVariant;
export type Outline = ColorSchemeKey.Outline;
export type OutlineVariant = ColorSchemeKey.OutlineVariant;
export type Primary = ColorSchemeKey.Primary;
export type PrimaryContainer = ColorSchemeKey.PrimaryContainer;
export type PrimaryFixed = ColorSchemeKey.PrimaryFixed;
export type PrimaryFixedDim = ColorSchemeKey.PrimaryFixedDim;
export type Scrim = ColorSchemeKey.Scrim;
export type Secondary = ColorSchemeKey.Secondary;
export type SecondaryContainer = ColorSchemeKey.SecondaryContainer;
export type SecondaryFixed = ColorSchemeKey.SecondaryFixed;
export type SecondaryFixedDim = ColorSchemeKey.SecondaryFixedDim;
export type Shadow = ColorSchemeKey.Shadow;
export type Surface = ColorSchemeKey.Surface;
export type SurfaceBright = ColorSchemeKey.SurfaceBright;
export type SurfaceContainer = ColorSchemeKey.SurfaceContainer;
export type SurfaceContainerHigh = ColorSchemeKey.SurfaceContainerHigh;
export type SurfaceContainerHighest = ColorSchemeKey.SurfaceContainerHighest;
export type SurfaceContainerLow = ColorSchemeKey.SurfaceContainerLow;
export type SurfaceContainerLowest = ColorSchemeKey.SurfaceContainerLowest;
export type SurfaceDim = ColorSchemeKey.SurfaceDim;
export type SurfaceTint = ColorSchemeKey.SurfaceTint;
export type SurfaceVariant = ColorSchemeKey.SurfaceVariant;
export type Tertiary = ColorSchemeKey.Tertiary;
export type TertiaryContainer = ColorSchemeKey.TertiaryContainer;
export type TertiaryFixed = ColorSchemeKey.TertiaryFixed;
export type TertiaryFixedDim = ColorSchemeKey.TertiaryFixedDim;

export const Background = (): Background => ColorSchemeKey.Background;
export const Error = (): Error => ColorSchemeKey.Error;
export const ErrorContainer = (): ErrorContainer => ColorSchemeKey.ErrorContainer;
export const InverseOnSurface = (): InverseOnSurface => ColorSchemeKey.InverseOnSurface;
export const InversePrimary = (): InversePrimary => ColorSchemeKey.InversePrimary;
export const InverseSurface = (): InverseSurface => ColorSchemeKey.InverseSurface;
export const OnBackground = (): OnBackground => ColorSchemeKey.OnBackground;
export const OnError = (): OnError => ColorSchemeKey.OnError;
export const OnErrorContainer = (): OnErrorContainer => ColorSchemeKey.OnErrorContainer;
export const OnPrimary = (): OnPrimary => ColorSchemeKey.OnPrimary;
export const OnPrimaryContainer = (): OnPrimaryContainer => ColorSchemeKey.OnPrimaryContainer;
export const OnPrimaryFixed = (): OnPrimaryFixed => ColorSchemeKey.OnPrimaryFixed;
export const OnPrimaryFixedVariant = (): OnPrimaryFixedVariant => ColorSchemeKey.OnPrimaryFixedVariant;
export const OnSecondary = (): OnSecondary => ColorSchemeKey.OnSecondary;
export const OnSecondaryContainer = (): OnSecondaryContainer => ColorSchemeKey.OnSecondaryContainer;
export const OnSecondaryFixed = (): OnSecondaryFixed => ColorSchemeKey.OnSecondaryFixed;
export const OnSecondaryFixedVariant = (): OnSecondaryFixedVariant => ColorSchemeKey.OnSecondaryFixedVariant;
export const OnSurface = (): OnSurface => ColorSchemeKey.OnSurface;
export const OnSurfaceVariant = (): OnSurfaceVariant => ColorSchemeKey.OnSurfaceVariant;
export const OnTertiary = (): OnTertiary => ColorSchemeKey.OnTertiary;
export const OnTertiaryContainer = (): OnTertiaryContainer => ColorSchemeKey.OnTertiaryContainer;
export const OnTertiaryFixed = (): OnTertiaryFixed => ColorSchemeKey.OnTertiaryFixed;
export const OnTertiaryFixedVariant = (): OnTertiaryFixedVariant => ColorSchemeKey.OnTertiaryFixedVariant;
export const Outline = (): Outline => ColorSchemeKey.Outline;
export const OutlineVariant = (): OutlineVariant => ColorSchemeKey.OutlineVariant;
export const Primary = (): Primary => ColorSchemeKey.Primary;
export const PrimaryContainer = (): PrimaryContainer => ColorSchemeKey.PrimaryContainer;
export const PrimaryFixed = (): PrimaryFixed => ColorSchemeKey.PrimaryFixed;
export const PrimaryFixedDim = (): PrimaryFixedDim => ColorSchemeKey.PrimaryFixedDim;
export const Scrim = (): Scrim => ColorSchemeKey.Scrim;
export const Secondary = (): Secondary => ColorSchemeKey.Secondary;
export const SecondaryContainer = (): SecondaryContainer => ColorSchemeKey.SecondaryContainer;
export const SecondaryFixed = (): SecondaryFixed => ColorSchemeKey.SecondaryFixed;
export const SecondaryFixedDim = (): SecondaryFixedDim => ColorSchemeKey.SecondaryFixedDim;
export const Shadow = (): Shadow => ColorSchemeKey.Shadow;
export const Surface = (): Surface => ColorSchemeKey.Surface;
export const SurfaceBright = (): SurfaceBright => ColorSchemeKey.SurfaceBright;
export const SurfaceContainer = (): SurfaceContainer => ColorSchemeKey.SurfaceContainer;
export const SurfaceContainerHigh = (): SurfaceContainerHigh => ColorSchemeKey.SurfaceContainerHigh;
export const SurfaceContainerHighest = (): SurfaceContainerHighest => ColorSchemeKey.SurfaceContainerHighest;
export const SurfaceContainerLow = (): SurfaceContainerLow => ColorSchemeKey.SurfaceContainerLow;
export const SurfaceContainerLowest = (): SurfaceContainerLowest => ColorSchemeKey.SurfaceContainerLowest;
export const SurfaceDim = (): SurfaceDim => ColorSchemeKey.SurfaceDim;
export const SurfaceTint = (): SurfaceTint => ColorSchemeKey.SurfaceTint;
export const SurfaceVariant = (): SurfaceVariant => ColorSchemeKey.SurfaceVariant;
export const Tertiary = (): Tertiary => ColorSchemeKey.Tertiary;
export const TertiaryContainer = (): TertiaryContainer => ColorSchemeKey.TertiaryContainer;
export const TertiaryFixed = (): TertiaryFixed => ColorSchemeKey.TertiaryFixed;
export const TertiaryFixedDim = (): TertiaryFixedDim => ColorSchemeKey.TertiaryFixedDim;

export const get = (it: Any, colorScheme: ColorScheme, colorPalette: ColorPalette): Color => {
  switch (it) {
    case ColorSchemeKey.Background: return ColorPaletteRef.get(colorScheme.background, colorPalette);
    case ColorSchemeKey.Error: return ColorPaletteRef.get(colorScheme.error, colorPalette);
    case ColorSchemeKey.ErrorContainer: return ColorPaletteRef.get(colorScheme.errorContainer, colorPalette);
    case ColorSchemeKey.InverseOnSurface: return ColorPaletteRef.get(colorScheme.inverseOnSurface, colorPalette);
    case ColorSchemeKey.InversePrimary: return ColorPaletteRef.get(colorScheme.inversePrimary, colorPalette);
    case ColorSchemeKey.InverseSurface: return ColorPaletteRef.get(colorScheme.inverseSurface, colorPalette);
    case ColorSchemeKey.OnBackground: return ColorPaletteRef.get(colorScheme.onBackground, colorPalette);
    case ColorSchemeKey.OnError: return ColorPaletteRef.get(colorScheme.onError, colorPalette);
    case ColorSchemeKey.OnErrorContainer: return ColorPaletteRef.get(colorScheme.onErrorContainer, colorPalette);
    case ColorSchemeKey.OnPrimary: return ColorPaletteRef.get(colorScheme.onPrimary, colorPalette);
    case ColorSchemeKey.OnPrimaryContainer: return ColorPaletteRef.get(colorScheme.onPrimaryContainer, colorPalette);
    case ColorSchemeKey.OnPrimaryFixed: return ColorPaletteRef.get(colorScheme.onPrimaryFixed, colorPalette);
    case ColorSchemeKey.OnPrimaryFixedVariant: return ColorPaletteRef.get(colorScheme.onPrimaryFixedVariant, colorPalette);
    case ColorSchemeKey.OnSecondary: return ColorPaletteRef.get(colorScheme.onSecondary, colorPalette);
    case ColorSchemeKey.OnSecondaryContainer: return ColorPaletteRef.get(colorScheme.onSecondaryContainer, colorPalette);
    case ColorSchemeKey.OnSecondaryFixed: return ColorPaletteRef.get(colorScheme.onSecondaryFixed, colorPalette);
    case ColorSchemeKey.OnSecondaryFixedVariant: return ColorPaletteRef.get(colorScheme.onSecondaryFixedVariant, colorPalette);
    case ColorSchemeKey.OnSurface: return ColorPaletteRef.get(colorScheme.onSurface, colorPalette);
    case ColorSchemeKey.OnSurfaceVariant: return ColorPaletteRef.get(colorScheme.onSurfaceVariant, colorPalette);
    case ColorSchemeKey.OnTertiary: return ColorPaletteRef.get(colorScheme.onTertiary, colorPalette);
    case ColorSchemeKey.OnTertiaryContainer: return ColorPaletteRef.get(colorScheme.onTertiaryContainer, colorPalette);
    case ColorSchemeKey.OnTertiaryFixed: return ColorPaletteRef.get(colorScheme.onTertiaryFixed, colorPalette);
    case ColorSchemeKey.OnTertiaryFixedVariant: return ColorPaletteRef.get(colorScheme.onTertiaryFixedVariant, colorPalette);
    case ColorSchemeKey.Outline: return ColorPaletteRef.get(colorScheme.outline, colorPalette);
    case ColorSchemeKey.OutlineVariant: return ColorPaletteRef.get(colorScheme.outlineVariant, colorPalette);
    case ColorSchemeKey.Primary: return ColorPaletteRef.get(colorScheme.primary, colorPalette);
    case ColorSchemeKey.PrimaryContainer: return ColorPaletteRef.get(colorScheme.primaryContainer, colorPalette);
    case ColorSchemeKey.PrimaryFixed: return ColorPaletteRef.get(colorScheme.primaryFixed, colorPalette);
    case ColorSchemeKey.PrimaryFixedDim: return ColorPaletteRef.get(colorScheme.primaryFixedDim, colorPalette);
    case ColorSchemeKey.Scrim: return ColorPaletteRef.get(colorScheme.scrim, colorPalette);
    case ColorSchemeKey.Secondary: return ColorPaletteRef.get(colorScheme.secondary, colorPalette);
    case ColorSchemeKey.SecondaryContainer: return ColorPaletteRef.get(colorScheme.secondaryContainer, colorPalette);
    case ColorSchemeKey.SecondaryFixed: return ColorPaletteRef.get(colorScheme.secondaryFixed, colorPalette);
    case ColorSchemeKey.SecondaryFixedDim: return ColorPaletteRef.get(colorScheme.secondaryFixedDim, colorPalette);
    case ColorSchemeKey.Shadow: return ColorPaletteRef.get(colorScheme.shadow, colorPalette);
    case ColorSchemeKey.Surface: return ColorPaletteRef.get(colorScheme.surface, colorPalette);
    case ColorSchemeKey.SurfaceBright: return ColorPaletteRef.get(colorScheme.surfaceBright, colorPalette);
    case ColorSchemeKey.SurfaceContainer: return ColorPaletteRef.get(colorScheme.surfaceContainer, colorPalette);
    case ColorSchemeKey.SurfaceContainerHigh: return ColorPaletteRef.get(colorScheme.surfaceContainerHigh, colorPalette);
    case ColorSchemeKey.SurfaceContainerHighest: return ColorPaletteRef.get(colorScheme.surfaceContainerHighest, colorPalette);
    case ColorSchemeKey.SurfaceContainerLow: return ColorPaletteRef.get(colorScheme.surfaceContainerLow, colorPalette);
    case ColorSchemeKey.SurfaceContainerLowest: return ColorPaletteRef.get(colorScheme.surfaceContainerLowest, colorPalette);
    case ColorSchemeKey.SurfaceDim: return ColorPaletteRef.get(colorScheme.surfaceDim, colorPalette);
    case ColorSchemeKey.SurfaceTint: return ColorPaletteRef.get(colorScheme.surfaceTint, colorPalette);
    case ColorSchemeKey.SurfaceVariant: return ColorPaletteRef.get(colorScheme.surfaceVariant, colorPalette);
    case ColorSchemeKey.Tertiary: return ColorPaletteRef.get(colorScheme.tertiary, colorPalette);
    case ColorSchemeKey.TertiaryContainer: return ColorPaletteRef.get(colorScheme.tertiaryContainer, colorPalette);
    case ColorSchemeKey.TertiaryFixed: return ColorPaletteRef.get(colorScheme.tertiaryFixed, colorPalette);
    case ColorSchemeKey.TertiaryFixedDim: return ColorPaletteRef.get(colorScheme.tertiaryFixedDim, colorPalette);
  }
};

// export class ColorSchemeRef {
//   private constructor(readonly discriminant: ColorSchemeKey) {}

//   private static readonly internalBackground = new ColorSchemeRef(ColorSchemeKey.Background);
//   private static readonly internalError = new ColorSchemeRef(ColorSchemeKey.Error);
//   private static readonly internalErrorContainer = new ColorSchemeRef(ColorSchemeKey.ErrorContainer);
//   private static readonly internalInverseOnSurface = new ColorSchemeRef(ColorSchemeKey.InverseOnSurface);
//   private static readonly internalInversePrimary = new ColorSchemeRef(ColorSchemeKey.InversePrimary);
//   private static readonly internalInverseSurface = new ColorSchemeRef(ColorSchemeKey.InverseSurface);
//   private static readonly internalOnBackground = new ColorSchemeRef(ColorSchemeKey.OnBackground);
//   private static readonly internalOnError = new ColorSchemeRef(ColorSchemeKey.OnError);
//   private static readonly internalOnErrorContainer = new ColorSchemeRef(ColorSchemeKey.OnErrorContainer);
//   private static readonly internalOnPrimary = new ColorSchemeRef(ColorSchemeKey.OnPrimary);
//   private static readonly internalOnPrimaryContainer = new ColorSchemeRef(ColorSchemeKey.OnPrimaryContainer);
//   private static readonly internalOnPrimaryFixed = new ColorSchemeRef(ColorSchemeKey.OnPrimaryFixed);
//   private static readonly internalOnPrimaryFixedVariant = new ColorSchemeRef(ColorSchemeKey.OnPrimaryFixedVariant);
//   private static readonly internalOnSecondary = new ColorSchemeRef(ColorSchemeKey.OnSecondary);
//   private static readonly internalOnSecondaryContainer = new ColorSchemeRef(ColorSchemeKey.OnSecondaryContainer);
//   private static readonly internalOnSecondaryFixed = new ColorSchemeRef(ColorSchemeKey.OnSecondaryFixed);
//   private static readonly internalOnSecondaryFixedVariant = new ColorSchemeRef(ColorSchemeKey.OnSecondaryFixedVariant);
//   private static readonly internalOnSurface = new ColorSchemeRef(ColorSchemeKey.OnSurface);
//   private static readonly internalOnSurfaceVariant = new ColorSchemeRef(ColorSchemeKey.OnSurfaceVariant);
//   private static readonly internalOnTertiary = new ColorSchemeRef(ColorSchemeKey.OnTertiary);
//   private static readonly internalOnTertiaryContainer = new ColorSchemeRef(ColorSchemeKey.OnTertiaryContainer);
//   private static readonly internalOnTertiaryFixed = new ColorSchemeRef(ColorSchemeKey.OnTertiaryFixed);
//   private static readonly internalOnTertiaryFixedVariant = new ColorSchemeRef(ColorSchemeKey.OnTertiaryFixedVariant);
//   private static readonly internalOutline = new ColorSchemeRef(ColorSchemeKey.Outline);
//   private static readonly internalOutlineVariant = new ColorSchemeRef(ColorSchemeKey.OutlineVariant);
//   private static readonly internalPrimary = new ColorSchemeRef(ColorSchemeKey.Primary);
//   private static readonly internalPrimaryContainer = new ColorSchemeRef(ColorSchemeKey.PrimaryContainer);
//   private static readonly internalPrimaryFixed = new ColorSchemeRef(ColorSchemeKey.PrimaryFixed);
//   private static readonly internalPrimaryFixedDim = new ColorSchemeRef(ColorSchemeKey.PrimaryFixedDim);
//   private static readonly internalScrim = new ColorSchemeRef(ColorSchemeKey.Scrim);
//   private static readonly internalSecondary = new ColorSchemeRef(ColorSchemeKey.Secondary);
//   private static readonly internalSecondaryContainer = new ColorSchemeRef(ColorSchemeKey.SecondaryContainer);
//   private static readonly internalSecondaryFixed = new ColorSchemeRef(ColorSchemeKey.SecondaryFixed);
//   private static readonly internalSecondaryFixedDim = new ColorSchemeRef(ColorSchemeKey.SecondaryFixedDim);
//   private static readonly internalShadow = new ColorSchemeRef(ColorSchemeKey.Shadow);
//   private static readonly internalSurface = new ColorSchemeRef(ColorSchemeKey.Surface);
//   private static readonly internalSurfaceBright = new ColorSchemeRef(ColorSchemeKey.SurfaceBright);
//   private static readonly internalSurfaceContainer = new ColorSchemeRef(ColorSchemeKey.SurfaceContainer);
//   private static readonly internalSurfaceContainerHigh = new ColorSchemeRef(ColorSchemeKey.SurfaceContainerHigh);
//   private static readonly internalSurfaceContainerHighest = new ColorSchemeRef(ColorSchemeKey.SurfaceContainerHighest);
//   private static readonly internalSurfaceContainerLow = new ColorSchemeRef(ColorSchemeKey.SurfaceContainerLow);
//   private static readonly internalSurfaceContainerLowest = new ColorSchemeRef(ColorSchemeKey.SurfaceContainerLowest);
//   private static readonly internalSurfaceDim = new ColorSchemeRef(ColorSchemeKey.SurfaceDim);
//   private static readonly internalSurfaceTint = new ColorSchemeRef(ColorSchemeKey.SurfaceTint);
//   private static readonly internalSurfaceVariant = new ColorSchemeRef(ColorSchemeKey.SurfaceVariant);
//   private static readonly internalTertiary = new ColorSchemeRef(ColorSchemeKey.Tertiary);
//   private static readonly internalTertiaryContainer = new ColorSchemeRef(ColorSchemeKey.TertiaryContainer);
//   private static readonly internalTertiaryFixed = new ColorSchemeRef(ColorSchemeKey.TertiaryFixed);
//   private static readonly internalTertiaryFixedDim = new ColorSchemeRef(ColorSchemeKey.TertiaryFixedDim);

//   static Background() {
//     return this.internalBackground;
//   }
//   static Error() {
//     return this.internalError;
//   }
//   static ErrorContainer() {
//     return this.internalErrorContainer;
//   }
//   static InverseOnSurface() {
//     return this.internalInverseOnSurface;
//   }
//   static InversePrimary() {
//     return this.internalInversePrimary;
//   }
//   static InverseSurface() {
//     return this.internalInverseSurface;
//   }
//   static OnBackground() {
//     return this.internalOnBackground;
//   }
//   static OnError() {
//     return this.internalOnError;
//   }
//   static OnErrorContainer() {
//     return this.internalOnErrorContainer;
//   }
//   static OnPrimary() {
//     return this.internalOnPrimary;
//   }
//   static OnPrimaryContainer() {
//     return this.internalOnPrimaryContainer;
//   }
//   static OnPrimaryFixed() {
//     return this.internalOnPrimaryFixed;
//   }
//   static OnPrimaryFixedVariant() {
//     return this.internalOnPrimaryFixedVariant;
//   }
//   static OnSecondary() {
//     return this.internalOnSecondary;
//   }
//   static OnSecondaryContainer() {
//     return this.internalOnSecondaryContainer;
//   }
//   static OnSecondaryFixed() {
//     return this.internalOnSecondaryFixed;
//   }
//   static OnSecondaryFixedVariant() {
//     return this.internalOnSecondaryFixedVariant;
//   }
//   static OnSurface() {
//     return this.internalOnSurface;
//   }
//   static OnSurfaceVariant() {
//     return this.internalOnSurfaceVariant;
//   }
//   static OnTertiary() {
//     return this.internalOnTertiary;
//   }
//   static OnTertiaryContainer() {
//     return this.internalOnTertiaryContainer;
//   }
//   static OnTertiaryFixed() {
//     return this.internalOnTertiaryFixed;
//   }
//   static OnTertiaryFixedVariant() {
//     return this.internalOnTertiaryFixedVariant;
//   }
//   static Outline() {
//     return this.internalOutline;
//   }
//   static OutlineVariant() {
//     return this.internalOutlineVariant;
//   }
//   static Primary() {
//     return this.internalPrimary;
//   }
//   static PrimaryContainer() {
//     return this.internalPrimaryContainer;
//   }
//   static PrimaryFixed() {
//     return this.internalPrimaryFixed;
//   }
//   static PrimaryFixedDim() {
//     return this.internalPrimaryFixedDim;
//   }
//   static Scrim() {
//     return this.internalScrim;
//   }
//   static Secondary() {
//     return this.internalSecondary;
//   }
//   static SecondaryContainer() {
//     return this.internalSecondaryContainer;
//   }
//   static SecondaryFixed() {
//     return this.internalSecondaryFixed;
//   }
//   static SecondaryFixedDim() {
//     return this.internalSecondaryFixedDim;
//   }
//   static Shadow() {
//     return this.internalShadow;
//   }
//   static Surface() {
//     return this.internalSurface;
//   }
//   static SurfaceBright() {
//     return this.internalSurfaceBright;
//   }
//   static SurfaceContainer() {
//     return this.internalSurfaceContainer;
//   }
//   static SurfaceContainerHigh() {
//     return this.internalSurfaceContainerHigh;
//   }
//   static SurfaceContainerHighest() {
//     return this.internalSurfaceContainerHighest;
//   }
//   static SurfaceContainerLow() {
//     return this.internalSurfaceContainerLow;
//   }
//   static SurfaceContainerLowest() {
//     return this.internalSurfaceContainerLowest;
//   }
//   static SurfaceDim() {
//     return this.internalSurfaceDim;
//   }
//   static SurfaceTint() {
//     return this.internalSurfaceTint;
//   }
//   static SurfaceVariant() {
//     return this.internalSurfaceVariant;
//   }
//   static Tertiary() {
//     return this.internalTertiary;
//   }
//   static TertiaryContainer() {
//     return this.internalTertiaryContainer;
//   }
//   static TertiaryFixed() {
//     return this.internalTertiaryFixed;
//   }
//   static TertiaryFixedDim() {
//     return this.internalTertiaryFixedDim;
//   }

//   deref(colorScheme: ColorScheme, colorPalette: ColorPalette): Color {
//     switch (this.discriminant) {
//       case ColorSchemeKey.Background: return colorScheme.background.deref(colorPalette);
//       case ColorSchemeKey.Error: return colorScheme.error.deref(colorPalette);
//       case ColorSchemeKey.ErrorContainer: return colorScheme.errorContainer.deref(colorPalette);
//       case ColorSchemeKey.InverseOnSurface: return colorScheme.inverseOnSurface.deref(colorPalette);
//       case ColorSchemeKey.InversePrimary: return colorScheme.inversePrimary.deref(colorPalette);
//       case ColorSchemeKey.InverseSurface: return colorScheme.inverseSurface.deref(colorPalette);
//       case ColorSchemeKey.OnBackground: return colorScheme.onBackground.deref(colorPalette);
//       case ColorSchemeKey.OnError: return colorScheme.onError.deref(colorPalette);
//       case ColorSchemeKey.OnErrorContainer: return colorScheme.onErrorContainer.deref(colorPalette);
//       case ColorSchemeKey.OnPrimary: return colorScheme.onPrimary.deref(colorPalette);
//       case ColorSchemeKey.OnPrimaryContainer: return colorScheme.onPrimaryContainer.deref(colorPalette);
//       case ColorSchemeKey.OnPrimaryFixed: return colorScheme.onPrimaryFixed.deref(colorPalette);
//       case ColorSchemeKey.OnPrimaryFixedVariant: return colorScheme.onPrimaryFixedVariant.deref(colorPalette);
//       case ColorSchemeKey.OnSecondary: return colorScheme.onSecondary.deref(colorPalette);
//       case ColorSchemeKey.OnSecondaryContainer: return colorScheme.onSecondaryContainer.deref(colorPalette);
//       case ColorSchemeKey.OnSecondaryFixed: return colorScheme.onSecondaryFixed.deref(colorPalette);
//       case ColorSchemeKey.OnSecondaryFixedVariant: return colorScheme.onSecondaryFixedVariant.deref(colorPalette);
//       case ColorSchemeKey.OnSurface: return colorScheme.onSurface.deref(colorPalette);
//       case ColorSchemeKey.OnSurfaceVariant: return colorScheme.onSurfaceVariant.deref(colorPalette);
//       case ColorSchemeKey.OnTertiary: return colorScheme.onTertiary.deref(colorPalette);
//       case ColorSchemeKey.OnTertiaryContainer: return colorScheme.onTertiaryContainer.deref(colorPalette);
//       case ColorSchemeKey.OnTertiaryFixed: return colorScheme.onTertiaryFixed.deref(colorPalette);
//       case ColorSchemeKey.OnTertiaryFixedVariant: return colorScheme.onTertiaryFixedVariant.deref(colorPalette);
//       case ColorSchemeKey.Outline: return colorScheme.outline.deref(colorPalette);
//       case ColorSchemeKey.OutlineVariant: return colorScheme.outlineVariant.deref(colorPalette);
//       case ColorSchemeKey.Primary: return colorScheme.primary.deref(colorPalette);
//       case ColorSchemeKey.PrimaryContainer: return colorScheme.primaryContainer.deref(colorPalette);
//       case ColorSchemeKey.PrimaryFixed: return colorScheme.primaryFixed.deref(colorPalette);
//       case ColorSchemeKey.PrimaryFixedDim: return colorScheme.primaryFixedDim.deref(colorPalette);
//       case ColorSchemeKey.Scrim: return colorScheme.scrim.deref(colorPalette);
//       case ColorSchemeKey.Secondary: return colorScheme.secondary.deref(colorPalette);
//       case ColorSchemeKey.SecondaryContainer: return colorScheme.secondaryContainer.deref(colorPalette);
//       case ColorSchemeKey.SecondaryFixed: return colorScheme.secondaryFixed.deref(colorPalette);
//       case ColorSchemeKey.SecondaryFixedDim: return colorScheme.secondaryFixedDim.deref(colorPalette);
//       case ColorSchemeKey.Shadow: return colorScheme.shadow.deref(colorPalette);
//       case ColorSchemeKey.Surface: return colorScheme.surface.deref(colorPalette);
//       case ColorSchemeKey.SurfaceBright: return colorScheme.surfaceBright.deref(colorPalette);
//       case ColorSchemeKey.SurfaceContainer: return colorScheme.surfaceContainer.deref(colorPalette);
//       case ColorSchemeKey.SurfaceContainerHigh: return colorScheme.surfaceContainerHigh.deref(colorPalette);
//       case ColorSchemeKey.SurfaceContainerHighest: return colorScheme.surfaceContainerHighest.deref(colorPalette);
//       case ColorSchemeKey.SurfaceContainerLow: return colorScheme.surfaceContainerLow.deref(colorPalette);
//       case ColorSchemeKey.SurfaceContainerLowest: return colorScheme.surfaceContainerLowest.deref(colorPalette);
//       case ColorSchemeKey.SurfaceDim: return colorScheme.surfaceDim.deref(colorPalette);
//       case ColorSchemeKey.SurfaceTint: return colorScheme.surfaceTint.deref(colorPalette);
//       case ColorSchemeKey.SurfaceVariant: return colorScheme.surfaceVariant.deref(colorPalette);
//       case ColorSchemeKey.Tertiary: return colorScheme.tertiary.deref(colorPalette);
//       case ColorSchemeKey.TertiaryContainer: return colorScheme.tertiaryContainer.deref(colorPalette);
//       case ColorSchemeKey.TertiaryFixed: return colorScheme.tertiaryFixed.deref(colorPalette);
//       case ColorSchemeKey.TertiaryFixedDim: return colorScheme.tertiaryFixedDim.deref(colorPalette);
//     }
//   }
// }

// const brand = Symbol();

// export type Any = Unique<typeof brand, "ColorSchemeKey", number>;

// export const BackgroundAsNumber = 0;
// export const ErrorAsNumber = 0;
// export const ErrorContainerAsNumber = 0;
// export const InverseOnSurfaceAsNumber = 0;
// export const InversePrimaryAsNumber = 0;
// export const InverseSurfaceAsNumber = 0;
// export const OnBackgroundAsNumber = 0;
// export const OnErrorAsNumber = 0;
// export const OnErrorContainerAsNumber = 0;
// export const OnPrimaryAsNumber = 0;
// export const OnPrimaryContainerAsNumber = 0;
// export const OnPrimaryFixedAsNumber = 0;
// export const OnPrimaryFixedVariantAsNumber = 0;
// export const OnSecondaryAsNumber = 0;
// export const OnSecondaryContainerAsNumber = 0;
// export const OnSecondaryFixedAsNumber = 0;
// export const OnSecondaryFixedVariantAsNumber = 0;
// export const OnSurfaceAsNumber = 0;
// export const OnSurfaceVariantAsNumber = 0;
// export const OnTertiaryAsNumber = 0;
// export const OnTertiaryContainerAsNumber = 0;
// export const OnTertiaryFixedAsNumber = 0;
// export const OnTertiaryFixedVariantAsNumber = 0;
// export const OutlineAsNumber = 0;
// export const OutlineVariantAsNumber = 0;
// export const PrimaryAsNumber = 0;
// export const PrimaryContainerAsNumber = 0;
// export const PrimaryFixedAsNumber = 0;
// export const PrimaryFixedDimAsNumber = 0;
// export const scrimAsNumber = 0;
// export const SecondaryAsNumber = 0;
// export const SecondaryContainerAsNumber = 0;
// export const SecondaryFixedAsNumber = 0;
// export const SecondaryFixedDimAsNumber = 0;
// export const ShadowAsNumber = 0;
// export const SurfaceAsNumber = 0;
// export const SurfaceBrightAsNumber = 0;
// export const SurfaceContainerAsNumber = 0;
// export const SurfaceContainerHighAsNumber = 0;
// export const SurfaceContainerHighestAsNumber = 0;
// export const SurfaceContainerLowAsNumber = 0;
// export const SurfaceContainerLowestAsNumber = 0;
// export const SurfaceDimAsNumber = 0;
// export const SurfaceTintAsNumber = 0;
// export const SurfaceVariantAsNumber = 0;
// export const TertiaryAsNumber = 0;
// export const TertiaryContainerAsNumber = 0;
// export const TertiaryFixedAsNumber = 0;
// export const TertiaryFixedDimAsNumber = 0;

// export const BackgroundAsString = "Background";
// export const ErrorAsString = "Error";
// export const ErrorContainerAsString = "ErrorContainer";
// export const InverseOnSurfaceAsString = "InverseOnSurface";
// export const InversePrimaryAsString = "InversePrimary";
// export const InverseSurfaceAsString = "InverseSurface";
// export const OnBackgroundAsString = "OnBackground";
// export const OnErrorAsString = "OnError";
// export const OnErrorContainerAsString = "OnErrorContainer";
// export const OnPrimaryAsString = "OnPrimary";
// export const OnPrimaryContainerAsString = "OnPrimaryContainer";
// export const OnPrimaryFixedAsString = "OnPrimaryFixed";
// export const OnPrimaryFixedVariantAsString = "OnPrimaryFixedVariant";
// export const OnSecondaryAsString = "OnSecondary";
// export const OnSecondaryContainerAsString = "OnSecondaryContainer";
// export const OnSecondaryFixedAsString = "OnSecondaryFixed";
// export const OnSecondaryFixedVariantAsString = "OnSecondaryFixedVariant";
// export const OnSurfaceAsString = "OnSurface";
// export const OnSurfaceVariantAsString = "OnSurfaceVariant";
// export const OnTertiaryAsString = "OnTertiary";
// export const OnTertiaryContainerAsString = "OnTertiaryContainer";
// export const OnTertiaryFixedAsString = "OnTertiaryFixed";
// export const OnTertiaryFixedVariantAsString = "OnTertiaryFixedVariant";
// export const OutlineAsString = "Outline";
// export const OutlineVariantAsString = "OutlineVariant";
// export const PrimaryAsString = "Primary";
// export const PrimaryContainerAsString = "PrimaryContainer";
// export const PrimaryFixedAsString = "PrimaryFixed";
// export const PrimaryFixedDimAsString = "PrimaryFixedDim";
// export const scrimAsString = "scrim";
// export const SecondaryAsString = "Secondary";
// export const SecondaryContainerAsString = "SecondaryContainer";
// export const SecondaryFixedAsString = "SecondaryFixed";
// export const SecondaryFixedDimAsString = "SecondaryFixedDim";
// export const ShadowAsString = "Shadow";
// export const SurfaceAsString = "Surface";
// export const SurfaceBrightAsString = "SurfaceBright";
// export const SurfaceContainerAsString = "SurfaceContainer";
// export const SurfaceContainerHighAsString = "SurfaceContainerHigh";
// export const SurfaceContainerHighestAsString = "SurfaceContainerHighest";
// export const SurfaceContainerLowAsString = "SurfaceContainerLow";
// export const SurfaceContainerLowestAsString = "SurfaceContainerLowest";
// export const SurfaceDimAsString = "SurfaceDim";
// export const SurfaceTintAsString = "SurfaceTint";
// export const SurfaceVariantAsString = "SurfaceVariant";
// export const TertiaryAsString = "Tertiary";
// export const TertiaryContainerAsString = "TertiaryContainer";
// export const TertiaryFixedAsString = "TertiaryFixed";
// export const TertiaryFixedDimAsString = "TertiaryFixedDim";

// export const Background = (): Any => {
//   return BackgroundAsNumber as Any;
// };
// export const Error = (): Any => {
//   return ErrorAsNumber as Any;
// };
// export const ErrorContainer = (): Any => {
//   return ErrorContainerAsNumber as Any;
// };
// export const InverseOnSurface = (): Any => {
//   return InverseOnSurfaceAsNumber as Any;
// };
// export const InversePrimary = (): Any => {
//   return InversePrimaryAsNumber as Any;
// };
// export const InverseSurface = (): Any => {
//   return InverseSurfaceAsNumber as Any;
// };
// export const OnBackground = (): Any => {
//   return OnBackgroundAsNumber as Any;
// };
// export const OnError = (): Any => {
//   return OnErrorAsNumber as Any;
// };
// export const OnErrorContainer = (): Any => {
//   return OnErrorContainerAsNumber as Any;
// };
// export const OnPrimary = (): Any => {
//   return OnPrimaryAsNumber as Any;
// };
// export const OnPrimaryContainer = (): Any => {
//   return OnPrimaryContainerAsNumber as Any;
// };
// export const OnPrimaryFixed = (): Any => {
//   return OnPrimaryFixedAsNumber as Any;
// };
// export const OnPrimaryFixedVariant = (): Any => {
//   return OnPrimaryFixedVariantAsNumber as Any;
// };
// export const OnSecondary = (): Any => {
//   return OnSecondaryAsNumber as Any;
// };
// export const OnSecondaryContainer = (): Any => {
//   return OnSecondaryContainerAsNumber as Any;
// };
// export const OnSecondaryFixed = (): Any => {
//   return OnSecondaryFixedAsNumber as Any;
// };
// export const OnSecondaryFixedVariant = (): Any => {
//   return OnSecondaryFixedVariantAsNumber as Any;
// };
// export const OnSurface = (): Any => {
//   return OnSurfaceAsNumber as Any;
// };
// export const OnSurfaceVariant = (): Any => {
//   return OnSurfaceVariantAsNumber as Any;
// };
// export const OnTertiary = (): Any => {
//   return OnTertiaryAsNumber as Any;
// };
// export const OnTertiaryContainer = (): Any => {
//   return OnTertiaryContainerAsNumber as Any;
// };
// export const OnTertiaryFixed = (): Any => {
//   return OnTertiaryFixedAsNumber as Any;
// };
// export const OnTertiaryFixedVariant = (): Any => {
//   return OnTertiaryFixedVariantAsNumber as Any;
// };
// export const Outline = (): Any => {
//   return OutlineAsNumber as Any;
// };
// export const OutlineVariant = (): Any => {
//   return OutlineVariantAsNumber as Any;
// };
// export const Primary = (): Any => {
//   return PrimaryAsNumber as Any;
// };
// export const PrimaryContainer = (): Any => {
//   return PrimaryContainerAsNumber as Any;
// };
// export const PrimaryFixed = (): Any => {
//   return PrimaryFixedAsNumber as Any;
// };
// export const PrimaryFixedDim = (): Any => {
//   return PrimaryFixedDimAsNumber as Any;
// };
// export const scrim = (): Any => {
//   return scrimAsNumber as Any;
// };
// export const Secondary = (): Any => {
//   return SecondaryAsNumber as Any;
// };
// export const SecondaryContainer = (): Any => {
//   return SecondaryContainerAsNumber as Any;
// };
// export const SecondaryFixed = (): Any => {
//   return SecondaryFixedAsNumber as Any;
// };
// export const SecondaryFixedDim = (): Any => {
//   return SecondaryFixedDimAsNumber as Any;
// };
// export const Shadow = (): Any => {
//   return ShadowAsNumber as Any;
// };
// export const Surface = (): Any => {
//   return SurfaceAsNumber as Any;
// };
// export const SurfaceBright = (): Any => {
//   return SurfaceBrightAsNumber as Any;
// };
// export const SurfaceContainer = (): Any => {
//   return SurfaceContainerAsNumber as Any;
// };
// export const SurfaceContainerHigh = (): Any => {
//   return SurfaceContainerHighAsNumber as Any;
// };
// export const SurfaceContainerHighest = (): Any => {
//   return SurfaceContainerHighestAsNumber as Any;
// };
// export const SurfaceContainerLow = (): Any => {
//   return SurfaceContainerLowAsNumber as Any;
// };
// export const SurfaceContainerLowest = (): Any => {
//   return SurfaceContainerLowestAsNumber as Any;
// };
// export const SurfaceDim = (): Any => {
//   return SurfaceDimAsNumber as Any;
// };
// export const SurfaceTint = (): Any => {
//   return SurfaceTintAsNumber as Any;
// };
// export const SurfaceVariant = (): Any => {
//   return SurfaceVariantAsNumber as Any;
// };
// export const Tertiary = (): Any => {
//   return TertiaryAsNumber as Any;
// };
// export const TertiaryContainer = (): Any => {
//   return TertiaryContainerAsNumber as Any;
// };
// export const TertiaryFixed = (): Any => {
//   return TertiaryFixedAsNumber as Any;
// };
// export const TertiaryFixedDim = (): Any => {
//   return TertiaryFixedDimAsNumber as Any;
// };

// export const toString = (it: Any) => {
//   switch (it) {
//     case BackgroundAsNumber: return BackgroundAsString;
//     case ErrorAsNumber: return ErrorAsString;
//     case ErrorContainerAsNumber: return ErrorContainerAsString;
//     case InverseOnSurfaceAsNumber: return InverseOnSurfaceAsString;
//     case InversePrimaryAsNumber: return InversePrimaryAsString;
//     case InverseSurfaceAsNumber: return InverseSurfaceAsString;
//     case OnBackgroundAsNumber: return OnBackgroundAsString;
//     case OnErrorAsNumber: return OnErrorAsString;
//     case OnErrorContainerAsNumber: return OnErrorContainerAsString;
//     case OnPrimaryAsNumber: return OnPrimaryAsString;
//     case OnPrimaryContainerAsNumber: return OnPrimaryContainerAsString;
//     case OnPrimaryFixedAsNumber: return OnPrimaryFixedAsString;
//     case OnPrimaryFixedVariantAsNumber: return OnPrimaryFixedVariantAsString;
//     case OnSecondaryAsNumber: return OnSecondaryAsString;
//     case OnSecondaryContainerAsNumber: return OnSecondaryContainerAsString;
//     case OnSecondaryFixedAsNumber: return OnSecondaryFixedAsString;
//     case OnSecondaryFixedVariantAsNumber: return OnSecondaryFixedVariantAsString;
//     case OnSurfaceAsNumber: return OnSurfaceAsString;
//     case OnSurfaceVariantAsNumber: return OnSurfaceVariantAsString;
//     case OnTertiaryAsNumber: return OnTertiaryAsString;
//     case OnTertiaryContainerAsNumber: return OnTertiaryContainerAsString;
//     case OnTertiaryFixedAsNumber: return OnTertiaryFixedAsString;
//     case OnTertiaryFixedVariantAsNumber: return OnTertiaryFixedVariantAsString;
//     case OutlineAsNumber: return OutlineAsString;
//     case OutlineVariantAsNumber: return OutlineVariantAsString;
//     case PrimaryAsNumber: return PrimaryAsString;
//     case PrimaryContainerAsNumber: return PrimaryContainerAsString;
//     case PrimaryFixedAsNumber: return PrimaryFixedAsString;
//     case PrimaryFixedDimAsNumber: return PrimaryFixedDimAsString;
//     case scrimAsNumber: return scrimAsString;
//     case SecondaryAsNumber: return SecondaryAsString;
//     case SecondaryContainerAsNumber: return SecondaryContainerAsString;
//     case SecondaryFixedAsNumber: return SecondaryFixedAsString;
//     case SecondaryFixedDimAsNumber: return SecondaryFixedDimAsString;
//     case ShadowAsNumber: return ShadowAsString;
//     case SurfaceAsNumber: return SurfaceAsString;
//     case SurfaceBrightAsNumber: return SurfaceBrightAsString;
//     case SurfaceContainerAsNumber: return SurfaceContainerAsString;
//     case SurfaceContainerHighAsNumber: return SurfaceContainerHighAsString;
//     case SurfaceContainerHighestAsNumber: return SurfaceContainerHighestAsString;
//     case SurfaceContainerLowAsNumber: return SurfaceContainerLowAsString;
//     case SurfaceContainerLowestAsNumber: return SurfaceContainerLowestAsString;
//     case SurfaceDimAsNumber: return SurfaceDimAsString;
//     case SurfaceTintAsNumber: return SurfaceTintAsString;
//     case SurfaceVariantAsNumber: return SurfaceVariantAsString;
//     case TertiaryAsNumber: return TertiaryAsString;
//     case TertiaryContainerAsNumber: return TertiaryContainerAsString;
//     case TertiaryFixedAsNumber: return TertiaryFixedAsString;
//     case TertiaryFixedDimAsNumber: return TertiaryFixedDimAsString;
//     default: throw new globalThis.Error("unhandled switch case");
//   }
// };