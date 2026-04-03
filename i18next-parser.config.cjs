module.exports = {
  locales: ['en', 'fr'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  createOldCatalogs: false,
  sort: true,
  keepRemoved: [/lang.*/, /section.*/],
  defaultNamespace: 'translation',
  useKeysAsDefaultValue: true,
  keySeparator: '.',
  namespaceSeparator: false,
  verbose: true,
};
