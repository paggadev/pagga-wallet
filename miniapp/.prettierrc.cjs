module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  endOfLine: 'auto',
  semi: false,
  singleQuote: true,
  printWidth: 100, 
  proseWrap: 'always', 
  singleAttributePerLine: true,

  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@public$',
    '^@public/(.*)$',
    '^@assets$',
    '^@assets/(.*)$',
    '^@layouts$',
    '^@layouts/(.*)$',
    '^@pages$',
    '^@pages/(.*)$',
    '^@components$',
    '^@components/(.*)$',
    '^@UI$',
    '^@UI/(.*)$',
    '^@/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true, 
}