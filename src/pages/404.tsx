import React from 'react';
import NextLink from 'next/link';
import {
    Box,
    Heading,
    Stack,
    Flex,
    Text,
    Button,
    VStack,
} from '@chakra-ui/react';
import { MainLayout } from '@layouts';

const NotFoundPage = () => (
    <MainLayout>
        <VStack as="main" spacing={8} textAlign="center">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                Aie Aie Aie!!! 404 Error
            </Heading>
            <Text my={4}>
                The page you're looking for seems to not exist anymore. Please
            </Text>

            <NextLink href="/" passHref>
                <Button
                    colorScheme="green"
                    as="a"
                    fontWeight="bold"
                    _focus={{ border: 'none' }}
                >
                    Return Home
                </Button>
            </NextLink>
        </VStack>
    </MainLayout>
);

export default NotFoundPage;
