import React from 'react';
import { css, Global } from '@emotion/core';
import { useColorMode, CSSReset } from '@chakra-ui/core';

import {
    prismLightTheme as lightTheme,
    prismDarkTheme as darkTheme
} from '../theme';

export const GlobalStyles = (props) => {
    const { colorMode } = useColorMode();

    const { children } = props;

    return (
        <>
            <CSSReset />
            <Global
                styles={css`
                    @font-face {
                        font-family: 'Plus Jakarta Text';
                        font-style: normal;
                        font-weight: normal;
                        src: url('/fonts/PlusJakartaText-Regular.woff2')
                                format('woff2'),
                            url('/font/PlusJakartaText-Regular.woff')
                                format('woff');
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'Plus Jakarta Text';
                        font-style: italic;
                        font-weight: normal;
                        src: url('/fonts/PlusJakartaText-Italic.woff2')
                                format('woff2'),
                            url('/font/PlusJakartaText-Italic.woff')
                                format('woff');
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'Plus Jakarta Text';
                        font-style: normal;
                        font-weight: 600;
                        src: url('/fonts/PlusJakartaText-Bold.woff2')
                                format('woff2'),
                            url('/font/PlusJakartaText-Bold.woff')
                                format('woff');
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'Plus Jakarta Text';
                        font-style: italic;
                        font-weight: 600;
                        src: url('/fonts/PlusJakartaText-BoldItalic.woff2')
                                format('woff2'),
                            url('/font/PlusJakartaText-BoldItalic.woff')
                                format('woff');
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'Fira Code';
                        font-style: normal;
                        font-weight: normal;
                        src: url('/fonts/FiraCode-Regular.woff2')
                                format('woff2'),
                            url('/fonts/FiraCode-Regular.woff') format('woff');
                        font-display: swap;
                    }

                    ${colorMode === 'light' ? lightTheme : darkTheme};

                    *:focus,
                    *:active {
                        border: none !important;
                        outline: none !important;
                    }

                    ::selection {
                        background-color: hsl(146, 48%, 42%);
                        color: #fefefe;
                    }

                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                        text-rendering: optimizeLegibility;
                        font-variant-ligatures: additional-ligatures;
                    }

                    body {
                        font-size: 17px;
                    }

                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: ${colorMode === 'light'
                            ? 'white'
                            : '#171923'};
                    }

                    /* styles page transition */

                    .transition-enter {
                        opacity: 0;
                    }
                    .transition-enter-active {
                        opacity: 1;
                        transition: opacity 300ms;
                    }
                    .transition-exit {
                        opacity: 1;
                    }
                    .transition-exit-active {
                        opacity: 0;
                        transition: opacity 300ms;
                    }

                    /* icons styles */
                    .symbol::before {
                        display: inline-block;
                        content: '→';
                        color: hsl(146, 48%, 42%);
                        margin-right: 3px;
                        font-family: 'Fira Code';
                        font-weight: 900;
                        font-size: 80px;
                        margin-left: -15px;
                    }

                    .symbol::after {
                        content: '()';
                        color: #8be9fd;
                        font-family: 'Fira Code';
                        margin-left: 4px;
                        font-size: 30px;
                    }
                `}
            />
            {children}
        </>
    );
};
