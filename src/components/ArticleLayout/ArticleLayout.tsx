import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../Layout/Layout';
import { Sidebar } from '../Sidebar/Sidebar';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

const ArticleLayout = ({ children }: Props) => {
  return (
    <MDXProvider components={shortcodes}>
      <Layout>
        <Sidebar>SIDEBAR</Sidebar>
        {children}
      </Layout>
    </MDXProvider>
  );
};

export default ArticleLayout;
