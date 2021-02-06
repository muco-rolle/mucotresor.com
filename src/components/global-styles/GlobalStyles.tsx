import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import {
    prismLightTheme as lightTheme,
    prismDarkTheme as darkTheme,
} from '@theme/prism';

export const GlobalStyles = () => {
    const { colorMode } = useColorMode();

    return (
        <Global
            styles={css`
                html {
                    min-width: 360px;
                    scroll-behavior: smooth;
                    text-rendering: optimizeLegibility;
                    font-variant-ligatures: additional-ligatures;
                }

                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
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

                ::selection {
                    background-color: hsl(146, 48%, 42%);
                    color: #fefefe;
                }

                ${colorMode === 'dark' ? darkTheme : lightTheme}
            `}
        />
    );
};
