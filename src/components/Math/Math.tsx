import React from 'react';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

interface MathProps {
  block: boolean;
  children: React.Component;
}

const Math = ({ block, children }: MathProps) => {
  return block ? (
    <TeX block>{String.raw`${children.props.children}`}</TeX>
  ) : (
    <TeX>{String.raw`${children.props.children}`}</TeX>
  );
};

export default Math;
