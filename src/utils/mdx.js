export const getSlug = (path) =>
    path.replace('blog', '').replace('.mdx', '').split('/').pop();
