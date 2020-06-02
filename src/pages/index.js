import React from 'react';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link
} from '@chakra-ui/core';

import { Container } from 'components';

const Index = () => {
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <Container>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        Hello, I’m Muco Trésor
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]}>
                        I'm Fullstack developer, I build things with code,
                        mainly with <strong>Javascript/Typescript,</strong>{' '}
                        <strong>ReactJS, </strong>
                        <strong>NodeJS, </strong>
                        <strong>and GraphQL</strong>. I'm currently working as
                        Freelance developer at{' '}
                        <Link
                            href="https://edgco.fr"
                            target="_blank"
                            fontWeight="900"
                        >
                            EDGCo
                        </Link>
                    </Text>
                </Flex>
            </Stack>
        </Container>
    );
};

export default Index;
