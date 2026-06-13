import { Color, CornerRadius, Elevation, FontWeight, Length, MaybeVar, Opacity, ShapeRadii, Spring, TextStyle } from "@internal/prelude";

export class Stylesheet {
  forEntity(cssClass: string): Style { return new Style(); }
  forSelector(selector: string): Style { return new Style(); }
}

export class Style {
  /** ----------------
   *  DISPLAY
   *  ----------------
   */
  block(): Style {
    return this;
  }
  inlineBlock(): Style {
    return this;
  }
  inline(): Style {
    return this;
  }
  flex(): Style {
    return this;
  }
  inlineFlex(): Style {
    return this;
  }
  grid(): Style {
    return this;
  }
  inlineGrid(): Style {
    return this;
  }
  contents(): Style {
    return this;
  }
  hidden(): Style {
    return this;
  }
  flowRoot(): Style {
    return this;
  }

  /** ----------------
   *   POSITION
   *  ----------------
   */
  static(): Style {
    return this;
  }
  fixed(): Style {
    return this;
  }
  absolute(): Style {
    return this;
  }
  relative(): Style {
    return this;
  }
  sticky(): Style {
    return this;
  }

  /** ----------------
   *  PLACEMENT
   *  ----------------
   */
  top(value: unknown): Style { 
    return this;
  } 
  right(value: unknown): Style { 
    return this;
  } 
  bottom(value: unknown): Style { 
    return this;
  } 
  left(value: unknown): Style { 
    return this;
  } 
  inset(value: unknown): Style { 
    return this;
  } 

  /** ----------------
   *  WIDTH / HEIGHT
   *  ----------------
   */
  w(value: MaybeVar<Length>): Style {
    return this;
  }
  wFull(): Style {
    return this;
  }
  wScreen(): Style {
    return this;
  }
  h(value: MaybeVar<Length>): Style {
    return this;
  }
  hFull(): Style {
    return this;
  }
  hScreen(): Style {
    return this;
  }
  maxW(value: MaybeVar<Length>): Style {
    return this;
  }
  maxWFull(): Style {
    return this;
  }
  maxWScreen(): Style {
    return this;
  }
  maxH(value: MaybeVar<Length>): Style {
    return this;
  }
  maxHFull(): Style {
    return this;
  }
  maxHScreen(): Style {
    return this;
  }
  minW(value: MaybeVar<Length>): Style {
    return this;
  }
  minWFull(): Style {
    return this;
  }
  minWScreen(): Style {
    return this;
  }
  minH(value: MaybeVar<Length>): Style {
    return this;
  }
  minHFull(): Style {
    return this;
  }
  minHScreen(): Style {
    return this;
  }
  size(value: MaybeVar<Length>): Style {
    return this;
  }
  sizeFull(): Style {
    return this;
  }
  sizeScreen(): Style {
    return this;
  }

  /** ----------------
   *  PADDING
   *  ----------------
   */
  p(value: MaybeVar<Length>): Style {
    return this;
  }
  px(value: MaybeVar<Length>): Style {
    return this;
  }
  py(value: MaybeVar<Length>): Style {
    return this;
  }
  pt(value: MaybeVar<Length>): Style {
    return this;
  }
  pr(value: MaybeVar<Length>): Style {
    return this;
  }
  pb(value: MaybeVar<Length>): Style {
    return this;
  }
  pl(value: MaybeVar<Length>): Style {
    return this;
  }

  /** ----------------
   *  MARGIN
   *  ----------------
   */
  m(value: MaybeVar<Length>): Style {
    return this;
  }
  mX(value: MaybeVar<Length>): Style {
    return this;
  }
  mY(value: MaybeVar<Length>): Style {
    return this;
  }
  mT(value: MaybeVar<Length>): Style {
    return this;
  }
  mR(value: MaybeVar<Length>): Style {
    return this;
  }
  mB(value: MaybeVar<Length>): Style {
    return this;
  }
  mL(value: MaybeVar<Length>): Style {
    return this;
  }
  mAuto(): Style {
    return this;
  }
  mXAuto(): Style {
    return this;
  }
  mYAuto(): Style {
    return this;
  }
  mTAuto(): Style {
    return this;
  }
  mRAuto(): Style {
    return this;
  }
  mBAuto(): Style {
    return this;
  }
  mLAuto(): Style {
    return this;
  }

  /** ----------------
   *  GAP
   *  ----------------
   */
  gap(value: MaybeVar<Length>): Style {
    return this;
  }
  gapX(value: MaybeVar<Length>): Style {
    return this;
  }
  gapY(value: MaybeVar<Length>): Style {
    return this;
  }

