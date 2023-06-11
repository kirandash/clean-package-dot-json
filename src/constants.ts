export const defaultIgnoreProperties = [
  // Required fields
  'name',
  'version',

  // Publishing
  'private',
  'publishConfig',

  // npm 6 & 7
  'scripts.preinstall',
  'scripts.install',
  'scripts.postinstall',

  // npm 8
  'scripts.dependencies',

  // Files
  'files',
  'bin',
  'browser',
  'main',
  'man',

  // CDN
  'jsdelivr',
  'unpkg',

  // Dependencies
  'dependencies',
  'peerDependencies',
  'peerDependenciesMeta',
  'bundledDependencies',
  'optionalDependencies',

  // Env dependencies
  'engines',
  'os',
  'cpu',

  // npmjs.com
  'description',
  'keywords',
  'author',
  'contributors',
  'license',
  'homepage',
  'repository',
  'bugs',
  'funding',

  // Node.js
  'type',
  'exports',
  'imports',

  // VSCode
  'sponsor',
  'publisher',
  'displayName',
  'categories',
  'galleryBanner',
  'preview',
  'contributes',
  'activationEvents',
  'badges',
  'markdown',
  'qna',
  'sponsor',
  'extensionPack',
  'extensionDependencies',
  'extensionKind',
  'icon',

  // Angular
  'fesm2020',
  'fesm2015',
  'esm2020',
  'es2020',

  // TypeScript
  'types',
  'typings',
  'typesVersions',

  // bundler spec
  'module',
  'sideEffects',
]
