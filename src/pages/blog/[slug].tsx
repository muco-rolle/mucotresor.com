import React, { useEffect, useRef } from 'react';
import {
    Avatar,
    Flex,
    Heading,
    VStack,
    Text,
    Box,
    Divider,
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
        // define the name of the repository you created here as 'owner/repo'
        // or import it from your config file if you have one.
        commentScript.setAttribute('repo', 'muco-rolle/comments');
        // define the blog post -> issue mapping (e.g. page pathname, page url).
        // here the issues will be created with the page pathname as the issue title.
        commentScript.setAttribute('issue-term', 'pathname');
        // define a custom label that you want added to your posts.
        commentScript.setAttribute('label', 'blog-comment');
        // define if you want to use dark or light theme.
        commentScript.setAttribute('theme', 'github-light');
        commentScript.setAttribute('crossorigin', 'anonymous');
        // we will append this script as a child to the ref element we have created above
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
                <Box>{content}</Box>

                <Heading as="h2" size="lg" fontWeight="900">
                    Comments
                </Heading>
                <Divider color="gray.300" />
                <Comment ref={commentBox} />
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
