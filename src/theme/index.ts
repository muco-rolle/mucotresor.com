import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { prismLightTheme } from './prism';

export const theme = extendTheme({
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },
    styles: {
        global: (props) => ({
            body: {
                color: mode('gray.700', 'whiteAlpha.900')(props),
            },
            ...prismLightTheme,
        }),
    },
});
