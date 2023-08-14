module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2023,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"],
    "func-names": ["error", "never"],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" },
    ],
    "import/prefer-default-export": "off",
    "import/no-useless-path-segments": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-inferrable-types": "off",
  },
};
