import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { join } from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import { ROOT_PATH } from '@config';
import { MDXComponents } from '@components';

export const getPosts = async (type: string) => {
    const posts = fs.readdirSync(join(ROOT_PATH, 'data', type));

    return posts.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(
            join(ROOT_PATH, 'data', type, postSlug),
            'utf8'
        );
        const { data } = matter(source);

        return [
            {
                ...data,
                slug: postSlug.replace('.mdx', ''),
            },
            ...allPosts,
        ];
    }, []);
};

export async function getPost(type: string, slug: string) {
    const source = slug
        ? fs.readFileSync(join(ROOT_PATH, 'data', type, `${slug}.mdx`), 'utf8')
        : fs.readFileSync(join(ROOT_PATH, 'data', `${type}.mdx`), 'utf8');

    const { data, content } = matter(source);
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                require('remark-autolink-headings'),
                require('remark-slug'),
                require('remark-code-titles'),
            ],
            rehypePlugins: [mdxPrism],
        },
    });

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data,
        },
    };
}

export async function getFiles(type: string) {
    return fs.readdirSync(join(ROOT_PATH, 'data', type));
}
