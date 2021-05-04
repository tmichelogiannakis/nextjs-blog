import Link from 'next/link';
import { FC } from 'react';

type MenuItemProps = {
  href: string;
};

const MenuItem: FC<MenuItemProps> = ({ href, children }) => {
  return (
    <li className="mx-4">
      <Link href={href}>
        <a className="text-base md:text-xl text-gray-100 hover:text-gray-200">
          {children}
        </a>
      </Link>
    </li>
  );
};

const Layout: FC = ({ children }) => {
  return (
    <>
      <header className="w-full h-24 bg-gray-900 flex justify-between items-center px-4">
        <Link href="/">
          <a>
            <div className="uppercase text-xl md:text-3xl font-bold text-gray-50">
              John&#39;s Blog
            </div>
          </a>
        </Link>
        <nav>
          <ul className="m-0 p-0 flex items-baseline list-none">
            <MenuItem href="/posts">Posts</MenuItem>
            <MenuItem href="/contact">Contact</MenuItem>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
