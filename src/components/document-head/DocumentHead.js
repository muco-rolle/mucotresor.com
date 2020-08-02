import NextHead from 'next/head';
import { useColorMode } from '@chakra-ui/core';

export const DocumentHead = () => {
    const { colorMode } = useColorMode();
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
            />

            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            {colorMode === 'light' ? (
                <link rel="stylesheet" href="/assets/nprogress.css" />
            ) : (
                <link rel="stylesheet" href="/assets/nprogress-dark.css" />
            )}
        </NextHead>
    );
};
