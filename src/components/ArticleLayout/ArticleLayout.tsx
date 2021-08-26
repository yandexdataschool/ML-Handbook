import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../Layout/Layout';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

const ArticleLayout = ({ children }: Props) => {
  const { mdx } = useStaticQuery(graphql`
    query PostQuery($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
          author
        }
      }
    }
  `);

  console.log(mdx);

  return (
    <MDXProvider components={shortcodes}>
      <Layout>
        <Sidebar>SIDEBAR</Sidebar>
        <Content>{children}</Content>
      </Layout>
    </MDXProvider>
  );
};

export default ArticleLayout;
