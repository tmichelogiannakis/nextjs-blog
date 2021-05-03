import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-center py-8">
      <div className="w-80 h-80 shadow rounded-full overflow-hidden bg-gray-700 m-auto">
        <Image
          src="/images/john.jpg"
          alt="An image showing John"
          width={320}
          height={320}
        />
      </div>
      <h1 className="text-6xl my-4 text-gray-300">Hi, I am John</h1>
      <p className="text-2xl text-gray-200 w-9/12 max-w-2xl m-auto">
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
