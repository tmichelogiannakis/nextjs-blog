import { NextPage } from 'next';
import PostsGrid from '../../components/posts/PostsGrid';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Accusamus. Elit? Non mauris dolorem rutrum tenetur vulputate aute odit perspiciatis tellus necessitatibus cubilia reiciendis tempus.',
    date: '2021-02-02'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Accusamus. Elit? Non mauris dolorem rutrum tenetur vulputate aute odit perspiciatis tellus necessitatibus cubilia reiciendis tempus.',
    date: '2021-02-02'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Accusamus. Elit? Non mauris dolorem rutrum tenetur vulputate aute odit perspiciatis tellus necessitatibus cubilia reiciendis tempus.',
    date: '2021-02-02'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Accusamus. Elit? Non mauris dolorem rutrum tenetur vulputate aute odit perspiciatis tellus necessitatibus cubilia reiciendis tempus.',
    date: '2021-02-02'
  }
];

const PostsPage: NextPage = () => {
  return (
    <section className="w-4/5 max-w-5xl my-8 mx-auto">
      <h1 className="text-3xl md:text-6xl text-center text-gray-800">
        All Posts
      </h1>
      <PostsGrid posts={DUMMY_POSTS} />
    </section>
  );
};

export default PostsPage;
