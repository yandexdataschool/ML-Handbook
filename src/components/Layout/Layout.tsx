import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import MathBlock from '../MathBlock/MathBlock';
import MathInline from '../MathInline/MathInline';

import * as Styles from './Layout.styles';

type Props = {
  children: React.ReactNode;
};

const shortcodes = {
  div: ({ children }: Props) => <MathBlock>{children}</MathBlock>,
  span: ({ children }: Props) => <MathInline>{children}</MathInline>,
};

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
