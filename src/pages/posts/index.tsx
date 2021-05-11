import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PostGrid from '../../components/posts/PostGrid';
import Post from '../../types/post';
import { getAllPosts } from '../../utils/posts';

type PostsPageProps = {
  posts: Post[];
};

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>John&#39;s Blog - Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <section className="w-4/5 max-w-5xl my-8 mx-auto">
        <h1 className="my-4 text-3xl md:text-6xl text-center text-gray-800">
          All Posts
        </h1>
        <PostGrid posts={posts} />
      </section>
    </>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts
    }
  };
};
