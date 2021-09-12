import React from 'react';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

interface MathProps {
  children: React.ReactNode;
}

const MathBlock = ({ children }: MathProps) => {
  return <TeX block>{String.raw`${children}`}</TeX>;
};

export default MathBlock;
