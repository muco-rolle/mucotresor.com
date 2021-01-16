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

            <link
                rel="preload"
                href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
            />
        </NextHead>
    );
};
