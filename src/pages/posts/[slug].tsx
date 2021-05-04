import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
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
      <article className="w-11/12 max-w-5xl text-xl leading-8 bg-gray-100 rounded-md my-8 mx-auto p-4 md:p-8">
        <header className="p-8 border-8 border-solid border-primary-100 my-4 mx-0 flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:items-end md:my-8">
          <h1 className="text-3xl text-center leading-initial m-0 text-primary-500 md:text-6xl md:text-left md:leading-initial">
            {post.title}
          </h1>
          <Image
            className="post-image"
            src={`/images/posts/${post.slug}/${post.image}`}
            alt={post.title}
            width={200}
            height={150}
          />
          <style jsx global>{`
            .post-image {
              object-fit: cover;
              width: 200px;
              height: 120px;
            }
          `}</style>
        </header>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
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
