import PostsGrid from './PostsGrid';
import Post from '../../types/post';

type AllPostsProps = {
  posts: Post[];
};

const AllPosts = (props: AllPostsProps): JSX.Element => {
  return (
    <section className="w-4/5 max-w-5xl my-8 mx-auto">
      <h1 className="text-3xl md:text-6xl text-center text-gray-800">
        All Posts
      </h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
