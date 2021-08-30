import React from 'react';

import Layout from '../Layout/Layout';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';

type Props = {
  children: React.ReactNode;
};

const ArticleLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Sidebar>SIDEBAR</Sidebar>
      <Content>{children}</Content>
    </Layout>
  );
};

export default ArticleLayout;
