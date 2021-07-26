import React from 'react';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const Math = ({ children }: { children: string }) => {
  return <TeX block>{String.raw`${children}`}</TeX>;
};

export default Math;
