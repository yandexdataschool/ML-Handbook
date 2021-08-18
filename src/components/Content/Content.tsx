import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import * as Styles from './Content.styles';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

export const Content = ({ children }: Props) => {
  return (
    <MDXProvider components={shortcodes}>
      <Styles.Content>{children}</Styles.Content>
    </MDXProvider>
  );
};
