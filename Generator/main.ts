import { Project, NullableKind, SourceFile, EnumMemberStructure, PropertyDeclarationStructure, Writers, VariableDeclarationKind } from "ts-morph";
import { Value, ColorPalette } from "@internal/prelude";


/**
 * Converts a string to camelCase.
 * Example: "hello world" -> "helloWorld"
 * Example: "foo-bar_baz" -> "fooBarBaz"
 */
function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

/**
 * Converts a string to PascalCase.
 * Example: "hello world" -> "HelloWorld"
 * Example: "foo-bar_baz" -> "FooBarBaz"
 */
function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase());
}

/**
 * Converts a string to snake_case.
 * Example: "hello world" -> "hello_world"
 * Example: "fooBarBaz" -> "foo_bar_baz"
 */
function toSnakeCase(input: string): string {
  return input
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
    .replace(/[-_\s]+/g, '_')
    .replace(/_+/g, '_');
}

// More robust version that handles various input formats:
function toSnakeCaseRobust(input: string): string {
  return input
    .trim()
    // Handle camelCase/PascalCase: insert underscore before capitals
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    // Handle existing separators: convert to underscore
    .replace(/[-\s]+/g, '_')
    // Convert everything to lowercase
    .toLowerCase()
    // Remove duplicate underscores
    .replace(/_+/g, '_')
    // Remove leading/trailing underscores
    .replace(/^_|_$/g, '');
}

class Path {
  private constructor(readonly segmants: string[]) {}

  static create(name: string) {
    return new Path([name]);
  }

  static createEmpty() {
    return new Path([])
  }

  toPropertyAccess() {
    return this.segmants.join(".");
  }
  toPascaleCaseName() {
    return toPascalCase(this.segmants.join());
  }
  toCamelCaseName() {
    return toCamelCase(this.segmants.join());
  }

  prepend(name: string) {
    this.segmants.unshift(name);
    return new Path([ name, ...this.segmants ])
  }
}

class EnumGenerator {
  private constructor(
    private readonly name: string,
    private readonly variants: string[],
  ) {}

  static create(name: string) {
    return new EnumGenerator(name, []);
  }

  addVariant(variant: string) {
    this.variants.push(variant);
    return this;
  }

  generate() {
    let output =  `export const enum ${this.name} {`;
    for (const variant of this.variants) {
      output += `  \n${variant},`;
    }
    output += ";";
  }
}

class ParameterListGenerator {}

class ClassMember {
  private constructor(
    private isPrivate: boolean,
    private isStatic: boolean,
    private _readonly: boolean,
    private _type: string | null,
    private _value: string | null,
  ) {}

  static create() {
    return new ClassMember(false, false, false, null, null);
  }

  private() {
    this.isPrivate = true;
    return this;
  }
  static() {
    this.isStatic = true;
    return this;
  }
  readonly() {
    this._readonly = true;
    return this;
  }
  type(string: string) {
    this._type = string;
    return this;
  }
  value(string: string) {
    this._value = string;
    return this;
  }
}

class ClassDataMembers {
  private constructor(
    readonly members: Map<string, ClassMember>,
  ) {}

  static create(): ClassDataMembers {
    return new ClassDataMembers(new Map());
  }

  add(name: string, member: ClassMember) {
    this.members.set(name, member);
  }
}

class ClassGenerator {
  private constructor(
    readonly name: string,
    readonly constructorParameters: ParameterListGenerator,
  ) {}
}

// ----------------------------

interface Properties {
  [key: string]: Properties | Value
}

// ----------------------------
class Visitor {
  private constructor(
    private numbericId: number,
    private path: Path,
    private visitor: (argument: { name: string, path: Path, numbericId: number }) => void,
  ) {}

  static visit(
    styles: Properties,
    visitor: (argument: { name: string, path: Path, numbericId: number }) => void,
  ) {
    new Visitor(-1, Path.createEmpty(), visitor).visit(styles);
  }

  private visit(styles: Properties) {
    const entries = Object.entries(styles);
    
    let index = 0;
    while (index < entries.length) {
      const [name, value] = entries[index];

      if (Value.isType(value)) {
        this.visitor({ 
          name, 
          path: Path.create(name), 
          numbericId: 
          this.numbericId,
        })
      } else {
        this.visit(value);
      }

      index += 1;
      this.numbericId += 1;
    }
  }
}

