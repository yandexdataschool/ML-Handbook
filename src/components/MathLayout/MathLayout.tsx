import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import MathBlock from '../MathBlock/MathBlock';
import MathInline from '../MathInline/MathInline';

type ComponentProps = {
  children: React.ReactNode;
};

const mathComponents = {
  div: ({ children }: ComponentProps) => <MathBlock>{children}</MathBlock>,
  span: ({ children }: ComponentProps) => <MathInline>{children}</MathInline>,
};

export default function Layout({ children }: ComponentProps) {
  return (
    <div>
      <MDXProvider components={mathComponents}>{children}</MDXProvider>
    </div>
  );
}
