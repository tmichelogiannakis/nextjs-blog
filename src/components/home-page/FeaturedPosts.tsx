import PostsGrid from '../posts/PostsGrid';
import Post from '../../types/post';

type FeaturedPostsProps = {
  posts: Post[];
};

const FeaturedPosts = (props: FeaturedPostsProps): JSX.Element => {
  return (
    <section className="w-9/12 max-w-7xl m-auto my-8">
      <h2 className="text-3xl md:text-6xl text-gray-800 text-center">
        Featured Posts
      </h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
