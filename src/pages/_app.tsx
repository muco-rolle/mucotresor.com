import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { theme } from '@theme';
import { DocumentHead, GlobalStyles, PageTransition } from '@components';
import { SEO } from '@config';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <PageTransition>
                <DocumentHead />
                <GlobalStyles />
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </PageTransition>
        </ChakraProvider>
    );
}

export default App;
