import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import {
  NormalComponents,
  ReactBaseProps,
  ReactMarkdownProps,
  SpecialComponents
} from 'react-markdown/src/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getPostsFiles, getPostData } from '../../utils/posts';
import Post from '../../types/post';

type PostDetailsPageProps = {
  post: Post;
};

const PostDetailPage: NextPage<PostDetailsPageProps> = ({ post }) => {
  const components: Partial<NormalComponents & SpecialComponents> = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        const properties = image.properties as { src: string; alt: string };
        return (
          <div className="w-full max-w-xs my-4 mx-auto">
            <Image
              src={`/images/posts/${post.slug}/${properties.src}`}
              alt={properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p className="text-gray-800">{paragraph.children}</p>;
    },

    code(
      code: ReactBaseProps &
        ReactMarkdownProps & {
          inline?: boolean | undefined;
          className?: string | undefined;
        }
    ) {
      const { className, children } = code;
      const language = className?.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    }
  };

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
            className="post-main-image"
            src={`/images/posts/${post.slug}/${post.image}`}
            alt={post.title}
            width={200}
            height={150}
          />
          <style jsx global>{`
            .post-main-image {
              object-fit: cover;
              width: 200px;
              height: 120px;
            }
          `}</style>
        </header>
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
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
