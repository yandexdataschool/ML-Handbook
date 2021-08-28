import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import * as Styles from './Content.styles';
import {
  Cover,
  ContentImage,
  CoverImage,
  Internal,
  InternalTitel,
  InternalAuthors,
  InternalAuthor,
  AuthorsPhoto,
  AuthorsName,
} from './Content.styles';

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props) => {
  return (
    <MDXProvider components={shortcodes}>
      <Styles.Content>
        <Cover>
          <ContentImage />
          <CoverImage />
        </Cover>
        <Internal>
          <InternalTitel>Title: </InternalTitel>
          <InternalAuthors>
            <InternalAuthor>
              <AuthorsPhoto />
              <AuthorsName>
                Артемий
                <br />
                Михеев
              </AuthorsName>
            </InternalAuthor>
            <InternalAuthor>
              <AuthorsPhoto />
              <AuthorsName>
                Федот
                <br />
                Станиславский
              </AuthorsName>
            </InternalAuthor>
            <InternalAuthor>
              <AuthorsPhoto />
              <AuthorsName>
                Константин
                <br />
                Константиновский
              </AuthorsName>
            </InternalAuthor>
          </InternalAuthors>
          {children}
        </Internal>
      </Styles.Content>
    </MDXProvider>
  );
};
