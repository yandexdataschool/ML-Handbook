import styled from 'styled-components';
import backVectorImage from './images/Vector.svg';
import findImage from './images/Find.svg';

export const Header = styled.header`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  display: flex;
  width: 100%;
  min-height: 52px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: 52px;
  display: flex;
  padding-left: 22px;
  padding-right: 13px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: none;
  @media screen and (min-width: 1400px) {
    display: flex;
    font-family: inherit;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
    width: 720px;
    min-height: 24px;
    margin: auto 0;
  }
`;

export const BackToMain = styled.div`
  width: 280px;
  min-height: 24px;
  margin: auto 0;
  display: flex;
`;

export const BackVector = styled.div`
  width: 14px;
  height: 11px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-image: url(${backVectorImage});
`;

export const BackTitle = styled.h2`
  width: 250px;
  min-height: 24px;
  margin-left: 6px;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: rgba(59, 72, 86, 1);
`;

export const Find = styled.button`
  width: 32px;
  height: 32px;
  margin: auto 0;
  background-image: url(${findImage});
  border: none;
  background-color: transparent;
`;
