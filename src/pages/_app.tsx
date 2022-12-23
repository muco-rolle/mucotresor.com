import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { seo } from "~/config/seo";
import { theme } from "~/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
