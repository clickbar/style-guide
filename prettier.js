/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 *
 * @type {import("prettier").Config}
 */
const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 100,
};

// noinspection JSUnusedGlobalSymbols
/**
 * @type {import("prettier").Config}
 */
export default {
  ...overridableDefaults,
  singleQuote: true,
  semi: true,
  htmlWhitespaceSensitivity: 'ignore',
};
