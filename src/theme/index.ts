import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { mode, getColor } from '@chakra-ui/theme-tools';
import { prismLightTheme, prismDarkTheme } from './prism';

export const theme = extendTheme({
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },

    styles: {
        global: (props) => ({
            body: {
                fontFamily: "'Inter', sans-serif",
            },
            // ...prismLightTheme,
            // ...prismDarkTheme,
        }),
    },
});
