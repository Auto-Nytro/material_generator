import { Var } from "./Var.ts";
import { Opacity } from "@internal/prelude"

const _Dragged = null as unknown as Var<Opacity>;
const _Pressed = null as unknown as Var<Opacity>;
const _Hovered = null as unknown as Var<Opacity>;
const _Focused = null as unknown as Var<Opacity>;
const _Disabled = null as unknown as Var<Opacity>;

export const Dragged = () => _Dragged;
export const Pressed = () => _Pressed;
export const Hovered = () => _Hovered;
export const Focused = () => _Focused;
export const Disabled = () => _Disabled;