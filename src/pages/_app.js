import React, { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { MDXProvider } from '@mdx-js/react';

import { DefaultSeo } from 'next-seo';
import { GlobalStyles } from 'components';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import { SEO } from 'next-seo.config';
import { theme } from 'theme';
import { MDXComponents } from 'components';

import 'typeface-inconsolata';

// setting up nprogress
Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const tracker = window.document.createElement('script');
            const firstScript = window.document.querySelectorAll('script')[0];

            tracker.defer = true;
            tracker.setAttribute('site', 'UVWLEUFH');
            tracker.setAttribute('spa', 'auto');
            tracker.src = 'https://cdn.usefathom.com/script.js';
            firstScript.parentNode.insertBefore(tracker, firstScript);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <ColorModeProvider value="light">
                    <GlobalStyles>
                        <DefaultSeo {...SEO} />
                        <Component {...pageProps} />
                    </GlobalStyles>
                </ColorModeProvider>
            </MDXProvider>
        </ThemeProvider>
    );
};

export default App;
