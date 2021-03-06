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
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { Routes } from '@config';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

interface NavLinkProps extends ButtonProps {
    url: string;
    children: ReactNode;
}
export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            as="header"
            position="sticky"
            justifyContent="space-between"
            width="1024px"
            maxW="100%"
            m="0 auto"
            mb={8}
            align="center"
            p={4}
            top="0"
            zIndex={10}
            bg={useColorModeValue(
                'rgba(255, 255, 255, 0.8)',
                'rgba(26, 32, 44,0.8)'
            )}
            style={{
                backdropFilter: `saturate(180%) blur(20px)`,
                transition: 'background-color 0.1 ease-in-out',
            }}
        >
            {/* Logo */}
            <Box>
                <NextLink href={Routes.home}>
                    <Link _hover={{ textDecor: 'none' }}>
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
                            <Box
                                as="span"
                                fontFamily="inherit"
                                fontWeight="bold"
                                fontSize="10px"
                            >
                                MT
                            </Box>
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
                        <NavLink url={Routes.aboutMe}>About me</NavLink>
                        {/* <NavLink url={Routes.contactMe}>Contact me</NavLink> */}
                    </HStack>
                    <IconButton
                        onClick={toggleColorMode}
                        aria-label="theme-switcher"
                        icon={
                            colorMode === 'light' ? <MoonIcon /> : <SunIcon />
                        }
                        size="md"
                        borderRadius="100px"
                        bg="none"
                    />
                </HStack>
            </Box>
        </Flex>
    );
};

const NavLink = ({ url, children }: NavLinkProps) => (
    <NextLink href={url}>
        <Link _hover={{ textDecor: 'none' }}>
            <Button
                bg="none"
                fontWeight="normal"
                _hover={{ bg: 'green.100', color: 'green.700' }}
                _active={{ bg: 'green.200' }}
            >
                {children}
            </Button>
        </Link>
    </NextLink>
);
