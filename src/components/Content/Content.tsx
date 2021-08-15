import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';
import * as Styles from './Content.styles';

import {
  Cover,
  ImageFrame,
  CoverImage,
  NotFoundImage,
  PinguinsImage,
  TitleFrame,
  Paragraph,
  Title,
  AuthorsFrame,
} from './Content.styles';

type Props = {
  children: React.ReactNode;
};

const shortcodes = { Math };

export const Content = ({ children }: Props) => {
  console.log(children);

  const title = children[0].props.children;

  return (
    <MDXProvider components={shortcodes}>
      <Styles.Content>
        <Cover>
          <ImageFrame>
            <CoverImage />
            <NotFoundImage />
            <PinguinsImage />
          </ImageFrame>
          <TitleFrame>
            <Paragraph>4</Paragraph>
            <Title>{title}</Title>
          </TitleFrame>
          <AuthorsFrame>Авторы главы</AuthorsFrame>
        </Cover>
        {children}
      </Styles.Content>
    </MDXProvider>
  );
};
