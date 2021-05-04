import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../types/post';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');

export const getPostsFiles = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string): Post => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...(data as {
      title: string;
      image: string;
      excerpt: string;
      date: string;
      isFeatured?: boolean;
    }),
    content
  };

  return postData;
};

export const getAllPosts = (): Post[] => {
  const postFiles = getPostsFiles();
  return postFiles.map(getPostData).sort((x, y) => (x.date > y.date ? -1 : 1));
};

export const getFeaturedPosts = (): Post[] => {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.isFeatured);
};
