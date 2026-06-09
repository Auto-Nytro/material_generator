import {
  Color,
  Dp,
  Duration,
  FontFamily,
  FontSize,
  FontTracking,
  FontWeight,
  HexColor,
  Length,
  LineHeight,
  Pct,
  Px,
  Rem,
  Sp,
  Ui,
} from "@internal/prelude";

export enum CssProperties {
  // === SHORTHAND PROPERTIES (Short Form) ===
  All = "all",
  Animation = "animation",
  Background = "background",
  Border = "border",
  BorderBlock = "border-block",
  BorderBottom = "border-bottom",
  BorderColor = "border-color",
  BorderImage = "border-image",
  BorderInline = "border-inline",
  BorderLeft = "border-left",
  Radius = "border-radius",
  BorderRight = "border-right",
  BorderStyle = "border-style",
  BorderTop = "border-top",
  BorderWidth = "border-width",
  ColumnRule = "column-rule",
  Columns = "columns",
  ContainIntrinsicSize = "contain-intrinsic-size",
  Container = "container",
  Flex = "flex",
  FlexFlow = "flex-flow",
  Font = "font",
  Gap = "gap",
  Grid = "grid",
  GridArea = "grid-area",
  GridColumn = "grid-column",
  GridRow = "grid-row",
  GridTemplate = "grid-template",
  Inset = "inset",
  InsetBlock = "inset-block",
  InsetInline = "inset-inline",
  ListStyle = "list-style",
  Margin = "margin",
  MarginBlock = "margin-block",
  MarginInline = "margin-inline",
  Mask = "mask",
  MaskBorder = "mask-border",
  Offset = "offset",
  Outline = "outline",
  Overflow = "overflow",
  OverscrollBehavior = "overscroll-behavior",
  Padding = "padding",
  PaddingBlock = "padding-block",
  PaddingInline = "padding-inline",
  PlaceContent = "place-content",
  PlaceItems = "place-items",
  PlaceSelf = "place-self",
  ScrollMargin = "scroll-margin",
  ScrollMarginBlock = "scroll-margin-block",
  ScrollMarginInline = "scroll-margin-inline",
  ScrollPadding = "scroll-padding",
  ScrollPaddingBlock = "scroll-padding-block",
  ScrollPaddingInline = "scroll-padding-inline",
  ScrollTimeline = "scroll-timeline",
  TextDecoration = "text-decoration",
  TextEmphasis = "text-emphasis",
  Transition = "transition",

