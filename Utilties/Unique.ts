const BRAND = Symbol();
const TYPE = Symbol()


export type Unique<Id extends symbol, Name extends string, Value> = 
  Value
  & { readonly [BRAND]: "Unique" }
  & { readonly [TYPE]: Value }
  & { readonly [Key in Id]: Name }
;
