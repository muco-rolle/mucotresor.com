import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '@theme';
import { DocumentHead, GlobalStyles, PageTransition } from '@components';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <GlobalStyles />
            <PageTransition>
                <Component {...pageProps} />
            </PageTransition>
        </ChakraProvider>
    );
}

export default App;
