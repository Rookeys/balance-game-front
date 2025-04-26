import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import tailwindcssPlugin from "eslint-plugin-tailwindcss"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ),
  {
    plugins: {
      tailwindcss: tailwindcssPlugin
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    },
    linterOptions: {
      reportUnusedDisableDirectives: "off"
    }
  }
]

export default eslintConfig
