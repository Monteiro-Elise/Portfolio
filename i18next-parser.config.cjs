module.exports = {
  locales: ['en', 'fr'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  createOldCatalogs: false,
  sort: true,
  keepRemoved: false,
  defaultNamespace: 'translation',
  useKeysAsDefaultValue: true,
  keySeparator: false,
  namespaceSeparator: false,
  verbose: true,
};
