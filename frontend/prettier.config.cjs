module.exports = {
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "plugins": [require('@trivago/prettier-plugin-sort-imports')],
  "importOrder": [
    "^@atlaskit/(.*)$",
    "^#\\w*/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderParserPlugins": ["typescript", "jsx", "decorators"],
}