  // === LONGHAND PROPERTIES (Full Form) ===
  AccentColor = "accent-color",
  AlignContent = "align-content",
  AlignItems = "align-items",
  AlignSelf = "align-self",
  AnimationDelay = "animation-delay",
  AnimationDirection = "animation-direction",
  AnimationDuration = "animation-duration",
  AnimationFillMode = "animation-fill-mode",
  AnimationIterationCount = "animation-iteration-count",
  AnimationName = "animation-name",
  AnimationPlayState = "animation-play-state",
  AnimationTimingFunction = "animation-timing-function",
  Appearance = "appearance",
  AspectRatio = "aspect-ratio",
  BackdropFilter = "backdrop-filter",
  BackfaceVisibility = "backface-visibility",
  BackgroundAttachment = "background-attachment",
  BackgroundBlendMode = "background-blend-mode",
  BackgroundClip = "background-clip",
  BackgroundColor = "background-color",
  BackgroundImage = "background-image",
  BackgroundOrigin = "background-origin",
  BackgroundPosition = "background-position",
  BackgroundPositionX = "background-position-x",
  BackgroundPositionY = "background-position-y",
  BackgroundRepeat = "background-repeat",
  BackgroundSize = "background-size",
  BlockSize = "block-size",
  BorderCollapse = "border-collapse",
  Bottom = "bottom",
  BoxShadow = "box-shadow",
  BoxSizing = "box-sizing",
  BreakAfter = "break-after",
  BreakBefore = "break-before",
  BreakInside = "break-inside",
  CaptionSide = "caption-side",
  CaretColor = "caret-color",
  Clear = "clear",
  ClipPath = "clip-path",
  Color = "color",
  ColorScheme = "color-scheme",
  ColumnCount = "column-count",
  ColumnFill = "column-fill",
  ColumnGap = "column-gap",
  ColumnSpan = "column-span",
  ColumnWidth = "column-width",
  Content = "content",
  ContentVisibility = "content-visibility",
  CounterIncrement = "counter-increment",
  CounterReset = "counter-reset",
  CounterSet = "counter-set",
  Cursor = "cursor",
  Direction = "direction",
  Display = "display",
  EmptyCells = "empty-cells",
  Filter = "filter",
  FlexBasis = "flex-basis",
  FlexDirection = "flex-direction",
  FlexGrow = "flex-grow",
  FlexShrink = "flex-shrink",
  FlexWrap = "flex-wrap",
  Float = "float",
  FontFamily = "font-family",
  FontKerning = "font-kerning",
  FontSize = "font-size",
  FontSizeAdjust = "font-size-adjust",
  FontStretch = "font-stretch",
  FontStyle = "font-style",
  FontVariant = "font-variant",
  FontWeight = "font-weight",
  GridAutoColumns = "grid-auto-columns",
  GridAutoFlow = "grid-auto-flow",
  GridAutoRows = "grid-auto-rows",
  GridColumnEnd = "grid-column-end",
  GridColumnStart = "grid-column-start",
  GridRowEnd = "grid-row-end",
  GridRowStart = "grid-row-start",
  GridTemplateAreas = "grid-template-areas",
  GridTemplateColumns = "grid-template-columns",
  GridTemplateRows = "grid-template-rows",
  Height = "height",
  Hyphens = "hyphens",
  ImageRendering = "image-rendering",
  InlineSize = "inline-size",
  Isolation = "isolation",
  JustifyContent = "justify-content",
  JustifyItems = "justify-items",
  JustifySelf = "justify-self",
  Left = "left",
  LetterSpacing = "letter-spacing",
  LineHeight = "line-height",
  ListStyleImage = "list-style-image",
  ListStylePosition = "list-style-position",
  ListStyleType = "list-style-type",
  MarginBottom = "margin-bottom",
  MarginLeft = "margin-left",
  MarginRight = "margin-right",
  MarginTop = "margin-top",
  MaxBlockSize = "max-block-size",
  MaxHeight = "max-height",
  MaxInlineSize = "max-inline-size",
  MaxWidth = "max-width",
  MinBlockSize = "min-block-size",
  MinHeight = "min-height",
  MinInlineSize = "min-inline-size",
  MinWidth = "min-width",
  MixBlendMode = "mix-blend-mode",
  ObjectFit = "object-fit",
  ObjectPosition = "object-position",
  Opacity = "opacity",
  Order = "order",
  Orphans = "orphans",
  OutlineColor = "outline-color",
  OutlineOffset = "outline-offset",
  OutlineStyle = "outline-style",
  OutlineWidth = "outline-width",
  OverflowWrap = "overflow-wrap",
  OverflowX = "overflow-x",
  OverflowY = "overflow-y",
  OverscrollBehaviorX = "overscroll-behavior-x",
  OverscrollBehaviorY = "overscroll-behavior-y",
  PaddingBottom = "padding-bottom",
  PaddingLeft = "padding-left",
  PaddingRight = "padding-right",
  PaddingTop = "padding-top",
  PageBreakAfter = "page-break-after",
  PageBreakBefore = "page-break-before",
  PageBreakInside = "page-break-inside",
  Perspective = "perspective",
  PerspectiveOrigin = "perspective-origin",
  PointerEvents = "pointer-events",
  Position = "position",
  Quotes = "quotes",
  Resize = "resize",
  Right = "right",
  RowGap = "row-gap",
  ScrollBehavior = "scroll-behavior",
  ScrollSnapAlign = "scroll-snap-align",
  ScrollSnapStop = "scroll-snap-stop",
  ScrollSnapType = "scroll-snap-type",
  Speak = "speak",
  TabSize = "tab-size",
  TableLayout = "table-layout",
  TextAlign = "text-align",
  TextAlignLast = "text-align-last",
  TextDecorationColor = "text-decoration-color",
  TextDecorationLine = "text-decoration-line",
  TextDecorationStyle = "text-decoration-style",
  TextDecorationThickness = "text-decoration-thickness",
  TextIndent = "text-indent",
  TextOverflow = "text-overflow",
  TextShadow = "text-shadow",
  TextTransform = "text-transform",
  TextUnderlineOffset = "text-underline-offset",
  TextUnderlinePosition = "text-underline-position",
  Top = "top",
  TouchAction = "touch-action",
  Transform = "transform",
  TransformOrigin = "transform-origin",
  TransformStyle = "transform-style",
  TransitionDelay = "transition-delay",
  TransitionDuration = "transition-duration",
  TransitionProperty = "transition-property",
  TransitionTimingFunction = "transition-timing-function",
  UnicodeBidi = "unicode-bidi",
  UserSelect = "user-select",
  VerticalAlign = "vertical-align",
  Visibility = "visibility",
  WhiteSpace = "white-space",
  Widows = "widows",
  Width = "width",
  WordBreak = "word-break",
  WordSpacing = "word-spacing",
  WordWrap = "word-wrap",
  WritingMode = "writing-mode",
  ZIndex = "z-index",
}


