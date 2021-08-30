import React from 'react';
import * as Styles from './Header.styles';
import { Switch } from '../Switch/Switch';

export const Header = () => {
  return (
    <Styles.Header>
      <Styles.HeaderWrapper>
        <Styles.BackToMain>
          <Styles.BackVector />
          <Styles.BackTitle>ML&ndash;Учебник</Styles.BackTitle>
        </Styles.BackToMain>
        <Styles.Title>Об этой книге</Styles.Title>
        <Switch />
        <Styles.Find />
      </Styles.HeaderWrapper>
    </Styles.Header>
  );
};
