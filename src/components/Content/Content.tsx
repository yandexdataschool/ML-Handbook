import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Finisher } from '../Finisher/Finisher';

import * as Styles from './Content.styles';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

export const Content = ({ children }: Props) => {
  return (
    <MDXProvider components={shortcodes}>
      <Styles.Content>
        <Styles.Article>
          <Styles.Cover>
            <Styles.ArticleImage />
            <Styles.CoverImage />
          </Styles.Cover>
          <Styles.ArticleTitle>
            <Styles.TitleNumber>&sect; 4.</Styles.TitleNumber>
            <Styles.TitleText>Вероятностный подход в ML</Styles.TitleText>
          </Styles.ArticleTitle>
          <Styles.ArticleAuthors>
            <Styles.AuthorsTitle>Авторы статьи:</Styles.AuthorsTitle>
            <Styles.AuthorsList>
              <Styles.ArticleAuthor>
                <Styles.AuthorsPhoto />
                <Styles.AuthorsName>
                  Артемий
                  <br />
                  Михеев
                </Styles.AuthorsName>
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
          <Styles.Internal>{children}</Styles.Internal>
        </Styles.Article>
        <Finisher>Далее</Finisher>
      </Styles.Content>
    </MDXProvider>
  );
};
