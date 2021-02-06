import {
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Text,
    VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MainLayout } from '@layouts';
import { Posts } from '@types';
import { getPosts } from '@utils';
import React from 'react';

import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Routes } from '@config';

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
                    <Heading as="h1" size="2xl" fontWeight="900">
                        Hey, I'm Muco Trésor
                    </Heading>
                    <Text>
                        I'm a self taught Fullstack web developer, I build
                        things with code, mainly with
                        <Box as="strong">: Javascript/Typescript</Box>,{' '}
                        <Box as="strong">ReactJS</Box>,{' '}
                        <Box as="strong">NodeJS</Box>, and{' '}
                        <Box as="strong">GraphQL</Box>.
                    </Text>

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
                                    href="https://twitter.com/dev_muco"
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
                    {/* <Box
                        borderRadius="sm"
                        bg={useColorModeValue('green.50', 'green.900')}
                        borderLeft="5px solid"
                        borderColor={useColorModeValue(
                            'green.500',
                            'green.500'
                        )}
                        py={5}
                        px={5}
                    >
                        <VStack align="flex-start" spacing={5}>
                            <HStack>
                                <Icon
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-1xzrexu"
                                    style={{
                                        color: useColorModeValue(
                                            'green.700',
                                            'green.50'
                                        ),
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                    }}
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </Icon>
                                <Heading
                                    as="h3"
                                    color={useColorModeValue(
                                        'green.700',
                                        'green.50'
                                    )}
                                    fontSize="2xl"
                                >
                                    Hire me!
                                </Heading>
                            </HStack>
                            <Text
                                color={useColorModeValue(
                                    'green.700',
                                    'green.50'
                                )}
                            >
                                I build <b>web apps</b>, <b>websites</b>, and I
                                do <b>Mentorship</b>, and <b>Consulting</b>.
                                Let's discuss your needs and what solutions I
                                can bring.
                            </Text>
                            <HStack spacing={5}>
                                <Link href="mailto:mucotresor@gmail.com">
                                    <Button colorScheme="green">
                                        Contact me
                                    </Button>
                                </Link>
                                <NextLink href={Routes.aboutMe}>
                                    <Button
                                        bg="white"
                                        color="green.500"
                                        border="2px solid"
                                        borderColor="green.500"
                                        _hover={{
                                            bg: 'green.500',
                                            color: 'green.50',
                                        }}
                                    >
                                        More about me
                                    </Button>
                                </NextLink>
                            </HStack>
                        </VStack>
                    </Box> */}
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
