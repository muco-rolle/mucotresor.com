import { Heading } from '@chakra-ui/react';
import { MainLayout } from '@layouts';
import { getFiles, getPost } from '@utils';

const PostPage = () => {
    return (
        <MainLayout>
            <Heading>Post</Heading>
        </MainLayout>
    );
};

// export async function getStaticPaths() {
//     const posts = await getFiles('blog');

//     return {
//         paths: posts.map((post) => ({
//             params: {
//                 slug: post.replace(/\.mdx/, ''),
//             },
//         })),
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const post = await getPost('blog', params.slug);

//     return { props: post };
// }

export default PostPage;