// ==========================================
// PLACEHOLDER TYPES (Implement these later)
// ==========================================
type ClearValue = any;
type ClipPathValue = any;
type ColorSchemeValue = any;
type ColorValue = any;
type ContentValue = any;
type ContentVisibilityValue = any;
type CounterValue = any;
type CursorValue = any;
type DirectionValue = any;
type DisplayValue = any;
type EmptyCellsValue = any;
type FilterValue = any;
type FlexBasisValue = any;
type FlexDirectionValue = any;
type FlexGrowValue = any;
type FlexShrinkValue = any;
type FlexWrapValue = any;
type FloatValue = any;
type FontStyleValue = any;
type FontVariantValue = any;
type FontWeightValue = any;
type GenericValue = any; // Fallback for complex 'all' shorthand structures
type GridAutoFlowValue = any;
type ImageRenderingValue = any;
type IsolationValue = any;
type JustifyContentValue = any;
type JustifyItemsValue = any;
type JustifySelfValue = any;
type LengthPercentage = any; // Matches <length-percentage> from spec
type LengthValue = any; // Matches <length> from spec
type LineWidth = any; // Matches <line-width> from spec (thin, medium, thick, length)
type ListStyleImageValue = any;
type ListStylePositionValue = any;
type ListStyleTypeValue = any;
type MixBlendModeValue = any;
type NumberValue = any; // Matches <number> from spec
type ObjectFitValue = any;
type ObjectPositionValue = any;
type OpacityValue = any;
type OutlineStyleValue = any;
type OverflowWrapValue = any;
type OverflowValue = any;
type OverscrollBehaviorValue = any;
type PageBreakValue = any;
type PerspectiveOriginValue = any;
type PointerEventsValue = any;
type PositionValue = any;
type QuotesValue = any;
type ResizeValue = any;
type ScrollBehaviorValue = any;
type ScrollSnapAlignValue = any;
type ScrollSnapStopValue = any;
type ScrollSnapTypeValue = any;
type SpeakValue = any;
type TableLayoutValue = any;
type TextAlignLastValue = any;
type TextAlignValue = any;
type TextDecorationLineValue = any;
type TextDecorationStyleValue = any;
type TextIndentValue = any;
type TextOverflowValue = any;
type TextShadowValue = any;
type TextTransformValue = any;
type TextUnderlineOffsetValue = any;
type TextUnderlinePositionValue = any;
type TimeValue = any; // Matches <time> from spec (s, ms)
type TouchActionValue = any;
type TransformStyleValue = any;
type TransformValue = any;
type UnicodeBidiValue = any;
type UserSelectValue = any;
type VerticalAlignValue = any;
type VisibilityValue = any;
type WhiteSpaceValue = any;
type WritingModeValue = any;

