import React from 'react';
import * as Styles from './Switch.styles';

export const Switch = () => {
  return (
    <Styles.WBmode>
      Белый
      <Styles.Tumbler type="checkbox" />
      Черный
    </Styles.WBmode>
  );
};
