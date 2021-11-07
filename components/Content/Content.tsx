import { ReactNode } from "react";

import * as Styles from './Content.styles';

type Props = {
  children: ReactNode;
};

export const Content = ({ children }: Props) => {
  return <Styles.Content className="prose max-w-max">{children}</Styles.Content>;
};
