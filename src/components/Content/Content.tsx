import React from 'react';

import * as Styles from './Content.styles';

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props) => {
  return <Styles.Content>{children}</Styles.Content>;
};
