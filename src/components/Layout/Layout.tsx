import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../../../node_modules/modern-normalize/modern-normalize.css';
import './layout.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import * as Styles from './Layout.styles';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

const Layout = ({ children }: Props) => {
  return (
    <MDXProvider components={shortcodes}>
      <Styles.Page>
        <Header />
        <Styles.Main>{children}</Styles.Main>
        <Footer />
      </Styles.Page>
    </MDXProvider>
  );
};

export default Layout;