  /** ----------------
   *  FLEX DIRECTION
   *  ----------------
   */
  flexRow(): Style {
    return this;
  }
  flexRowReverse(): Style {
    return this;
  }
  flexCol(): Style {
    return this;
  }
  flexColReverse(): Style {
    return this;
  }
  
  /** ----------------
   *  FLEX WRAP
   *  ----------------
   */
  flexWrap(): Style {
    return this;
  }
  flexWrapReverse(): Style {
    return this;
  }
  flexNowrap(): Style {
    return this;
  }

  /** ----------------
   *  ALIGNMENT
   *  ----------------
   */
  justifyStart(): Style {
    return this;
  }
  justifyCenter(): Style {
    return this;
  }
  justifyEnd(): Style {
    return this;
  }
  justifyBetween(): Style {
    return this;
  }

  itemsStart(): Style {
    return this;
  }
  itemsCenter(): Style {
    return this;
  }
  itemsEnd(): Style {
    return this;
  }
  itemsStretch(): Style {
    return this;
  }

  contentAround(): Style {
    return this;
  }
  contentBetween(): Style {
    return this;
  }
  contentCenter(): Style {
    return this;
  }
  contentEnd(): Style {
    return this;
  }
  contentEvenly(): Style {
    return this;
  }
  contentStart(): Style {
    return this;
  }

  justifyItemsAuto(): Style {
    return this;
  }
  justifyItemsCenter(): Style {
    return this;
  }
  justifyItemsEnd(): Style {
    return this;
  }
  justifyItemsStart(): Style {
    return this;
  }
  justifyItemsStretch(): Style {
    return this;
  }

  justifySelfAuto(): Style {
    return this;
  }
  justifySelfCenter(): Style {
    return this;
  }
  justifySelfEnd(): Style {
    return this;
  }
  justifySelfStart(): Style {
    return this;
  }
  justifySelfStretch(): Style {
    return this;
  }

  /** ----------------
   *  GRID TEMPLATE
   *  ----------------
   */
  gridCols(n: number): Style {
    return this;
  }
  gridRows(n: number): Style {
    return this;
  }
  colSpan(n: number | 'full' | 'auto'): Style {
    return this;
  }
  rowSpan(n: number | 'full' | 'auto'): Style {
    return this;
  }

  /** ----------------
   *   TYPOGRAPHY
   *  ----------------
   */
  textColor(value: MaybeVar<Color>): Style {
    return this;
  }

  textOpacity(value: MaybeVar<Opacity>): Style {
    return this;
  }

  fontSize(value: MaybeVar<Length>): Style {
    return this;
  }

  fontWeight(value: MaybeVar<FontWeight>): Style {
    return this;
  }

  textLeft(): Style {
    return this;
  }

  textCenter(): Style {
    return this;
  }
  
  textRight(): Style {
    return this;
  }

  textJustify(): Style {
    return this;
  }

  textStart(): Style {
    return this;
  }

  textEnd(): Style {
    return this;
  }

  textStyle(textStyle: MaybeVar<TextStyle>): Style { 
    return this; 
  }

  /** ----------------
   *  BACKGROUND
   *  ----------------
   */
  bgColor(value: MaybeVar<Color>): Style {
    return this;
  }

  bgOpacity(value: MaybeVar<Opacity>): Style {
    return this;
  }

  bgClipBorder(): Style {
    return this;
  }
  bgClipContent(): Style {
    return this;
  }
  bgClipPadding(): Style {
    return this;
  }
  bgClipText(): Style {
    return this;
  }

  bgAuto(): Style {
    return this;
  }
  bgCover(): Style {
    return this;
  }
  bgContain(): Style {
    return this;
  }

  bgBottom(): Style {
    return this;
  }
  bgTop(): Style {
    return this;
  }
  bgCenter(): Style {
    return this;
  }
  bgLeft(): Style {
    return this;
  }
  bgLeftBottom(): Style {
    return this;
  }
  bgLeftTop(): Style {
    return this;
  }
  bgRight(): Style {
    return this;
  }
  bgRightBottom(): Style {
    return this;
  }
  bgRightTop(): Style {
    return this;
  }

  bgFixed(): Style {
    return this;
  }
  bgLocal(): Style {
    return this;
  }
  bgScroll(): Style {
    return this;
  }

  bgNoRepeat(): Style {
    return this;
  }
  bgRepeat(): Style {
    return this;
  }
  bgRepeatX(): Style {
    return this;
  }
  bgRepeatY(): Style {
    return this;
  }
  bgRepeatRound(): Style {
    return this;
  }
  bgRepeatSpace(): Style {
    return this;
  }

