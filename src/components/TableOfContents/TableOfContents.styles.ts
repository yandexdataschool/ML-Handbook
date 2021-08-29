import styled from 'styled-components';

export const TableOfContents = styled.section`
  display: none;
  @media screen and (min-width: 1140px) {
    display: block;
    min-width: 300px;
    min-height: 20px;
    font-size: 15px;
    border-top: 1px solid rgba(196, 196, 196, 1);
    border-bottom: 1px solid rgba(196, 196, 196, 1);
  }
  @media screen and (min-width: 1440px) {
    display: block;
    min-width: 897px;
  }
`;

export const TableTitle = styled.p`
  min-width: 228px;
  min-height: 36px;
  font-family: inherit;
  font-style: italic;
  font-size: 14px;
`;
