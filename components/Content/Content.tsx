import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Content = ({ children }: Props) => {
  return <section className="prose max-w-max">{children}</section>;
};
