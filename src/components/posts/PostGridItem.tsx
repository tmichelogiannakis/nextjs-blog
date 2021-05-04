import Link from 'next/link';
import Image from 'next/image';
import Post from '../../types/post';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps): JSX.Element => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <li className="shadow bg-gray-800 text-center">
      <Link href={`/posts/${slug}`}>
        <a className="text-gray-100">
          <div className="w-full max-h-80 overflow-hidden">
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
              className="post-image"
            />
            <style jsx global>{`
              .post-image {
                object-fit: cover;
              }
            `}</style>
          </div>
          <div className="p-4">
            <h3 className="my-2 text-base">{title}</h3>
            <time className="italic text-gray-300">{formattedDate}</time>
            <p className="text-base">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
