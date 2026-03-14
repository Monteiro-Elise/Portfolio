module.exports = {
  locales: ['en', 'fr'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  createOldCatalogs: false,
  sort: true,
  keepRemoved: [/lang.*/],
  defaultNamespace: 'translation',
  useKeysAsDefaultValue: true,
  keySeparator: false,
  namespaceSeparator: false,
  verbose: true,
};
