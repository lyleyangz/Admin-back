/**
 * Created by lidy on 2019/10/25.
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:vue/essential", "plugin:prettier/recommended", "eslint:recommended"],
  rules: {
    indent: ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-cond-assign": ["error", "always"],
    "no-unused-vars": "off",
    "object-curly-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "block-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never", {"singleValue": false, "arraysInArrays": false}],
    "arrow-spacing": "error",
    "rest-spread-spacing": ["error", "never"],
    "linebreak-style": "off",
    "no-console": "off",
    "no-debugger": "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "useTabs": false,
        "trailingComma": "none",
        "bracketSpacing": false,
        "jsxBracketSameLine": true,
        "endOfLine": "crlf",
        "htmlWhitespaceSensitivity": "ignore"
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
