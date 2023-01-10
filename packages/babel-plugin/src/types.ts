export type MorfeoCompilerOptions = {
  /**
   * A list of paths that links to where the themes are placed
   * Available extensions for the themes are: `ts`, `js` and `json`
   *
   * @example
   * {
   *  "themePaths": ["./src/themes/light.ts", "./src/themes/dark.ts"]
   * }
   */
  themePaths: string[];
  /**
   * The directory where the compiler will output the extracted css
   *
   * For example:
   * ```json
   * {
   *  "themePaths": ["./src/themes/light.ts", "./src/themes/dark.ts"]
   *  "outDir": "./build/css",
   * }
   * ```
   *
   * Will produce inside the folder `build/css` the following files
   *
   * ```console
   * build/
   *  └── css/
   *    ├── dark.css
   *    └── light.css
   * ```
   *
   * > Note that the names of the extracted css files could be different.
   */
  outDir: string;
};
