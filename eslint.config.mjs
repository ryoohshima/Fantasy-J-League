import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // 対象ファイル
    languageOptions: {
      parser: tsParser, // TypeScript用のパーサ
      globals: globals.browser, // ブラウザ向けのグローバル変数
    },
    rules: {
      // ReactとTypeScriptの基本ルール
      ...pluginJs.configs.recommended.rules, // JavaScript推奨設定
      ...tsPlugin.configs.recommended.rules, // TypeScript推奨設定
      ...pluginReact.configs.flat.recommended.rules, // React推奨設定
      "react/jsx-uses-react": "off", // JSX用のReact未使用警告を無効化
      "react/react-in-jsx-scope": "off", // React 17+では不要
    },
  },
];