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

            <link rel="stylesheet" href="/assets/nprogress.css" />
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <meta
                name="google-site-verification"
                content="Te66lIxLEh-pkFheryKlLrZQpoVmhxXq256HUTPGyHw"
            />

            {colorMode === 'light' ? (
                <link rel="stylesheet" href="/assets/nprogress.css" />
            ) : (
                <link rel="stylesheet" href="/assets/nprogress-dark.css" />
            )}
        </NextHead>
    );
};
