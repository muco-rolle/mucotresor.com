import NextHead from 'next/head';

type DocumentHeadProps = {
    title?: string;
};

export const DocumentHead = ({ title }: DocumentHeadProps) => {
    return (
        <NextHead>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="theme-color" content="#3182ce" />

            {/* <link
                rel="preload"
                href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
            /> */}

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
        </NextHead>
    );
};
