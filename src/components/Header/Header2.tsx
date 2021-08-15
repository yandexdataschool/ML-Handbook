import React from 'react';
import { HeaderStyled, Title, BackToMain, BackVector, BackTitle, WBmode, Find } from './Header.styles';

export default function Header() {
  return (
    <HeaderStyled>
      <BackToMain>
        <BackVector />
        <BackTitle>ML-учебник</BackTitle>
      </BackToMain>
      <Title>Вероятностный подход в ML</Title>
      <WBmode />
      <Find />
    </HeaderStyled>
  );
}
