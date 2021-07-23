import React from 'react';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const Math = ({ math }: { math: string }) => {
  return <TeX block math={math} />;
};

export default Math;
