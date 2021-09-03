module.exports = {
  extends: [
    '@strv/stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      { ignoreFontFamilies: ['Hind', 'Playfair'] },
    ],
  },
}
