import { COLORS } from "./src/styles/theme/colors"
import { BORDER_RADIUS } from "./src/styles/theme/borderRadius"
import { FONT_SIZE } from "./src/styles/theme/fontSize"
import { FONT_WEIGHT } from "./src/styles/theme/fontWeight"
import { SCREEN_SIZE } from "./src/styles/theme/screenSize"
import plugin from "tailwindcss/plugin"

const isStorybook = process.env.STORYBOOK === "true"

const convertedScreenSize = Object.fromEntries(Object.entries(SCREEN_SIZE).map(([key, value]) => [key, `${value}px`]))

const config = {
  // darkMode: ["selector", "[data-theme='dark']"],
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
          "on-primary": COLORS.CYAN_700,
          alternative: COLORS.CYAN_0
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
          strong: "#171719CC",
          neutral: "#1717194D"
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
      },
      keyframes: {
        "border-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        "border-move": "border-move 3s linear infinite"
      },
      boxShadow: {
        normal: `0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.08)`,
        emphasize: `0px 2px 8px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.08)`,
        strong: `0px 6px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)`
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".border-animation": {
          "&::before": {
            position: "absolute",
            inset: "0",
            animation: "border-move 3s linear infinite",
            borderRadius: "16px",
            borderWidth: "2px",
            borderColor: "transparent",
            backgroundImage: "linear-gradient(90deg, #00BDDE 0%, #FFFFFF 25%, #6541F2 50%, #FFFFFF 75%, #00BDDE 100%)",
            backgroundSize: "300% 300%",
            content: '""'
          }
        }
      })
    })
  ]
}

export default config
