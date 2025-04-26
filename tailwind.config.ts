import { COLORS } from "./src/styles/theme/colors"
import { BORDER_RADIUS } from "./src/styles/theme/borderRadius"
import { FONT_SIZE } from "./src/styles/theme/fontSize"
import { FONT_WEIGHT } from "./src/styles/theme/fontWeight"
import { SCREEN_SIZE } from "./src/styles/theme/screenSize"

const isStorybook = process.env.STORYBOOK === "true"

const convertedScreenSize = Object.fromEntries(Object.entries(SCREEN_SIZE).map(([key, value]) => [key, `${value}px`]))

const config = {
  darkMode: ["selector", "[data-theme='dark']"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ...(isStorybook ? ["./src/stories/**/*.{js,ts,jsx,tsx,mdx}"] : [])
  ],
  theme: {
    screens: convertedScreenSize,
    borderRadius: BORDER_RADIUS,
    fontWeight: FONT_WEIGHT,
    fontSize: FONT_SIZE,
    extend: {
      // 기본 tailwindCss 색상 필요없으면 주석
      colors: {
        primary: {
          DEFAULT: COLORS.CYAN_500,
          normal: COLORS.CYAN_500,
          hover: COLORS.CYAN_600,
          "on-primary": COLORS.CYAN_700
        },
        secondary: {
          DEFAULT: COLORS.VIOLET_400,
          normal: COLORS.VIOLET_400,
          alternative: COLORS.VIOLET_50,
          "alternative-hover": COLORS.VIOLET_100,
          "on-primary": COLORS.VIOLET_900
        },
        label: {
          normal: COLORS.NEUTRAL_900,
          strong: COLORS.BLACK,
          neutral: COLORS.NEUTRAL_700,
          alternative: COLORS.NEUTRAL_600,
          disable: COLORS.NEUTRAL_500
        },
        background: {
          DEFAULT: COLORS.WHITE
        },
        line: {
          normal: COLORS.NEUTRAL_300,
          neutral: COLORS.NEUTRAL_200
        },
        fill: {
          normal: COLORS.NEUTRAL_50,
          strong: COLORS.NEUTRAL_100
        },
        status: {
          positive: "#00BF40",
          negative: "#FF4242"
        },
        accent: {
          normal: COLORS.PINK_500,
          alternative: COLORS.PINK_50,
          "on-accent": COLORS.PINK_800
        },
        dimmer: {
          normal: "#17171980",
          strong: "#171719CC"
        },
        kakao: {
          container: COLORS.KAKAO_CONTAINER,
          symbol: COLORS.KAKAO_SYMBOL,
          label: COLORS.KAKAO_LABEL
        }
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        "sb-aggro-medium": ["var(--font-sb-aggro-medium)"]
        // "moneygraphy-rounded": ["var(--font-moneygraphy-rounded)"],
      }
    }
  },
  plugins: []
}

export default config
