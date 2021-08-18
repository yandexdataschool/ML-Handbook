import React from 'react';
import * as Styles from './Header.styles';

// export const Header = () => {
//   return <Styles.Header>Congratulations! It is the best Header</Styles.Header>;
// };

import { Title, BackToMain, BackVector, BackTitle, WBmode, Thema, Tumbler, Find } from './Header.styles';

export const Header = () => {
  return (
    <Styles.Header>
      <BackToMain>
        <BackVector />
        <BackTitle>ML&ndash;Учебник</BackTitle>
      </BackToMain>
      <Title>Вероятностный подход в ML</Title>
      <WBmode>
        <Thema>
          Белый
          <Tumbler />
        </Thema>
        <Thema>Черный</Thema>
      </WBmode>
      <Find />
    </Styles.Header>
  );
};
