import { NextPage } from 'next';
import AllPosts from '../components/posts/AllPosts';

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
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
