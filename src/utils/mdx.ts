import fs, { readdirSync } from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { join } from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import { DATA_PATH } from '@config';
import { MDXComponents } from '@components';

export const postFilePaths = readdirSync(
    join(DATA_PATH, 'blog')
).filter((path: string) => /\.mdx?$/.test(path));

export const getPosts = async () => {
    return postFilePaths.reduce((postFilePaths, postFilePath) => {
        const source = fs.readFileSync(
            join(DATA_PATH, 'blog', postFilePath),
            'utf8'
        );
        const { data } = matter(source);

        return [
            {
                ...data,
                slug: postFilePath.replace('.mdx', ''),
            },
            ...postFilePaths,
        ];
    }, []);
};

export async function getPost(slug: string) {
    const source = fs.readFileSync(
        join(DATA_PATH, 'blog', `${slug}.mdx`),
        'utf8'
    );

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
