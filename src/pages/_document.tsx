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
                <link
                    rel="preload"
                    href="fonts/inter-var-latin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
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
