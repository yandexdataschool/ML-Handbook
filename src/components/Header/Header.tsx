import React from 'react';
import * as Styles from './Header.styles';

export const Header = () => {
  return (
    <Styles.Header>
      <Styles.BackToMain>
        <Styles.BackVector />
        <Styles.BackTitle>ML&ndash;Учебник</Styles.BackTitle>
      </Styles.BackToMain>
      <Styles.Title>Об этой книге</Styles.Title>
      <Styles.WBmode>
        <Styles.Theme>
          Белый
          <Styles.Tumbler />
        </Styles.Theme>
        <Styles.Theme>Черный</Styles.Theme>
      </Styles.WBmode>
      <Styles.Find />
    </Styles.Header>
  );
};
