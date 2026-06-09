import { ColorPalette, isValue, Properties, Value, } from "@internal/prelude"
import * as Prelude from "@internal/prelude"

const encoder = new TextEncoder();

const isUpperLetter = (code: number) => {
  return code >= 65 && code <= 90;
};

const isLowerLetter = (code: number) => {
  return code >= 97 && code <= 122;
};

const toLowerLetter = (code: number) => {
  return isUpperLetter(code) 
    ? code + 32
    : code;
};

const toUpperLetter = (code: number) => {
  return isLowerLetter(code)
    ? code - 32
    : code;
};

// const toPascaleCase = (string: string) => {
//   const length = string.length;
//   const output: number[] = Array(length);
//   for (let index = 0; index < length; index += 1) {
//     output[index] = 
//   }
// };

const capitalize = (string: string) => {
  if (string.length === 0) {
    return string;
  }

  const code = string.charCodeAt(0);
  const upper = toUpperLetter(code);
  return String.fromCharCode(upper) + string.slice(1);
};

const joinDotted = (a: string, b: string) => {
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }
  return `${a}.${b}`;
};
const joinMerged = (a: string, b: string) => {
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }
  return `${a}${capitalize(b)}`;
};

const visitPropertyPathsPascaleCaseImpl = (
  propertiesPath: string,
  properties: Properties,
  visitor: (path: string) => void,
) => {
  for (const [name, value] of Object.entries(properties)) {
    const path = propertiesPath + capitalize(name);

    if (isValue(value)) {
      visitor(path);
    } else {
      visitPropertyPathsPascaleCaseImpl(path, value, visitor);
    }
  }
};

const visitPropertyPathsPascaleCase = (
  properties: Properties,
  visitor: (path: string) => void,
) => {
  visitPropertyPathsPascaleCaseImpl(
    "",
    properties,
    visitor,
  )
};

const visitPathsImpl = (
  mergedPath: string,
  dottedPath: string,
  properties: Properties,
  visitor: (
    mergedPath: string, 
    dottedPath: string, 
    value: Value | Properties,
  ) => void,
) => {
  for (const [name, value] of Object.entries(properties)) {
    const thisMergedPath = joinMerged(mergedPath, name);
    const thisDottedPath = joinDotted(dottedPath, name);

    if (isValue(value)) {
      visitor(thisMergedPath, thisDottedPath, value);
    } else {
      visitor(thisMergedPath, thisDottedPath, value);
      visitPathsImpl(
        thisMergedPath, 
        thisDottedPath,
        value,
        visitor,
      );
    }
  }
};

const visitPaths = (
  properties: Properties,
  visitor: (
    mergedPath: string, 
    dottedPath: string, 
  ) => void,
) => {
  visitPathsImpl("", "", properties, visitor);
};

const generatePropertiesReferences = (
  it: Properties, 
  sourceTypeName: string,
  referencesName: string,
  referencesPath: string,
) => {
  let output = "";
  output += `import { Reference, ${sourceTypeName} } from "@internal/prelude";`
  output += `\n\nexport const ${referencesName} = {`;
  visitPaths(
    it, 
    (mergedPath, dottedPath) => {
      output += `\n  ${mergedPath}: Reference.create(`;
      output += `\n    "${referencesPath}.${dottedPath}",`;
      output += `\n    (it: ${sourceTypeName}) => it.${dottedPath},`;
      output += `\n  ),`;
    }
  );
  output += `\n} as const;`;
  return output;
};

// class Buffer {
//   value = ""

//   write(slice: string) {
//     this.value += slice;
//   }
// }

// const visitPropertiesOrValuesImpl = (
//   path: string,
//   properties: Properties,
//   valueVisitor: (
//     path: string, 
//     name: string, 
//     value: Value,
//   ) => void,
//   propertiesVisitor: (
//     path: string, 
//     name: string, 
//     value: Properties,
//   ) => void,
// ) => {
//   for (const [name, value] of Object.entries(properties)) {
//     const thisPath = path + capitalize(name);

//     if (isValue(value)) {
//       valueVisitor(
//         thisPath, 
//         name, 
//         value,
//       );
//     } else {
//       propertiesVisitor(
//         thisPath, 
//         name, 
//         value,
//       );
//       visitPropertiesOrValuesImpl(
//         thisPath, 
//         value,
//         valueVisitor,
//         propertiesVisitor,
//       );
//     }
//   }
// };

