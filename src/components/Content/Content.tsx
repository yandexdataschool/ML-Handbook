import React from 'react';
import Helmet from 'react-helmet';
// import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import { graphql } from 'gatsby';
import { TableOfContents } from '../TableOfContents/TableOfContents';
import { Finisher } from '../Finisher/Finisher';

import * as Styles from './Content.styles';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

const Content = ({ children }: Props, { data }) => {
  return (
    <MDXProvider components={shortcodes}>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Styles.Content>
            <Styles.Article>
              <Styles.Cover>
                <Styles.ArticleImage />
                <Styles.CoverImage />
              </Styles.Cover>
              <Styles.ArticleTitle>
                <Styles.TitleNumber />
                <Helmet>
                  <Styles.TitleText>{node.frontmatter.title}</Styles.TitleText>
                </Helmet>
              </Styles.ArticleTitle>
              <Styles.ArticleAuthors>
                <Styles.AuthorsTitle>Авторы статьи:</Styles.AuthorsTitle>
                <Styles.AuthorsList>
                  <Styles.ArticleAuthor>
                    <Styles.AuthorsPhoto />
                    <Styles.AuthorsName>{node.frontmatter.author}</Styles.AuthorsName>
                  </Styles.ArticleAuthor>
                  <Styles.ArticleAuthor>
                    <Styles.AuthorsPhoto />
                    <Styles.AuthorsName>
                      Федот
                      <br />
                      Станиславский
                    </Styles.AuthorsName>
                  </Styles.ArticleAuthor>
                  <Styles.ArticleAuthor>
                    <Styles.AuthorsPhoto />
                    <Styles.AuthorsName>
                      Константин
                      <br />
                      Константиновский
                    </Styles.AuthorsName>
                  </Styles.ArticleAuthor>
                </Styles.AuthorsList>
              </Styles.ArticleAuthors>
              <TableOfContents />
              <Styles.Internal>{children}</Styles.Internal>
            </Styles.Article>
            <Finisher>Далее</Finisher>
          </Styles.Content>
        </article>
      ))}
    </MDXProvider>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          author
          tg
          title
          toc
        }
        id
        slug
      }
    }
  }
`;

export default Content;
