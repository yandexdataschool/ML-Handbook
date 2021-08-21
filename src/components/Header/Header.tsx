import React from 'react';
import * as Styles from './Header.styles';

// export const Header = () => {
//   return <Styles.Header>Congratulations! It is the best Header</Styles.Header>;
// };

import { Title, BackToMain, BackVector, BackTitle, WBmode, Theme, Tumbler, Find } from './Header.styles';

export const Header = () => {
  return (
    <Styles.Header>
      <BackToMain>
        <BackVector />
        <BackTitle>ML&ndash;Учебник</BackTitle>
      </BackToMain>
      <Title>Об этой книге</Title>
      <WBmode>
        <Theme>
          Белый
          <Tumbler />
        </Theme>
        <Theme>Черный</Theme>
      </WBmode>
      <Find />
    </Styles.Header>
  );
};
