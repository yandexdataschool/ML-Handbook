import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import MathBlock from '../MathBlock/MathBlock';
import MathInline from '../MathInline/MathInline';

type ComponentProps = {
  className: string;
  children: React.ReactNode;
};

type LayoutProps = {
  children: React.ReactNode;
};

const Components = {
  div: ({ className, children }: ComponentProps) => {
    if (className?.includes('math-display')) {
      return <MathBlock>{children}</MathBlock>;
    }
    return <div />;
  },
  span: ({ className, children }: ComponentProps) => {
    if (className?.includes('math-inline')) {
      return <MathInline>{children}</MathInline>;
    }
    return <span />;
  },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MDXProvider components={Components}>{children}</MDXProvider>
    </div>
  );
}
