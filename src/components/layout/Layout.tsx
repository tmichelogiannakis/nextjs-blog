import { FC } from 'react';
import MainNavigation from './MainNavigation';

const Layout: FC = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
