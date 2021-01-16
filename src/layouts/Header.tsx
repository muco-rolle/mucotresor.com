import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import {
    Box,
    Button,
    ButtonProps,
    Flex,
    HStack,
    IconButton,
    Link,
} from '@chakra-ui/react';
import { Routes } from '@config';
import { SunIcon } from '@chakra-ui/icons';

interface NavLinkProps extends ButtonProps {
    url: string;
    children: ReactNode;
}
export const Header = () => {
    return (
        <Flex
            as="header"
            justifyContent="space-between"
            width="1444px"
            maxW="100%"
            m="0 auto"
            align="center"
            p={4}
            position="sticky"
            top="0"
            zIndex="10"
            style={{ backdropFilter: `saturate(180%) blur(20px)` }}
        >
            {/* Logo */}
            <Box>
                <NextLink href={Routes.home}>
                    <Link>
                        <Box
                            as="span"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg="gray.900"
                            color="white"
                            w="45px"
                            h="45px"
                            border="5px solid"
                            borderColor="green.500"
                            borderRadius="45px"
                            fontWeight="bold"
                            boxShadow="0 0 5px rgba(0, 0, 0, 0.3)"
                        >
                            <Box as="span">T</Box>
                        </Box>
                    </Link>
                </NextLink>
            </Box>

            {/* Nav */}
            <Box as="nav">
                <HStack>
                    <HStack>
                        <NavLink url={Routes.home}>Home</NavLink>
                        <NavLink url={Routes.blog}>Blog</NavLink>
                        <NavLink url={Routes.aboutMe}>About</NavLink>
                    </HStack>
                    <IconButton
                        aria-label="theme-switcher"
                        icon={<SunIcon />}
                        size="md"
                    />
                </HStack>
            </Box>
        </Flex>
    );
};

const NavLink = ({ url, children }: NavLinkProps) => (
    <Button bg="none" fontWeight="normal">
        <NextLink href={url}>
            <Link _hover={{ textDecor: 'none' }}>{children}</Link>
        </NextLink>
    </Button>
);
