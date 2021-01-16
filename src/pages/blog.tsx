import NextLink from 'next/link';
import { Box, Heading } from '@chakra-ui/react';
import { MainLayout } from '@layouts';
import { Posts } from '@types';
import { getPosts } from '@utils';
import React from 'react';
import Link from 'next/link';

type BlogPageProps = {
    posts: Posts;
};
const BlogPage = ({ posts }: BlogPageProps) => {
    return (
        <MainLayout>
            <Heading>Blog</Heading>

            <Box>
                {posts.map(({ slug, title }) => (
                    <Box>
                        <NextLink href={`/blog/${slug}`}>
                            <a>{title}</a>
                        </NextLink>
                    </Box>
                ))}
            </Box>
        </MainLayout>
    );
};

export async function getStaticProps() {
    const posts = await getPosts('blog');

    return { props: { posts } };
}

export default BlogPage;
