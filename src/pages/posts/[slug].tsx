import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPostsFiles, getPostData } from '../../utils/posts';
import Post from '../../types/post';

type PostDetailsPageProps = {
  post: Post;
};

const PostDetailPage: NextPage<PostDetailsPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps<
  PostDetailsPageProps,
  {
    slug: string;
  }
> = async context => {
  const { params } = context;
  if (params) {
    const { slug } = params;
    const post = getPostData(slug);
    return {
      props: {
        post
      },
      revalidate: 600
    };
  }

  return {
    notFound: true
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  };
};
