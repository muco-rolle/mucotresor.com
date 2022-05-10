import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles, PageTransition } from '@components';
import { SEO } from '@config';
import { theme } from '@theme';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <GlobalStyles />
            <PageTransition>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </PageTransition>
        </ChakraProvider>
    );
}

export default App;
