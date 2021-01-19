import React, { useEffect, useRef } from 'react';
import {
    Avatar,
    Flex,
    Heading,
    VStack,
    Text,
    Box,
    Divider,
    HStack,
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import hydrate from 'next-mdx-remote/hydrate';

import { MDXComponents, Comment } from '@components';
import { MainLayout } from '@layouts';
import { Post } from '@types';
import { getPost, postFilePaths } from '@utils';

type PostPageProps = { post: Post };

const PostPage = ({ post }: any) => {
    const { mdxSource, frontMatter } = post;
    const content = hydrate(mdxSource, {
        components: MDXComponents,
    });

    const commentBox = useRef();

    useEffect(() => {
        const commentScript = document.createElement('script');

        commentScript.async = true;

        commentScript.src = 'https://utteranc.es/client.js';

        commentScript.setAttribute('repo', 'muco-rolle/comments');
        commentScript.setAttribute('issue-term', 'pathname');
        commentScript.setAttribute('label', 'blog-comment');
        commentScript.setAttribute('theme', 'github-light');
        commentScript.setAttribute('crossorigin', 'anonymous');

        if (commentBox && commentBox.current) {
            (commentBox.current as any).appendChild(commentScript);
        } else {
            console.log(`Error adding utterances comments on: ${commentBox}`);
        }

        const removeScript = () => {
            commentScript.remove();
            document
                .querySelectorAll('.utterances')
                .forEach((el) => el.remove());
        };

        return () => removeScript();
    }, []);

    return (
        <MainLayout>
            <VStack as="article" align="stretch" spacing={5}>
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

                {/* Post content */}
                <Box>{content}</Box>

                <Heading as="h2" size="lg" fontWeight="900">
                    Comments
                </Heading>
                <Divider color="gray.300" />

                {/* Post comments */}
                <Comment ref={commentBox} />
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