// Shorthand Combined Types
type AnimationShorthand = any;
type BackgroundShorthand = any;
type BorderBlockShorthand = any;
type BorderImageShorthand = any;
type BorderInlineShorthand = any;
type BorderShorthand = any;
type ColumnRuleShorthand = any;
type ColumnsShorthand = any;
type ContainerShorthand = any;
type FlexFlowShorthand = any;
type FlexShorthand = any;
type FontShorthand = any;
type GapShorthand = any;
type GridAreaShorthand = any;
type GridShorthand = any;
type GridTemplateShorthand = any;
type InsetBlockShorthand = any;
type InsetInlineShorthand = any;
type InsetShorthand = any;
type ListStyleShorthand = any;
type MarginBlockShorthand = any;
type MarginInlineShorthand = any;
type MarginShorthand = any;
type MaskBorderShorthand = any;
type MaskShorthand = any;
type OffsetShorthand = any;
type OutlineShorthand = any;
type PaddingBlockShorthand = any;
type PaddingInlineShorthand = any;
type PaddingShorthand = any;
type PlaceContentShorthand = any;
type PlaceItemsShorthand = any;
type PlaceSelfShorthand = any;
type ScrollMarginBlockShorthand = any;
type ScrollMarginInlineShorthand = any;
type ScrollMarginShorthand = any;
type ScrollPaddingBlockShorthand = any;
type ScrollPaddingInlineShorthand = any;
type ScrollPaddingShorthand = any;
type ScrollTimelineShorthand = any;
type TextDecorationShorthand = any;
type TextEmphasisShorthand = any;
type TrackBreadth = any; // Matches <track-breadth> for grid items
type TransitionShorthand = any;

// ==========================================
// CLASS IMPLEMENTATION
// ==========================================
export class StyleBlock {
  private styles: Map<CssProperties, any> = new Map();

  // Helper to store values internally
  private setStyle(property: CssProperties, value: any): this {
    this.styles.set(property, value);
    return this;
  }

