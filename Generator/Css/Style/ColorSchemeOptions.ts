import { ColorSchemeVars } from "@internal/css";

export interface ColorSchemeOptions {
  readonly vars: ColorSchemeVars,
  readonly includeLight: boolean,
  readonly includeDark: boolean,
  readonly attribute: string,
  readonly atrributeLight: string,
  readonly attributeDark: string,
}