  /** ----------------
   *  BORDER
   *  ----------------
   */
  borderColor(value: MaybeVar<Color>): Style {
    return this;
  }

  borderOpacity(value: MaybeVar<Opacity>): Style {
    return this;
  }

  borderWidth(value: MaybeVar<Length>): Style {
    return this;
  }

  borderSolid(): Style {
    return this;
  }
  borderDashed(): Style {
    return this;
  }
  borderDotted(): Style {
    return this;
  }
  borderDouble(): Style {
    return this;
  }
  borderNone(): Style {
    return this;
  }

  rounded(value: MaybeVar<ShapeRadii | CornerRadius>): Style {
    return this;
  }
  roundedT(value: MaybeVar<CornerRadius>): Style {
    return this;
  }
  roundedR(value: MaybeVar<CornerRadius>): Style {
    return this;
  }
  roundedB(value: MaybeVar<CornerRadius>): Style {
    return this;
  }
  roundedL(value: MaybeVar<CornerRadius>): Style {
    return this;
  }

  /** ----------------
   *  BOX
   *  ----------------
   */
  boxBorder(): Style {
    return this;
  }
  boxContent(): Style {
    return this;
  }

  /** ----------------
   *  CURSOR
   *  ----------------
   */
  cursorAuto(): Style {
    return this;
  }
  cursorDefault(): Style {
    return this;
  }
  cursorPointer(): Style {
    return this;
  }
  cursorWait(): Style {
    return this;
  }
  cursorText(): Style {
    return this;
  }
  cursorMove(): Style {
    return this;
  }
  cursorHelp(): Style {
    return this;
  }
  cursorNotAllowed(): Style {
    return this;
  }
  cursorNone(): Style {
    return this;
  }
  cursorContextMenu(): Style {
    return this;
  }
  cursorProgress(): Style {
    return this;
  }
  cursorCell(): Style {
    return this;
  }
  cursorCrosshair(): Style {
    return this;
  }
  cursorVerticalText(): Style {
    return this;
  }
  cursorAlias(): Style {
    return this;
  }
  cursorCopy(): Style {
    return this;
  }
  cursorNoDrop(): Style {
    return this;
  }
  cursorGrab(): Style {
    return this;
  }
  cursorGrabbing(): Style {
    return this;
  }
  cursorAllScroll(): Style {
    return this;
  }
  cursorColResize(): Style {
    return this;
  }
  cursorRowResize(): Style {
    return this;
  }
  cursorNResize(): Style {
    return this;
  }
  cursorEResize(): Style {
    return this;
  }
  cursorSResize(): Style {
    return this;
  }
  cursorWResize(): Style {
    return this;
  }
  cursorNEResize(): Style {
    return this;
  }
  cursorNWResize(): Style {
    return this;
  }
  cursorSEResize(): Style {
    return this;
  }
  cursorSWResize(): Style {
    return this;
  }
  cursorEWResize(): Style {
    return this;
  }
  cursorNSResize(): Style {
    return this;
  }
  cursorNESWResize(): Style {
    return this;
  }
  cursorNWSESize(): Style {
    return this;
  }
  cursorZoomIn(): Style {
    return this;
  }
  cursorZoomOut(): Style {
    return this;
  }
  
  /** ----------------
   *  VISIBILITY
   *  ----------------
   */
  visible(): Style {
    return this;
  }
  invisible(): Style {
    return this;
  }
  collapse(): Style {
    return this;
  }

  /** ----------------
   *  OBJECT FIT
   *  ----------------
   */
  objectContain(): Style {
    return this;
  }
  objectCover(): Style {
    return this;
  }
  objectFill(): Style {
    return this;
  }
  objectNone(): Style {
    return this;
  }
  objectScaleDown(): Style {
    return this;
  }

  /** ----------------
   *  OBJECT POSITION
   *  ----------------
   */
  objectTopLeft(): Style {
    return this;
  }
  objectTop(): Style {
    return this;
  }
  objectTopRight(): Style {
    return this;
  }
  objectLeft(): Style {
    return this;
  }
  objectCenter(): Style {
    return this;
  }
  objectRight(): Style {
    return this;
  }
  objectBottomLeft(): Style {
    return this;
  }
  objectBottom(): Style {
    return this;
  }
  objectBottomRight(): Style {
    return this;
  }

  /** ----------------
   *  OVERFLOW
   *  ----------------
   */
  overflowAuto(): Style {
    return this;
  }
  overflowHidden(): Style {
    return this;
  }
  overflowClip(): Style {
    return this;
  }
  overflowVisible(): Style {
    return this;
  }
  overflowScroll(): Style {
    return this;
  }

