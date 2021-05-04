import { GetStaticProps, NextPage } from 'next';
import PostGrid from '../../components/posts/PostGrid';
import Post from '../../types/post';
import { getAllPosts } from '../../utils/posts';

type PostsPageProps = {
  posts: Post[];
};

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <section className="w-4/5 max-w-5xl my-8 mx-auto">
      <h1 className="text-3xl md:text-6xl text-center text-gray-800">
        All Posts
      </h1>
      <PostGrid posts={posts} />
    </section>
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
