import { extendTheme } from '@chakra-ui/react';
import { prismLightTheme } from './prism';

export const theme = extendTheme({
    fonts: {
        heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
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
