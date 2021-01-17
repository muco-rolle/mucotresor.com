import NextLink from 'next/link';
import {
    Box,
    Button,
    Heading,
    VStack,
    Text,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { MainLayout } from '@layouts';
import { Posts } from '@types';
import { getPosts } from '@utils';
import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';

type BlogPageProps = {
    posts: Posts;
};
const BlogPage = ({ posts }: BlogPageProps) => {
    return (
        <MainLayout>
            <VStack spacing={8} align="stretch">
                <VStack align="stretch" spacing={5}>
                    <Heading as="h2" size="xl" fontWeight="900">
                        Blog
                    </Heading>
                    <Text>
                        {`This blog contains posts to level up your programming skills and career as a self-taught programmer.`}
                    </Text>
                    <InputGroup my={4} mr={4} w="100%">
                        <Input
                            aria-label="Search articles"
                            // onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search articles"
                            _focus={{ borderColor: 'green.500' }}
                        />
                        <InputRightElement>
                            <Icon
                                icon={<Search2Icon />}
                                name="search"
                                color="gray.300"
                            />
                        </InputRightElement>
                    </InputGroup>
                </VStack>

                <Box>
                    <VStack spacing={8} align="flex-start">
                        <Heading as="h2" size="xl" fontWeight="900">
                            All posts
                        </Heading>

                        {posts?.sort().map(({ title, slug, summary }) => (
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
                    </VStack>
                </Box>
            </VStack>
        </MainLayout>
    );
};

export async function getStaticProps() {
    const posts = await getPosts();

    return { props: { posts } };
}

export default BlogPage;
