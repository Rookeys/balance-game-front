import "@/styles/globals.css"
import { withThemeByDataAttribute } from "@storybook/addon-themes"
import type { Preview, ReactRenderer } from "@storybook/react"
import { ThemeProvider } from "next-themes"
import React from "react"

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "black", value: "#000" },
        { name: "dark", value: "#222" },
        { name: "light", value: "#ddd" },
        { name: "white", value: "#fff" }
      ]
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "",
        dark: "dark"
      },
      defaultTheme: "light",
      attributeName: "data-theme"
    })
  ]
}

export default preview
