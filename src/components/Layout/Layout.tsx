import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import * as Styles from './Layout.styles';

deckDeckGoHighlightElement();

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
