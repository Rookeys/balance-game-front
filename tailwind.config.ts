import { BORDER_RADIUS } from "./src/styles/theme/borderRadius"
import { COLORS } from "./src/styles/theme/colors"
import { FONT_SIZE } from "./src/styles/theme/fontSize"
import { FONT_WEIGHT } from "./src/styles/theme/fontWeight"

const isStorybook = process.env.STORYBOOK === "true"

const config = {
  darkMode: ["selector", "[data-theme='dark']"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ...(isStorybook ? ["./src/stories/**/*.{js,ts,jsx,tsx,mdx}"] : [])
  ],
  theme: {
    screens: {
      ["3xsm"]: "280px",
      ["2xsm"]: "320px",
      xsm: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      ["2xl"]: "1536px",
      ["3xl"]: "1920px",
      ["4xl"]: "2440px"
    },
    borderRadius: BORDER_RADIUS,
    fontWeight: FONT_WEIGHT,
    fontSize: FONT_SIZE,
    extend: {
      // 기본 tailwindCss 색상 필요없으면 주석
      colors: {
        primary: {
          DEFAULT: COLORS.PRIMARY,
          10: COLORS.PRIMARY_10,
          20: COLORS.PRIMARY_20,
          30: COLORS.PRIMARY_30,
          40: COLORS.PRIMARY_40,
          50: COLORS.PRIMARY_50,
          60: COLORS.PRIMARY_60,
          70: COLORS.PRIMARY_70,
          80: COLORS.PRIMARY_80,
          90: COLORS.PRIMARY_90
        },
        secondary: {
          DEFAULT: COLORS.SECONDARY,
          10: COLORS.SECONDARY_10,
          20: COLORS.SECONDARY_20,
          30: COLORS.SECONDARY_30,
          40: COLORS.SECONDARY_40,
          50: COLORS.SECONDARY_50,
          60: COLORS.SECONDARY_60,
          70: COLORS.SECONDARY_70,
          80: COLORS.SECONDARY_80,
          90: COLORS.SECONDARY_90
        },
        dark: {
          DEFAULT: COLORS.DARK,
          10: COLORS.DARK_10,
          20: COLORS.DARK_20,
          30: COLORS.DARK_30,
          40: COLORS.DARK_40,
          50: COLORS.DARK_50,
          60: COLORS.DARK_60,
          70: COLORS.DARK_70,
          80: COLORS.DARK_80,
          90: COLORS.DARK_90
        },
        gray: {
          DEFAULT: COLORS.GRAY,
          10: COLORS.GRAY_10,
          20: COLORS.GRAY_20,
          30: COLORS.GRAY_30,
          40: COLORS.GRAY_40,
          50: COLORS.GRAY_50,
          60: COLORS.GRAY_60,
          70: COLORS.GRAY_70,
          80: COLORS.GRAY_80,
          90: COLORS.GRAY_90
        },
        purple: {
          DEFAULT: COLORS.PURPLE,
          10: COLORS.PURPLE_10,
          20: COLORS.PURPLE_20,
          30: COLORS.PURPLE_30,
          40: COLORS.PURPLE_40,
          50: COLORS.PURPLE_50,
          60: COLORS.PURPLE_60,
          70: COLORS.PURPLE_70,
          80: COLORS.PURPLE_80,
          90: COLORS.PURPLE_90
        },
        pink: {
          DEFAULT: COLORS.PINK,
          10: COLORS.PINK_10,
          20: COLORS.PINK_20,
          30: COLORS.PINK_30,
          40: COLORS.PINK_40,
          50: COLORS.PINK_50,
          60: COLORS.PINK_60,
          70: COLORS.PINK_70,
          80: COLORS.PINK_80,
          90: COLORS.PINK_90
        },
        yellow: {
          DEFAULT: COLORS.YELLOW,
          10: COLORS.YELLOW_10,
          20: COLORS.YELLOW_20,
          30: COLORS.YELLOW_30,
          40: COLORS.YELLOW_40,
          50: COLORS.YELLOW_50,
          60: COLORS.YELLOW_60,
          70: COLORS.YELLOW_70,
          80: COLORS.YELLOW_80,
          90: COLORS.YELLOW_90
        },
        red: {
          DEFAULT: COLORS.RED,
          10: COLORS.RED_10,
          20: COLORS.RED_20,
          30: COLORS.RED_30,
          40: COLORS.RED_40,
          50: COLORS.RED_50,
          60: COLORS.RED_60,
          70: COLORS.RED_70,
          80: COLORS.RED_80,
          90: COLORS.RED_90
        },
        blue: {
          DEFAULT: COLORS.BLUE,
          10: COLORS.BLUE_10,
          20: COLORS.BLUE_20,
          30: COLORS.BLUE_30,
          40: COLORS.BLUE_40,
          50: COLORS.BLUE_50,
          60: COLORS.BLUE_60,
          70: COLORS.BLUE_70,
          80: COLORS.BLUE_80,
          90: COLORS.BLUE_90
        },
        green: {
          DEFAULT: COLORS.GREEN,
          10: COLORS.GREEN_10,
          20: COLORS.GREEN_20,
          30: COLORS.GREEN_30,
          40: COLORS.GREEN_40,
          50: COLORS.GREEN_50,
          60: COLORS.GREEN_60,
          70: COLORS.GREEN_70,
          80: COLORS.GREEN_80,
          90: COLORS.GREEN_90
        },
        light: COLORS.LIGHT,
        white: COLORS.WHITE,
        black: COLORS.BLACK,
        night: COLORS.NIGHT,
        "dark-night": COLORS.DARK_NIGHT
      },
      fontFamily: {
        "moneygraphy-rounded": ["var(--font-moneygraphy-rounded)"]
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
}

export default config
