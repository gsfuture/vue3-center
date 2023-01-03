module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-empty': 'off',
    'no-var': 'off',
    'no-constant-condition': 'off',
    "prefer-const": "off",
    'no-unreachable': 'off',
    'prefer-rest-params': 'off',
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ]

  }
}
