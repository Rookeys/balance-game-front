import "@/styles/globals.css";
import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "black", value: "#000" },
        { name: "dark", value: "#222" },
        { name: "light", value: "#ddd" },
        { name: "white", value: "#fff" },
      ],
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [],
};

export default preview;