// const visitPropertiesOrValues = (
//   properties: Properties,
//   valueVisitor: (
//     path: string,
//     name: string,
//     value: Value,
//   ) => void,
//   propertiesVisitor: (
//     path: string,
//     name: string,
//     properties: Properties,
//   ) => void,
// ) => {
//   visitPropertiesOrValuesImpl(
//     "", 
//     properties, 
//     valueVisitor,
//     propertiesVisitor,
//   );
// };

// class Importer {
//   import(thing: string) {

//   }
// }

// const generatePropertiesInterfaceImpl = (
//   importer: Importer,
//   properties: Properties,
//   // doesn't include the interface name
//   interfacePath: string,
//   interfaceName: string,
// ) => {
//   let output = "";
//   output += `export interface ${interfaceName} {`;

//   visitPropertiesOrValues(
//     properties,
//     (path, name, value) => {
//       // output += `  ${name}: ${}`;
//     },
//     (path, name, properties) => {

//     },
//   )
//   // for (const [name, property] of )
//   // for each property, write the name and type name.
//   // for each property, write the name and type name.
// };

// const generatePropertiesInterface = (
//   it: Properties, 
//   propertiesName: string,
//   interfaceName: string,
//   referencesPath: string,
// ) => {
//   let output = "";
//   output += `import { Reference, ${propertiesName} } from "@internal/prelude";`
//   output += `\n\nexport interface ${interfaceName} {`;
//   visitPaths(
//     it, 
//     (mergedPath, dottedPath) => {
//       output += `\n  ${mergedPath}: Reference.create(`;
//       output += `\n    "${referencesPath}.${dottedPath}",`;
//       output += `\n    () => ${propertiesName}.${dottedPath},`;
//       output += `\n  ),`;
//     }
//   );
//   output += `\n}`;
//   return output;
// };

const createFileAt = (path: string, content: string) => {
  Deno.writeTextFileSync("/home/lunynytro/Documents/material_ts/__gen/generated/material/" + path, content);
};

// createFileAt("references/Typeface.ts", generatePropertiesReferences(
//   Typeface.baseline(), 
//   "Typeface",
//   "TypefaceReferences",
//   "typeface",
// ));
// createFileAt("references/Typescale.ts", generatePropertiesReferences(
//   Typescale.baseline(),
//   "Typescale",
//   "TypescaleReferences",
//   "typescale",
// ));
// createFileAt("references/ColorPallete.ts", generatePropertiesReferences(
//   ColorPalette.baseline(),
//   "ColorPalette",
//   "ColorPaletteRef.Anyerences",
//   "ColorPalette",
// ));
// createFileAt("references/ColorScheme.ts", generatePropertiesReferences(
//   Prelude.ColorScheme.light(),
//   "ColorScheme",
//   "ColorSchemeReferences",
//   "ColorScheme",
// ));
// createFileAt("references/Springs.ts", generatePropertiesReferences(
//   Prelude.Springs.baseline(),
//   "Springs",
//   "SpringsReferences",
//   "Springs",
// ));
// createFileAt("references/Curves.ts", generatePropertiesReferences(
//   Prelude.Curves.baseline(),
//   "Curves",
//   "CurvesReferences",
//   "Curves",
// ));
// createFileAt("references/CornerRadii.ts", generatePropertiesReferences(
//   Prelude.CornerRadii.baseline(),
//   "CornerRadii",
//   "CornerRadiiReferences",
//   "CornerRadii",
// ));
// createFileAt("references/Shapes.ts", generatePropertiesReferences(
//   Prelude.Shapes.baseline(),
//   "Shapes",
//   "ShapesReferences",
//   "Shapes",
// ));
// createFileAt("references/Opacities.ts", generatePropertiesReferences(
//   Prelude.Opacities.baseline(),
//   "Opacities",
//   "StateLayerOpacitiesReferences",
//   "Opacities",
// ));
// createFileAt("references/FocusIndicator.ts", generatePropertiesReferences(
//   Prelude.FocusIndicator.baseline(),
//   "FocusIndicator",
//   "FocusIndicatorReferences",
//   "FocusIndicator",
// ));

export interface Affine {
  readonly n1: number,
  readonly n2: number,
  readonly n3: number,
  readonly n4: number,
  readonly n5: number,
  readonly n6: number,
}

export interface Layer {

}
export interface StyleBlock {
  readonly properties: StyleProperty[],
}

export const enum StylePropertyDiscriminant {
  FillColor,
  PushLayer,

}

export interface StyleProperty {
  
}

export const enum Style {
  Normall,
  Hovered,
  Pressed,
  FoccusTarget,
  HasFoccusTarget,
  WindowFocused,
  FocusCaptured,
  Disabled,
  Stashed,

}
