import React from 'react';
import { Avatar, Flex, Heading, VStack, Text } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import hydrate from 'next-mdx-remote/hydrate';

import { getPost, postFilePaths } from '@utils';
import { Post } from '@types';
import { MainLayout } from '@layouts';
import { MDXComponents } from '@components';

type PostPageProps = { post: Post };

const PostPage = ({ post }: any) => {
    const { mdxSource, frontMatter } = post;
    const content = hydrate(mdxSource, {
        components: MDXComponents,
    });

    return (
        <MainLayout>
            <VStack as="article" spacing={8}>
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    w="100%"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        {frontMatter.title}
                    </Heading>
                    <Flex
                        justify="space-between"
                        align={['initial', 'center']}
                        direction={['column', 'row']}
                        mt={2}
                        w="100%"
                        mb={4}
                    >
                        <Flex align="center">
                            <Avatar
                                size="sm"
                                name="Muco Tresor"
                                src="/assets/muco.jpg"
                                mr={2}
                            />
                            <Text fontSize="sm">
                                {frontMatter.by}
                                {'Muco Trésor/ '}
                                {format(
                                    parseISO(frontMatter.publishedAt),
                                    'MMMM dd, yyyy'
                                )}
                            </Text>
                        </Flex>
                        <Text
                            fontSize="sm"
                            color="gray.500"
                            minWidth="100px"
                            mt={[2, 0]}
                        >
                            {frontMatter.readingTime.text}
                        </Text>
                    </Flex>
                </Flex>
                {content}

                {/* <Comments /> */}
                {/* <Utterances /> */}
            </VStack>
        </MainLayout>
    );
};

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug);

    return {
        props: { post },
    };
}

export async function getStaticPaths() {
    return {
        paths: postFilePaths.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, ''),
            },
        })),
        fallback: false,
    };
}

export default PostPage;
