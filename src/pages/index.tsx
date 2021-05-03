import { NextPage } from 'next';
import Head from 'next/head';
import { FC } from 'react';

const Card: FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <a
      className="no-underline text-current text-left p-6 border border-solid border-gray-200 rounded-lg 
      transition-colors duration-150 ease-in-out hover:text-blue-600 hover:border-blue-600"
      {...otherProps}
    >
      {children}
    </a>
  );
};

const CardTitle: FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <h3 className="text-2xl mb-4" {...otherProps}>
      {children}
    </h3>
  );
};

const CardParagraph: FC<React.HTMLProps<HTMLParagraphElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <p className="text-lg m-0 leading-normal" {...otherProps}>
      {children}
    </p>
  );
};

const HomePage: NextPage = () => {
  return (
    <div className="px-2 h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl m-0 leading-tight">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-blue-600 no-underline hover:underline focus:underline active:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-center leading-tight text-2xl">
          Get started by editing{' '}
          <code className="bg-gray-100 rounded p-2 text-lg">
            pages/index.js
          </code>
        </p>

        <div className="mt-12 max-w-3xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <CardParagraph>
              Find in-depth information about Next.js features and API.
            </CardParagraph>
          </Card>
          <Card href="https://nextjs.org/learn">
            <CardTitle>Learn &rarr;</CardTitle>
            <CardParagraph>
              Learn about Next.js in an interactive course with quizzes!
            </CardParagraph>
          </Card>
          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <CardTitle>Examples &rarr;</CardTitle>
            <CardParagraph>
              Discover and deploy boilerplate example Next.js projects.
            </CardParagraph>
          </Card>
          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <CardTitle>Deploy &rarr;</CardTitle>
            <CardParagraph>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </CardParagraph>
          </Card>
        </div>
      </main>

      <footer className="w-full h-24 border-t border-solid border-gray-300 flex justify-center items-center ">
        <a
          className="flex justify-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
