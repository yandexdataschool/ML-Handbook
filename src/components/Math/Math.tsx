import React from 'react';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const Math = ({ children }: { children: React.Component }) => {
  return <TeX block>{String.raw`${children.props.children}`}</TeX>;
};

export default Math;
