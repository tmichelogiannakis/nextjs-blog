import PostGridItem from './PostGridItem';
import Post from '../../types/post';

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps): JSX.Element => {
  return (
    <ul className="m-0 p-0 list-none grid grid-cols-post-grid gap-6">
      {posts.map(post => (
        <PostGridItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