  // === SHORTHAND PROPERTIES ===
  public setAll(value: GenericValue): this { return this.setStyle(CssProperties.All, value); }
  public setAnimation(value: AnimationShorthand): this { return this.setStyle(CssProperties.Animation, value); }
  public setBackground(value: BackgroundShorthand): this { return this.setStyle(CssProperties.Background, value); }
  public setBorder(value: BorderShorthand): this { return this.setStyle(CssProperties.Border, value); }
  public setBorderBlock(value: BorderBlockShorthand): this { return this.setStyle(CssProperties.BorderBlock, value); }
  public setBorderBottom(value: BorderShorthand): this { return this.setStyle(CssProperties.BorderBottom, value); }
  public setBorderColor(value: ColorValue | ColorValue[]): this { return this.setStyle(CssProperties.BorderColor, value); }
  public setBorderImage(value: BorderImageShorthand): this { return this.setStyle(CssProperties.BorderImage, value); }
  public setBorderInline(value: BorderInlineShorthand): this { return this.setStyle(CssProperties.BorderInline, value); }
  public setBorderLeft(value: BorderShorthand): this { return this.setStyle(CssProperties.BorderLeft, value); }
  public setRadius(value: LengthPercentage | LengthPercentage[]): this { return this.setStyle(CssProperties.Radius, value); }
  public setBorderRight(value: BorderShorthand): this { return this.setStyle(CssProperties.BorderRight, value); }
  public setBorderStyle(value: OutlineStyleValue | OutlineStyleValue[]): this { return this.setStyle(CssProperties.BorderStyle, value); }
  public setBorderTop(value: BorderShorthand): this { return this.setStyle(CssProperties.BorderTop, value); }
  public setBorderWidth(value: LineWidth | LineWidth[]): this { return this.setStyle(CssProperties.BorderWidth, value); }
  public setColumnRule(value: ColumnRuleShorthand): this { return this.setStyle(CssProperties.ColumnRule, value); }
  public setColumns(value: ColumnsShorthand): this { return this.setStyle(CssProperties.Columns, value); }
  public setContainIntrinsicSize(value: any): this { return this.setStyle(CssProperties.ContainIntrinsicSize, value); }
  public setContainer(value: ContainerShorthand): this { return this.setStyle(CssProperties.Container, value); }
  public setFlex(value: FlexShorthand): this { return this.setStyle(CssProperties.Flex, value); }
  public setFlexFlow(value: FlexFlowShorthand): this { return this.setStyle(CssProperties.FlexFlow, value); }
  public setFont(value: FontShorthand): this { return this.setStyle(CssProperties.Font, value); }
  public setGap(value: GapShorthand): this { return this.setStyle(CssProperties.Gap, value); }
  public setGrid(value: GridShorthand): this { return this.setStyle(CssProperties.Grid, value); }
  public setGridArea(value: GridAreaShorthand): this { return this.setStyle(CssProperties.GridArea, value); }
  public setGridColumn(value: any): this { return this.setStyle(CssProperties.GridColumn, value); }
  public setGridRow(value: any): this { return this.setStyle(CssProperties.GridRow, value); }
  public setGridTemplate(value: GridTemplateShorthand): this { return this.setStyle(CssProperties.GridTemplate, value); }
  public setInset(value: InsetShorthand): this { return this.setStyle(CssProperties.Inset, value); }
  public setInsetBlock(value: InsetBlockShorthand): this { return this.setStyle(CssProperties.InsetBlock, value); }
  public setInsetInline(value: InsetInlineShorthand): this { return this.setStyle(CssProperties.InsetInline, value); }
  public setListStyle(value: ListStyleShorthand): this { return this.setStyle(CssProperties.ListStyle, value); }
  public setMargin(value: MarginShorthand): this { return this.setStyle(CssProperties.Margin, value); }
  public setMarginBlock(value: MarginBlockShorthand): this { return this.setStyle(CssProperties.MarginBlock, value); }
  public setMarginInline(value: MarginInlineShorthand): this { return this.setStyle(CssProperties.MarginInline, value); }
  public setMask(value: MaskShorthand): this { return this.setStyle(CssProperties.Mask, value); }
  public setMaskBorder(value: MaskBorderShorthand): this { return this.setStyle(CssProperties.MaskBorder, value); }
  public setOffset(value: OffsetShorthand): this { return this.setStyle(CssProperties.Offset, value); }
  public setOutline(value: OutlineShorthand): this { return this.setStyle(CssProperties.Outline, value); }
  public setOverflow(value: OverflowValue | OverflowValue[]): this { return this.setStyle(CssProperties.Overflow, value); }
  public setOverscrollBehavior(value: OverscrollBehaviorValue | OverscrollBehaviorValue[]): this { return this.setStyle(CssProperties.OverscrollBehavior, value); }
  public setPadding(value: PaddingShorthand): this { return this.setStyle(CssProperties.Padding, value); }
  public setPaddingBlock(value: PaddingBlockShorthand): this { return this.setStyle(CssProperties.PaddingBlock, value); }
  public setPaddingInline(value: PaddingInlineShorthand): this { return this.setStyle(CssProperties.PaddingInline, value); }
  public setPlaceContent(value: PlaceContentShorthand): this { return this.setStyle(CssProperties.PlaceContent, value); }
  public setPlaceItems(value: PlaceItemsShorthand): this { return this.setStyle(CssProperties.PlaceItems, value); }
  public setPlaceSelf(value: PlaceSelfShorthand): this { return this.setStyle(CssProperties.PlaceSelf, value); }
  public setScrollMargin(value: ScrollMarginShorthand): this { return this.setStyle(CssProperties.ScrollMargin, value); }
}

// // ============ CSS Value Converters ============
// class CssValueConverter {
//   static toCssValue(value: any): string {
//     if (value?.toString) return value.toString();
//     return String(value);
//   }

//   static toAst(value: any): csstree.CssNode {
//     const cssString = this.toCssValue(value);
//     return csstree.parse(cssString, { context: 'value' });
//   }
// }

