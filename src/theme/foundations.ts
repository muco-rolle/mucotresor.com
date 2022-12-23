import { ThemeOverride } from "@chakra-ui/react";

export const foundations: ThemeOverride = {
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles: {
    global: {
      "::selection": {
        bg: "transparent",
        color: "purple.500",
      },

      body: {
        bg: "zinc.900",
      },
    },
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

    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
    },
  },
};