const createImports = ({
  stylesName,
  sourceFile,
}: {
  stylesName: string,
  sourceFile: SourceFile,
}) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: "@internal/prelude",
    namedImports: [
      stylesName,
    ]
  })
};

const createPropertiesKey = ({
  styles,
  stylesName,
  sourceFile,
}: {
  styles: Properties,
  stylesName: string,
  sourceFile: SourceFile,
}) => {
  const members: NullableKind<EnumMemberStructure>[] = [];

  Visitor.visit(
    styles,
    ({ path, numbericId: index }) => {
      members.push({
        name: path.toPascaleCaseName(),
        value: index,
      });
    },
  );

  sourceFile.addEnum({
    name: `${stylesName}Key`,
    isConst: true,
    isExported: true,
    members,
  });
};

const createPropertiesRef = ({
  sourceFile,
  styles,
  stylesName,
}: {
  styles: Properties,
  stylesName: string,
  sourceFile: SourceFile,
}) => {
  const peroperties: NullableKind<PropertyDeclarationStructure>[] = [];


  // Declare the const variable with an object literal
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const, // Declares it as a 'const'
    declarations: [
      {
        name: "userConfig",
        initializer: Writers.object({
          id: "101",
          role: writer => writer.quote("admin"), // Safely handles string quoting
          isActive: "true",
          theme: Writers.object({
            color: writer => writer.quote("dark"),
          }),
        }),
      },
    ],
  });

  Visitor.visit(
    styles,
    ({ path }) => {
      sourceFile.addClass({
        name: `${stylesName}${path.toPascaleCaseName()}Ref`,
        properties: [{
          name: "discriminant",
          type: `${stylesName}Key.${path.toPascaleCaseName()}`,
          isReadonly: true,
          initializer: `${stylesName}Key.${path.toPascaleCaseName()}`,
        }],
        methods: [{
          name: "get",
          parameters: [{
            name: toCamelCase(stylesName),
            type: toPascalCase(stylesName),
          }],
          statements: [
            `return ${toCamelCase(stylesName)}.${path.toPropertyAccess()};`
          ],
        }, {
          name: "getName",
          statements: [
            `return "${toPascalCase(stylesName)}.${path.toPascaleCaseName()}";`
          ],
        }],
        extends: `${stylesName}Ref`,
      });
    }
  );


  // sourceFile.addClass({
  //   name: `${stylesName}Ref`,
  //   isExported: true,
  //   properties: [{

  //   }],
  //   methods: [{
  //     name: "isRef",
  //     isStatic: true,
  //     parameters: [{
  //       name: "it",
  //       type: "unknown",
  //     }],
  //     returnType: `it is ${stylesName}Ref`,
  //     statements: [
  //       `return it instanceof ${stylesName}Ref;`,
  //     ],
  //   }]
  // });

};

const createFile = (path: string, content: string) => {
  Deno.writeTextFileSync(path, content);
};

const removeFile = (path: string) => {
  Deno.remove(path);
};

function save(sourceFile: SourceFile) {
  // try {
  //   removeFile(sourceFile.getFilePath());
  // } catch (error) {
  //   if (!(error instanceof Deno.errors.NotFound)) {
  //     throw error;
  //   } 
  // }
  
  // createFile(sourceFile.getFilePath(), "");
  sourceFile.saveSync();
}

const generatedPath = "/home/lunynytro/Documents/material_generator/Generated/material/";

const project = new Project();

createFile(generatedPath + "ColorPalette.ts", "");
const sourceFile = project.addSourceFileAtPath(generatedPath + "ColorPalette.ts");
createImports({
  stylesName: "ColorPalette",
  sourceFile,
});
createPropertiesKey({
  styles: ColorPalette.baseline(),
  stylesName: "ColorPalette",
  sourceFile,
});
createPropertiesRef({
  styles: ColorPalette.baseline(),
  stylesName: "ColorPalette",
  sourceFile,
});

save(sourceFile);