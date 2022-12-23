import { ChakraProvider, theme as chakraTheme } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { seo } from "~/config/seo";
import { theme } from "~/theme";

const font = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: true,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={{
        ...theme,
        fonts: {
          ...chakraTheme.fonts,
          heading: font.style.fontFamily,
          body: font.style.fontFamily,
        },
      }}
    >
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
