import { Global } from '@emotion/react';

export const GlobalStyles = () => (
    <Global
        styles={`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
            html {
                scroll-behavior: smooth;
                text-rendering: 
            }
           
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

           

`}
    />
);