// // ============ Declaration Builder ============
// export class DeclarationBlock {
//   private declarations: Map<string, csstree.Declaration> = new Map();

//   private setProperty(property: string, value: any): this {
//     const valueAst = CssValueConverter.toAst(value);
    
//     this.declarations.set(property, {
//       type: 'Declaration',
//       property: property,
//       value: valueAst,
//       important: false,
//     });
    
//     return this;
//   }

//   // ============ Layout Properties ============
//   setWidth(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('width', value);
//   }

//   setHeight(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('height', value);
//   }

//   setMinWidth(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('min-width', value);
//   }

//   setMaxWidth(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('max-width', value);
//   }

//   setMinHeight(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('min-height', value);
//   }

//   setMaxHeight(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('max-height', value);
//   }

//   // ============ Spacing Properties ============
//   setMargin(value: Length | Dp | Px | Rem | Sp | Pct): this;
//   setMargin(top: Length | Dp | Px | Rem | Sp | Pct, right: Length | Dp | Px | Rem | Sp | Pct, bottom?: Length | Dp | Px | Rem | Sp | Pct, left?: Length | Dp | Px | Rem | Sp | Pct): this;
//   setMargin(...args: any[]): this {
//     if (args.length === 1) {
//       return this.setProperty('margin', args[0]);
//     }
//     const value = `${CssValueConverter.toCssValue(args[0])} ${CssValueConverter.toCssValue(args[1])} ${CssValueConverter.toCssValue(args[2] || args[0])} ${CssValueConverter.toCssValue(args[3] || args[1])}`;
//     return this.setProperty('margin', value);
//   }

//   setPadding(value: Length | Dp | Px | Rem | Sp | Pct): this;
//   setPadding(top: Length | Dp | Px | Rem | Sp | Pct, right: Length | Dp | Px | Rem | Sp | Pct, bottom?: Length | Dp | Px | Rem | Sp | Pct, left?: Length | Dp | Px | Rem | Sp | Pct): this;
//   setPadding(...args: any[]): this {
//     if (args.length === 1) {
//       return this.setProperty('padding', args[0]);
//     }
//     const value = `${CssValueConverter.toCssValue(args[0])} ${CssValueConverter.toCssValue(args[1])} ${CssValueConverter.toCssValue(args[2] || args[0])} ${CssValueConverter.toCssValue(args[3] || args[1])}`;
//     return this.setProperty('padding', value);
//   }

//   setGap(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('gap', value);
//   }

//   // ============ Color Properties ============
//   setColor(value: Color | HexColor): this {
//     return this.setProperty('color', value);
//   }

//   setBackgroundColor(value: Color | HexColor): this {
//     return this.setProperty('background-color', value);
//   }

//   setBorderColor(value: Color | HexColor): this {
//     return this.setProperty('border-color', value);
//   }

//   setOpacity(value: Ui): this {
//     return this.setProperty('opacity', value);
//   }

//   // ============ Typography Properties ============
//   setFontFamily(value: FontFamily): this {
//     return this.setProperty('font-family', value);
//   }

//   setFontSize(value: FontSize): this {
//     return this.setProperty('font-size', value);
//   }

//   setFontWeight(value: FontWeight): this {
//     return this.setProperty('font-weight', value);
//   }

//   setLetterSpacing(value: FontTracking): this {
//     return this.setProperty('letter-spacing', value);
//   }

//   setLineHeight(value: LineHeight): this {
//     return this.setProperty('line-height', value);
//   }

//   setTextAlign(value: 'left' | 'center' | 'right' | 'justify'): this {
//     return this.setProperty('text-align', value);
//   }

//   setTextDecoration(value: 'none' | 'underline' | 'overline' | 'line-through'): this {
//     return this.setProperty('text-decoration', value);
//   }

//   // ============ Border Properties ============
//   setBorderWidth(value: Dp | Px): this {
//     return this.setProperty('border-width', value);
//   }

//   setBorderStyle(value: 'solid' | 'dashed' | 'dotted' | 'none'): this {
//     return this.setProperty('border-style', value);
//   }

