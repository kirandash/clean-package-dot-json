<div align="center">
  
  <h1><a href="https://www.npmjs.com/package/clean-package-dot-json">clean-package-dot-json</a></h1>

Clean `package.json` in `prepack` hook before publishing your package by removing unnecessary properties.</span>

Feel free to reach me on other social platforms! 😊 <br />
<a href="https://www.youtube.com/@bgwebagency">YouTube</a> || <a href="https://discord.com/invite/62VR3MMCVm">Discord</a> || <a href="https://www.instagram.com/bgwebagency">Instagram</a> || <a href="https://www.twitter.com/kirankdash">Twitter</a> || <a href="https://www.tiktok.com/@bgwebagency">TikTok</a> || <a href="https://www.bgwebagency.in">Blog</a> || <a href="https://www.facebook.com/bgwebagency">Facebook</a>

🙏 Support

Please ⭐️ star this project and share it with others to show your support. [Follow me](https://github.com/kirandash) for updates on future projecs and tutorials! ❤️

---

</div>

## Purpose?

`package.json` most of the time gets filled up with development related information ex: `devDependencies` and configuration like [`eslintConfig`](https://eslint.org/docs/latest/user-guide/configuring/), [`prettier`](https://prettier.io/docs/en/configuration.html), [`lint-staged`](https://github.com/okonet/lint-staged), [`simple-git-hooks`](https://github.com/toplenboren/simple-git-hooks), etc.

If you are building npm package or micropackages where every byte matters then you can use `clean-package-dot-json` in a prepack hook to remove unnecessary properties from `package.json`.

## Install

```
npm install --save-dev clean-package-dot-json
```

## Usage

Add `clean-package-dot-json` to the [`prepack` hook](https://docs.npmjs.com/cli/v8/using-npm/scripts#:~:text=on%20npm%20publish.-,prepack,-Runs%20BEFORE%20a), which runs before `npm publish` and `npm pack`.

```json5
// package.json
{
  name: 'my-package',
  // ...
  scripts: {
    // ...
    prepack: 'node ./node_modules/.bin/clean-package-dot-json',
  },
}
```

### Flags

| Flag                           | Description                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `-i, --ignore <property name>` | Property names to ignore during cleanup. Accepts multiple flags or a comma-delimited list. |
| `-v, --verbose`                | Verbose logs.                                                                              |
| `-d, --dry`                    | Dry run mode. Instead of writing to disk, it will log it.                                  |

### Default ignored properties

By default, these properties are ignored in `package.json`:

#### [npm](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

- `name`
- `version`
- `private`
- `publishConfig`
- `scripts.preinstall`
- `scripts.install`
- `scripts.postinstall`
- `scripts.dependencies`
- `files`
- `bin`
- `browser`
- `main`
- `man`
- `dependencies`
- `peerDependencies`
- `peerDependenciesMeta`
- `bundledDependencies`
- `optionalDependencies`
- `engines`
- `os`
- `cpu`
- `description`
- `keywords`
- `author`
- `contributors`
- `license`
- `homepage`
- `repository`
- `bugs`
- `funding`

#### CDNs

- [`jsdelivr`](https://www.jsdelivr.com/features#publishing-packages)
- [`unpkg`](https://unpkg.com/)

#### [Node.js](https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions)

- `type`
- `exports`
- `imports`

#### [VSCode Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)

- `sponsor`
- `publisher`
- `displayName`
- `categories`
- `galleryBanner`
- `preview`
- `contributes`
- `activationEvents`
- `badges`
- `markdown`
- `qna`
- `sponsor`
- `extensionPack`
- `extensionDependencies`
- `extensionKind`
- `icon`

#### [Angular Package Format](https://angular.io/guide/angular-package-format#legacy-resolution-keys)

- `fesm2020`
- `fesm2015`
- `esm2020`
- `es2020`

#### [TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)

- `types`
- `typings`
- `typesVersions`

#### Bundlers (Webpack, Rollup, esbuild)

- [`module`](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for)
- [`sideEffects`](https://webpack.js.org/guides/tree-shaking/)
