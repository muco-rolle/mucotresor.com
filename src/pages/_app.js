import React, { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

import { DefaultSeo } from 'next-seo';
import { SEO } from 'next-seo.config';
import { theme } from 'theme';
import { GlobalStyles, DocumentHead, MDXComponents } from 'components';

import 'typeface-inconsolata';
import 'typeface-fira-code';

// setting up nprogress
Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <ColorModeProvider value={'light'}>
                    <GlobalStyles>
                        <DocumentHead />
                        <DefaultSeo {...SEO} />
                        <Component {...pageProps} />
                    </GlobalStyles>
                </ColorModeProvider>
            </MDXProvider>
        </ThemeProvider>
    );
};

export default App;
