import React from 'react';
import NextLink from 'next/link';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    Button
} from '@chakra-ui/core';

import { Container, Contacts, BlogPost } from 'components';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx';

const Index = () => {
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    const filteredBlogPosts = blogPosts
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) -
                Number(new Date(a.publishedAt))
        )
        .slice(0, 4);

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
                        I'm a self taught Fullstack developer, I build things
                        with code, mainly with{' '}
                        <strong>Javascript/Typescript,</strong>{' '}
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
                        .
                    </Text>

                    <Contacts />

                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        mt={8}
                    >
                        <Heading
                            letterSpacing="tight"
                            mb={4}
                            size="xl"
                            fontWeight={700}
                        >
                            Lastest Posts
                        </Heading>
                        {filteredBlogPosts.map((frontMatter) => (
                            <BlogPost
                                key={frontMatter.title}
                                {...frontMatter}
                            />
                        ))}

                        {filteredBlogPosts.length > 3 ? (
                            <NextLink href="/blog">
                                <Link _hover={{ textDecoration: 'none' }}>
                                    <Button as="a">Read more</Button>
                                </Link>
                            </NextLink>
                        ) : null}
                    </Flex>
                </Flex>
            </Stack>
        </Container>
    );
};

export default Index;
