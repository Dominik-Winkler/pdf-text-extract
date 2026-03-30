// @ts-check
import { defineConfig, globalIgnores } from "eslint/config"
import tseslint from "typescript-eslint"
import eslint from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-config-prettier"
import eslintPluginUnicorn from "eslint-plugin-unicorn"

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  eslintPluginUnicorn.configs.recommended,
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
