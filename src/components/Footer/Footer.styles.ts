import styled from 'styled-components';

export const Footer = styled.footer`
  min-height: 80px;
  padding: 11px 23px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-end;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    max-width: 1440px;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  color: rgba(114, 114, 114, 1);
`;
