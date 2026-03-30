// @ts-check
import eslint from "@eslint/js"
import eslintPluginQuery from "@tanstack/eslint-plugin-query"
import eslintPluginPrettierRecommended from "eslint-config-prettier"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  eslintPluginUnicorn.configs.recommended,
  eslintPluginQuery.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  },
  {
    ignores: [
      ".react-router/**",
      ".turbo/**",
      "eslint.config.mjs",
      "node_modules/**",
      "tsconfig.eslint.json",
      "app/components/ui/**",
      "app/lib/utils.ts",
    ],
  }
)
