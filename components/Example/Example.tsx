import { ReactNode } from "react";

import * as Styles from "./Example.styles";

type Props = {
  children: ReactNode;
};

export const Example = ({ children }: Props) => {
  return <Styles.Example>{children}</Styles.Example>;
};
