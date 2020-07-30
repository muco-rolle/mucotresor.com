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

                    @font-face {font-family: "Monaco"; 
                    src: url("https://db.onlinewebfonts.com/t/75f171bc535016d4d2582e6f88d52796.eot"); 
                    
                    src: url("https://db.onlinewebfonts.com/t/75f171bc535016d4d2582e6f88d52796.eot?#iefix") format("embedded-opentype"), 
                    url("https://db.onlinewebfonts.com/t/75f171bc535016d4d2582e6f88d52796.woff2") format("woff2"), 
                    url("https://db.onlinewebfonts.com/t/75f171bc535016d4d2582e6f88d52796.woff") format("woff"), 
                    url("https://db.onlinewebfonts.com/t/75f171bc535016d4d2582e6f88d52796.ttf") format("truetype"), 
                    url("https://db.onlinewebfonts.com/t/75f171bc535016d4d2582e6f88d52796.svg#Monaco") format("svg");
                    
                    ${colorMode === 'light' ? lightTheme : darkTheme};

                    *:focus,
                    *:active {
                        border: none !important;
                        outline: none !important;
                    }

                    ::selection {
                        background-color: #47a3f3;
                        color: #fefefe;
                    }

                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                    }

                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: ${
                            colorMode === 'light' ? 'white' : '#171923'
                        };
                    }
                `}
            />
            {children}
        </>
    );
};
