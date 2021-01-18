import { extendTheme } from '@chakra-ui/react';
import { prismLightTheme } from './prism';

export const theme = extendTheme({
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    styles: {
        global: {
            ...prismLightTheme,

            html: {
                scrollBehavior: 'smooth',
                'text-rendering': 'optimizeLegibility',
                'font-variant-ligatures': 'additional-ligatures',
            },
        },
    },
});
