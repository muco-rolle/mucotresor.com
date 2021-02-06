import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },

    styles: {
        global: (props) => ({
            body: {
                fontFamily: "'HK Grotesk', sans-serif",
                fontSize: '18px',
                fontWeight: 'normal',
            },
            // ...prismLightTheme,
            // ...prismDarkTheme,
        }),
    },
});
