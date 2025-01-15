# style-guide

## Prettier

At [prettier.js](./prettier.js) you can find our configuration for [Prettier](https://prettier.io).

> **Note:**
> Prettier is a peer dependency, so you need to install **prettier** too.

To use it in your project, just add this to your `package.json`:

```json
{
  "prettier": "@clickbar/style-guide/prettier"
}
```

> **Warning:**
> We use the "unsafe" option `htmlWhitespaceSensitivity: ignore`. This might need some manual prettier-ignore's
> when whitespaces are important in your HTML.

## Laravel Pint

At [pint.json](./pint.json) you can find our configuration for [Laravel Pint](https://github.com/laravel/pint).

To use it in your project, we recommend to symlink the `pint.json` file to your project root.
This way your IDE tooling can pick up the configuration and provide you with the correct code style automatically.

```bash
# from your project root
ln -s ./node_modules/@clickbar/style-guide/pint.json pint.json
```
