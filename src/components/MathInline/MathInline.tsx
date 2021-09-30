import React from 'react';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

interface MathProps {
  children: React.ReactNode;
}

const MathInline = ({ children }: MathProps) => {
  return <TeX>{String.raw`${children}`}</TeX>;
};

export default MathInline;
