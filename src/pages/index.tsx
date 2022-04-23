import {
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Link,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Routes } from '@config';
import { MainLayout } from '@layouts';
import { Posts } from '@types';
import { getPosts } from '@utils';
import NextLink from 'next/link';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

type HomePageProps = { posts: Posts };
const HomePage = ({ posts }: HomePageProps) => {
    const sortedPosts = posts
        ?.slice(0, 5)
        .sort(
            (prevPost, nextPost) =>
                Number(new Date(nextPost.publishedAt)) -
                Number(new Date(prevPost.publishedAt))
        );

    return (
        <MainLayout>
            {/**********************************************************
             *  HOME PAGE
             *  Intro Section
             * ********************************************************* */}
            <Box>
                <VStack align="flex-start" spacing={5}>
                    <Stack spacing="6">
                        <Stack>
                            <Heading as="h1" size="2xl" fontWeight="900">
                                Trésor Muco
                            </Heading>
                            <Text>
                                Developer Advocate at{' '}
                                <Box
                                    as={Link}
                                    href="https://leapa.co"
                                    color={'green.500'}
                                    fontWeight="900"
                                    target="_blank"
                                >
                                    Leapa
                                </Box>
                            </Text>
                        </Stack>

                        <Text>
                            I&apos;m a full-stack developer, building things
                            with code, mainly with:
                            <Box as="strong">
                                {' '}
                                <br />
                                Typescript, React & Next.js
                            </Box>
                            , <Box as="strong">Node.js & Adonis.js</Box>, and{' '}
                            <Box as="strong">GraphQL</Box>.
                        </Text>
                    </Stack>

                    <Box>
                        <HStack>
                            <HStack spacing={3}>
                                <IconButton
                                    as="a"
                                    href="https://github.com/muco-rolle"
                                    aria-label="Github"
                                    icon={<FiGithub />}
                                    borderRadius="100%"
                                />

                                <IconButton
                                    as="a"
                                    href="https://twitter.com/mucotreso"
                                    aria-label="Twitter"
                                    borderRadius="100%"
                                    icon={<FiTwitter />}
                                />

                                <IconButton
                                    as="a"
                                    href="https://www.linkedin.com/in/muco-tresor-949b131a7/"
                                    aria-label="Twitter"
                                    borderRadius="100%"
                                    icon={<FaLinkedinIn />}
                                />

                                <IconButton
                                    as="a"
                                    href="mailto:mucotresor@gmail.com"
                                    aria-label="Gmail"
                                    icon={<FiMail />}
                                    borderRadius="100%"
                                />
                            </HStack>
                        </HStack>
                    </Box>
                </VStack>
            </Box>

            {/**********************************************************
             *  HOME PAGE
             *  Latest posts sections
             * ********************************************************* */}
            <Box mt={20}>
                <VStack spacing={8} align="stretch">
                    <Heading as="h2" size="xl" fontWeight="900">
                        Latest posts
                    </Heading>

                    <Box>
                        <VStack spacing={8} align="flex-start">
                            {sortedPosts.map(({ title, slug, summary }) => (
                                <NextLink href={`/blog/${slug}`} key={slug}>
                                    <a>
                                        <VStack align="flex-start" spacing={3}>
                                            <Heading
                                                pos="relative"
                                                as="h3"
                                                size="md"
                                                _hover={{
                                                    color: 'green.500',
                                                }}
                                            >
                                                {title}
                                            </Heading>
                                            <Text>{summary}</Text>
                                        </VStack>
                                    </a>
                                </NextLink>
                            ))}

                            {sortedPosts.length >= 5 ? (
                                <NextLink href={Routes.blog}>
                                    <a>
                                        <Button colorScheme="green">
                                            Read All posts
                                        </Button>
                                    </a>
                                </NextLink>
                            ) : null}
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </MainLayout>
    );
};

export async function getStaticProps() {
    const posts = await getPosts();

    return { props: { posts } };
}

export default HomePage;
