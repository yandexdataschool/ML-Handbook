import React from 'react';
import * as Styles from './Header.styles';

// export const Header = () => {
//   return <Styles.Header>Congratulations! It is the best Header</Styles.Header>;
// };

import { Title, BackToMain, BackVector, BackTitle, WBmode, Find } from './Header.styles';

export const Header = () => {
  return (
    <Styles.Header>
      <BackToMain>
        <BackVector />
        <BackTitle>ML-учебник</BackTitle>
      </BackToMain>
      <Title>Вероятностный подход в ML</Title>
      <WBmode />
      <Find />
    </Styles.Header>
  );
};
