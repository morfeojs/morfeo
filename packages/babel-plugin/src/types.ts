export type MorfeoBabelPluginOptions = {
  /**
   * If set to `true` the generated minified classes will be emojis.
   * Nothing less, nothing more.
   * It's a kind of an easter egg 🥚.
   *
   * @default false
   */
  emojis?: boolean;
  /**
   * The prefix of the generated classes.
   * In case you specify a value all the generated classes (also in development mode) will be prefixed
   * with that value.
   */
  classNamePrefix?: string;
};

export type MorfeoBabelResult = {
  styles: Record<string, string>;
  globalStyles: Record<string, string>;
};
