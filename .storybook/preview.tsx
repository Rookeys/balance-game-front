import "@/styles/globals.css"
import type { Preview } from "@storybook/react"
import { ThemeProvider } from "next-themes"
import React from "react"

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["ThemeToggle"]
      }
    },
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
    )
  ]
}

export default preview
