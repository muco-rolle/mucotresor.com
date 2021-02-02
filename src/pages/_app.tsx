import {
    ChakraProvider,
    ColorModeProvider,
    useColorMode,
} from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';

import { theme } from '@theme';
import { PageTransition } from '@components';
import { SEO } from '@config';
import { prismDarkTheme, prismLightTheme } from '@theme/prism';

function App({ Component, pageProps }: AppProps) {
    const { colorMode } = useColorMode();

    const globalStyles = `
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 300 400 900;
        font-display: optional;
        src: url(fonts/inter-var-latin.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
    }
    
    

    ${colorMode === 'light' ? prismLightTheme : prismDarkTheme}

    html {
        min-width: 360px;
        scroll-behavior: smooth;
    }
    
    
    
    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    
    
    ::selection {
        background-color: hsl(146, 48%, 42%);
        color: #fefefe;
    }
    `;
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