  /** ----------------
   *  OVERFLOW X
   *  ----------------
   */
  overflowXAuto(): Style {
    return this;
  }
  overflowXHidden(): Style {
    return this;
  }
  overflowXClip(): Style {
    return this;
  }
  overflowXVisible(): Style {
    return this;
  }
  overflowXScroll(): Style {
    return this;
  }

  /** ----------------
   *  OVERFLOW Y
   *  ----------------
   */
  overflowYAuto(): Style {
    return this;
  }
  overflowYHidden(): Style {
    return this;
  }
  overflowYClip(): Style {
    return this;
  }
  overflowYVisible(): Style {
    return this;
  }
  overflowYScroll(): Style {
    return this;
  }

  /**
   * -----------------
   * UTILITIES
   * -----------------
   */
  shadowColor(value: MaybeVar<Color>): Style {
    return this; 
  }
  // shadowElevation(shadowColor: any, elevationLevel: any): Style { return this; }
  elevationLevel(elevationLevel: MaybeVar<Elevation>): Style { 
    return this; 
  }

  shape(value: MaybeVar<ShapeRadii>): Style { 
    return this; 
  }
  shapeMorphSpring(value: MaybeVar<Spring>): Style { 
    return this; 
  }

  iconSize(value: MaybeVar<Length>): Style { 
    return this; 
  }
  iconColor(value: MaybeVar<Color>): Style { 
    return this; 
  }
  iconOpacity(value: MaybeVar<Opacity>): Style {
    return this;
  }
  
  stateLayer(color: MaybeVar<Color>, opacity: MaybeVar<Opacity>): Style { 
    return this; 
  }
  stateLayerColor(value: MaybeVar<Color>): Style { 
    return this; 
  }
  stateLayerOpacity(value: MaybeVar<Opacity>): Style { 
    return this; 
  }


  extend(cssClass: string): Style { 
    return this; 
  }


  forHovered(): Style { 
    return new Style(); 
  }
  forFocused(): Style { 
    return new Style() 
  }
  forPressed(): Style { 
    return new Style(); 
  }
  forDisabled(): Style { 
    return new Style(); 
  }
  forModifier(modifier: string): Style { 
    return new Style(); 
  }
  forAncestor(ancestorModifier: string): Style { 
    return new Style(); 
  }
  forAncestorModifier(ancestorModifier: string): Style { 
    return new Style(); 
  }
  forAncestorEnumModifierValue(ancestorModifier: string, ancestorModifierValue: string): Style { 
    return new Style(); 
  }

  done(): Style {
    return this;
  }
  onHovered(styler: (style: Style) => void): Style { 
    return this; 
  }
  onFocused(styler: (style: Style) => void): Style { 
    return this; 
  }
  onPressed(styler: (style: Style) => void): Style { 
    return this; 
  }
  onDisabled(styler: (style: Style) => void): Style { 
    return this; 
  }
  onModifier(modifier: string, styler: (style: Style) => void): Style { 
    return this; 
  }

  onToggleModifier(
    modifier: string,
    stylers: {
      inactive?: (style: Style) => void
      active?: (style: Style) => void
    }
  ): Style { 
    return this; 
  }
  forToggleModifier(
    modifier: string,
  ): Style { 
    return this; 
  }

  onAncestorHovered(styler: (style: Style) => void): Style { 
    return this; 
  }
  onAncestorFocused(styler: (style: Style) => void): Style { 
    return this; 
  }
  onAncestorPressed(styler: (style: Style) => void): Style { 
    return this; 
  }
  onAncestorDisabled(styler: (style: Style) => void): Style { 
    return this; 
  }
  onAncestorModifier(modifier: string, styler: (style: Style) => void): Style { 
    return this; 
  }

  forToggeModifierActive(): Style {
    return this;
  }
  forToggeModifierInactive(): Style {
    return this;
  }
  onEnumModifierValue(
    modifier: string,
    modifierValue: string,
    styler: (style: Style) => void,
  ): Style { 
    return this; 
  }
  forEnumModifier(
    modifier: string,
    modifierValue: string,
  ): Style { 
    return this; 
  }
  onEnumModifierValues(
    modifier: string,
    stylers: Record<string, (style: Style) => void>,
  ): Style { 
    return this; 
  }

  onAncestor(
    ancestorClass: string, 
    styler: (style: Style) => void,
  ): Style {
    return this;
  }
  onAncestorToggleModifier(
    ancestorModifier: string,
    stylers: {
      inactive: (style: Style) => void
      active: (style: Style) => void
    }
  ): Style { 
    return this; 
  }
  onAncestorEnumModifier(
    ancestorModifier: string,
    stylers: Record<string, (style: Style) => void>,
  ): Style { 
    return this; 
  }
}