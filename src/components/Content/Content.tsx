import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
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

const shortcodes = { Math };

export const Content = ({ children }: Props) => {
  console.log(children[0]);
  return (
    <MDXProvider components={shortcodes}>
      <Styles.Content>
        <Cover>
          <ContentImage />
          <CoverImage />
        </Cover>
        <Internal>
          <InternalTitel>Title: {children[0].props.children}</InternalTitel>
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

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            author
            title
          }
        }
      }
    }
  }
`;
