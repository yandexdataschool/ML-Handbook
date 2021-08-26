import React from 'react';
import * as Styles from './Footer.styles';

export const Footer = () => {
  return (
    <Styles.FooterWrapper>
      <Styles.Footer>
        <Styles.FooterText>
          &copy; Школа анализа данных, 2007 &ndash; 2021. ООО &laquo;Яндекс&raquo; не оказывает образовательных услуг
        </Styles.FooterText>
      </Styles.Footer>
    </Styles.FooterWrapper>
  );
};
