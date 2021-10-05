import styled from 'styled-components';

export const Page = styled.div`
  font-family: 'YS Text', georgia, serif;
  font-style: normal;
  font-weight: normal;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
`;

export const MainMain = styled.main`
  font-family: inherit;
  color: inherit;
  font-size: 18px;
  line-height: 28px;
  box-sizing: border-box;
  padding: 10px;
  @media screen and (min-width: 1140px) {
    box-sizing: content-box;
    padding: 0;
    max-width: 1120px;
    margin: 34px auto 30px;
    display: block;
  } ;
`;
