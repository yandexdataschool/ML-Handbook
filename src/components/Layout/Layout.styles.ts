import '../../styles/modern-normalize.css';
import styled from 'styled-components';
import '../../typography.css';

export const Page = styled.div`
  font-family: 'YS Text', georgia, serif;
  font-style: normal;
  font-weight: normal;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  border: 1px solid green;
`;

export const Main = styled.main`
  border: 1px solid blue;
  font-family: inherit;
  color: inherit;
  font-size: 18px;
  line-height: 28px;
  box-sizing: border-box;
  padding: 10px;
  @media screen and (min-width: 1140px) {
    box-sizing: content-box;
    padding: 0;
    max-width: 1440px;
    margin: 4px auto 0;
    display: flex;
  } ;
`;
