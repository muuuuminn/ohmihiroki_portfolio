module.exports = {
  "env": {
      "browser": true,
      "amd": true,
      "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
        "error",
        "single",
        { "allowTemplateLiterals": true }
      ],
      "prettier/prettier": [
          "error", {
              "singleQuote": true,
              "trailingComma": "es5"
          },
      ],
      "no-console": "off",
  }
};
