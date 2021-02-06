import React from 'react';
import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

class Document extends NextDocument {
    static getInitialProps(ctx: DocumentContext) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                {/* <link
                    rel="preload"
                    href="fonts/inter-var-latin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                /> */}
                {/* <link
                    rel="preload"
                    as="font"
                    href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/prodigy-sans.min.css"
                /> */}

                <link
                    rel="preload"
                    as="font"
                    crossOrigin="anonymous"
                    href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
                />

                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
