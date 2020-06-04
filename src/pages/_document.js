import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

const GA_TRACKING_ID = '';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                    <meta
                        content="width=device-width, initial-scale=1"
                        name="viewport"
                    />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />

                    <link href="./assets/nprogress.css" />

                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />

                    {/* github comments */}
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/octomments/build/ocs-ui.min.css"
                    />
                    <script
                        async
                        src="https://unpkg.com/octomments/build/ocs.min.js"
                    ></script>

                    <script
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
