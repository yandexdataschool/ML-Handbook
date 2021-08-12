import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import * as Styles from './Layout.styles';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Styles.Main>{children}</Styles.Main>
      <Footer />
    </>
  );
};

export default Layout;