//   setBorderRadius(value: Dp | Px | Rem | Sp | Pct | AsymmetricCornerRadius): this {
//     if (value instanceof AsymmetricCornerRadius) {
//       const { tl, tr, br, bl } = value;
//       const cssValue = `${CssValueConverter.toCssValue(tl)} ${CssValueConverter.toCssValue(tr)} ${CssValueConverter.toCssValue(br)} ${CssValueConverter.toCssValue(bl)}`;
//       return this.setProperty('border-radius', cssValue);
//     }
//     return this.setProperty('border-radius', value);
//   }

//   // ============ Flexbox/Grid Properties ============
//   setDisplay(value: 'flex' | 'grid' | 'block' | 'inline-block' | 'inline-flex' | 'none'): this {
//     return this.setProperty('display', value);
//   }

//   setFlexDirection(value: 'row' | 'column' | 'row-reverse' | 'column-reverse'): this {
//     return this.setProperty('flex-direction', value);
//   }

//   setJustifyContent(value: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'): this {
//     return this.setProperty('justify-content', value);
//   }

//   setAlignItems(value: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'): this {
//     return this.setProperty('align-items', value);
//   }

//   setFlex(value: number): this {
//     return this.setProperty('flex', value);
//   }

//   setGridTemplateColumns(value: string): this {
//     return this.setProperty('grid-template-columns', value);
//   }

//   // ============ Position Properties ============
//   setPosition(value: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'): this {
//     return this.setProperty('position', value);
//   }

//   setTop(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('top', value);
//   }

//   setRight(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('right', value);
//   }

//   setBottom(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('bottom', value);
//   }

//   setLeft(value: Length | Dp | Px | Rem | Sp | Pct): this {
//     return this.setProperty('left', value);
//   }

//   // ============ Shadow Properties ============
//   setBoxShadow(x: Dp, y: Dp, blur: Dp, spread: Dp, color: Color | HexColor, inset?: boolean): this {
//     const insetStr = inset ? 'inset ' : '';
//     const value = `${insetStr}${CssValueConverter.toCssValue(x)} ${CssValueConverter.toCssValue(y)} ${CssValueConverter.toCssValue(blur)} ${CssValueConverter.toCssValue(spread)} ${CssValueConverter.toCssValue(color)}`;
//     return this.setProperty('box-shadow', value);
//   }

//   // ============ Transition/Animation Properties ============
//   setTransitionProperty(value: string): this {
//     return this.setProperty('transition-property', value);
//   }

//   setTransitionDuration(value: Duration): this {
//     return this.setProperty('transition-duration', value);
//   }

//   setTransitionTimingFunction(value: CubicBezier): this {
//     return this.setProperty('transition-timing-function', value);
//   }

//   setTransition(value: string): this {
//     return this.setProperty('transition', value);
//   }

//   // ============ Backdrop/Filter Properties ============
//   setBackdropFilter(value: string): this {
//     return this.setProperty('backdrop-filter', value);
//   }

//   setFilter(value: string): this {
//     return this.setProperty('filter', value);
//   }

//   // ============ Overflow Properties ============
//   setOverflow(value: 'visible' | 'hidden' | 'scroll' | 'auto'): this {
//     return this.setProperty('overflow', value);
//   }

//   setOverflowX(value: 'visible' | 'hidden' | 'scroll' | 'auto'): this {
//     return this.setProperty('overflow-x', value);
//   }

//   setOverflowY(value: 'visible' | 'hidden' | 'scroll' | 'auto'): this {
//     return this.setProperty('overflow-y', value);
//   }

//   // ============ Z-Index ============
//   setZIndex(value: Int): this {
//     return this.setProperty('z-index', value);
//   }

//   // ============ Cursor ============
//   setCursor(value: 'pointer' | 'default' | 'text' | 'move' | 'not-allowed' | 'wait' | 'grab'): this {
//     return this.setProperty('cursor', value);
//   }

//   // ============ Pointer Events ============
//   setPointerEvents(value: 'auto' | 'none'): this {
//     return this.setProperty('pointer-events', value);
//   }

