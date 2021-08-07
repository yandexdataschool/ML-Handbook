import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import LayoutStyled from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <section>{children}</section>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
