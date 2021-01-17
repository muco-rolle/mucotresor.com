import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '@theme';
import { DocumentHead, PageTransition } from '@components';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <PageTransition>
                <DocumentHead />
                <Component {...pageProps} />
            </PageTransition>
        </ChakraProvider>
    );
}

export default App;
