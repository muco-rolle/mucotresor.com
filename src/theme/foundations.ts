import { theme, ThemeOverride } from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const font = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: true,
});

export const foundations: ThemeOverride = {
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles: {
    global: {
      "::selection": {
        bg: "purple.50",
        color: "purple.500",
      },

      body: {
        bg: "zinc.900",
      },
    },
  },

  fonts: {
    ...theme.fonts,
    heading: font.style.fontFamily,
    body: font.style.fontFamily,
  },

  colors: {
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
    },
  },
};
