export type BuildConfig = {
  /**
   * an identifier for the passed theme, for example "light", "dark"
   */
  name: string;
  /**
   * the path where the generated css files will be placed
   * @default `morfeo`
   */
  buildPath?: string;
  /**
   * the path to the configuration file.
   * valid extensions are `js`, `ts`, `json` or `no extension`
   * @default `./.morfeorc`
   */
  configPath?: string;
};

export type MorfeoConfig = {
  /**
   * the path where the generated css files will be placed
   */
  buildPath: string;
};
