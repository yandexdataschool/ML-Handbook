import React from 'react';
import * as Styles from './Switch.styles';

export const Switch = () => {
  return (
    <Styles.WBmode>
      <Styles.Theme>Белый</Styles.Theme>
      <Styles.Tumbler type="checkbox" />
      <Styles.Theme>Черный</Styles.Theme>
    </Styles.WBmode>
  );
};
