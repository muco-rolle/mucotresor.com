import React from 'react';
import Router, { useRouter } from 'next/router';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { PageTransition } from 'next-page-transitions';
import NProgress from 'nprogress';

import { SEO } from 'next-seo.config';
import { theme } from 'theme';
import { GlobalStyles, DocumentHead, MDXComponents } from 'components';

// setting up nprogress
Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
    const { route } = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <ColorModeProvider value={'light'}>
                    <GlobalStyles>
                        <DocumentHead />
                        <DefaultSeo {...SEO} />
                        <PageTransition timeout={300} classNames="transition">
                            <Component {...pageProps} key={route} />
                        </PageTransition>
                    </GlobalStyles>
                </ColorModeProvider>
            </MDXProvider>
        </ThemeProvider>
    );
};

export default App;
