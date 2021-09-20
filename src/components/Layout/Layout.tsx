import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import MathBlock from '../MathBlock/MathBlock';
import MathInline from '../MathInline/MathInline';
import Link from '../Link/Link';

import * as Styles from './Layout.styles';

deckDeckGoHighlightElement();

type Props = {
  children: React.ReactNode;
};

type MathProps = {
  children: React.ReactNode;
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const shortcodes = {
  div: ({ children }: MathProps) => <MathBlock>{children}</MathBlock>,
  span: ({ children }: MathProps) => <MathInline>{children}</MathInline>,
  a: ({ href, children }: LinkProps) => <Link href={href}>{children}</Link>,
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
