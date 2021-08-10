import React from 'react';
import { HeaderStyled, Title, Back, WBmode, Find } from './Header.styles';

export default function Header() {
  return (
    <HeaderStyled>
      <Back>ML-учебник</Back>
      <Title>Вероятностный подход в ML</Title>
      <WBmode />
      <Find />
    </HeaderStyled>
  );
}