//   // ============ User Select ============
//   setUserSelect(value: 'none' | 'auto' | 'text' | 'all'): this {
//     return this.setProperty('user-select', value);
//   }

//   // ============ Raw Property (escape hatch) ============
//   setRaw(property: string, value: string): this {
//     const valueAst = csstree.parse(value, { context: 'value' });
//     this.declarations.set(property, {
//       type: 'Declaration',
//       property: property,
//       value: valueAst,
//       important: false,
//     });
//     return this;
//   }

//   // ============ Optimization Methods ============
//   optimize(): this {
//     for (const [property, declaration] of this.declarations) {
//       const match = csstree.lexer.matchProperty(property, declaration.value);
      
//       if (match.error) {
//         console.warn(`Invalid CSS value for ${property}: ${match.error.message}`);
//       }
      
//       // Example optimization: collapse shorthand properties
//       if (property === 'margin' && this.canCollapseMargin(declaration.value)) {
//         this.collapseMargin(declaration);
//       }
//     }
//     return this;
//   }

//   private canCollapseMargin(value: csstree.CssNode): boolean {
//     // Implementation depends on your optimization rules
//     return false;
//   }

//   private collapseMargin(declaration: csstree.Declaration): void {
//     // Optimize margin/padding shorthands
//   }

//   // ============ AST Generation ============
//   toAst(): csstree.Declaration[] {
//     return Array.from(this.declarations.values());
//   }

//   toString(): string {
//     const declarations = this.toAst();
//     if (declarations.length === 0) return '';
    
//     return declarations
//       .map(decl => csstree.generate(decl))
//       .join('\n');
//   }
// }

// // ============ Rule Builder ============
// export class CssRule {
//   private selectors: string[] = [];
//   private declarations: DeclarationBlock = new DeclarationBlock();

//   constructor(selector: string) {
//     this.selectors = [selector];
//   }

//   addSelector(selector: string): this {
//     this.selectors.push(selector);
//     return this;
//   }

//   get style(): DeclarationBlock {
//     return this.declarations;
//   }

//   toAst(): csstree.Rule {
//     const selectorAst = csstree.parse(this.selectors.join(', '), { context: 'selector' });
    
//     return {
//       type: 'Rule',
//       prelude: selectorAst as csstree.SelectorList,
//       block: {
//         type: 'Block',
//         children: csstree.List.fromArray(this.declarations.toAst()),
//       },
//     };
//   }

//   toString(): string {
//     return csstree.generate(this.toAst());
//   }
// }

// // ============ Stylesheet Builder ============
// export class CssStylesheet {
//   private rules: csstree.Rule[] = [];

//   addRule(rule: CssRule): this {
//     this.rules.push(rule.toAst());
//     return this;
//   }

//   addRaw(rule: csstree.Rule): this {
//     this.rules.push(rule);
//     return this;
//   }

//   toAst(): csstree.StyleSheet {
//     return {
//       type: 'StyleSheet',
//       children: csstree.List.fromArray(this.rules),
//     };
//   }

//   toString(): string {
//     return csstree.generate(this.toAst());
//   }

//   // Optimization passes
//   optimize(): this {
//     // Walk the AST and apply optimizations
//     const ast = this.toAst();
//     csstree.walk(ast, {
//       visit: 'Rule',
//       enter: (node) => {
//         // Remove duplicate declarations, merge rules, etc.
//       },
//     });
//     return this;
//   }
// }

// // ============ Usage Example ============
// /*
// import { HexColor, Dp, Sp, Rem, Px } from "@internal/prelude";

// const button = new CssRule('.button');
// button.style
//   .setDisplay('flex')
//   .setPadding(new Sp(2), new Sp(4))
//   .setBackgroundColor(HexColor.fromString('#3b82f6'))
//   .setColor(HexColor.fromString('#ffffff'))
//   .setBorderRadius(new Dp(8))
//   .setTransitionDuration(Duration.fromMs(200))
//   .setCursor('pointer');

// const stylesheet = new CssStylesheet();
// stylesheet.addRule(button);

// console.log(stylesheet.toString());
// */