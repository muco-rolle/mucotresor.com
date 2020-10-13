import React from 'react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { Flex, useColorMode } from '@chakra-ui/core';

import { Logo } from './Logo';
import { Nav } from './Nav';

const StyledHeader = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;

    @media screen and (max-width: 425px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Header = () => {
    const { colorMode } = useColorMode();

    const navBgColor = {
        light: 'rgba(255, 255, 255, 0.8)',
        dark: 'rgba(23, 25, 35, 0.8)'
    };

    return (
        <StyledHeader
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="900px"
            width="100%"
            bg={navBgColor[colorMode]}
            as="nav"
            mt={[0, 4]}
            p="4"
            mb={8}
            mx="auto"
        >
            <Logo />
            <Nav />
        </StyledHeader>
    );
};
