import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import PostsGrid from '../components/posts/PostsGrid';
import Post from '../types/post';
import { getFeaturedPosts } from '../utils/posts';

type HomePageProps = {
  posts: Post[];
};

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-center py-8">
        <div className="w-80 h-80 shadow rounded-full overflow-hidden bg-gray-700 m-auto">
          <Image
            src="/images/john.jpg"
            alt="An image showing John"
            width={320}
            height={320}
          />
        </div>
        <h1 className="text-6xl my-4 text-gray-300">Hi, I am John</h1>
        <p className="text-2xl text-gray-200 w-9/12 max-w-2xl m-auto">
          I blog about web development - especially frontend frameworks like
          Angular or React.
        </p>
      </section>
      <section className="w-9/12 max-w-7xl m-auto my-8">
        <h2 className="text-3xl md:text-6xl text-gray-800 text-center">
          Featured Posts
        </h2>
        <PostsGrid posts={posts} />
      </section>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  };
};
