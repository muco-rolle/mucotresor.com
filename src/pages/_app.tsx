import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';

import { theme } from '@theme';
import { PageTransition } from '@components';
import { SEO } from '@config';
import { globalStyles } from '@theme/globalStyles';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <Global styles={globalStyles} />
            <PageTransition>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </PageTransition>
        </ChakraProvider>
    );
}

export default App;
