import styled from 'styled-components';
import circle from './images/CircleLogo.svg';
import square from './images/SquareLogo.svg';
import triangle from './images/TriangleLogo.svg';

export const MainHeader = styled.header`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  min-height: 52px;
`;

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: 52px;
  display: flex;
  padding-top: 13px;
  padding-left: 20px;
  padding-bottom: 16px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  font-family: inherit;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  width: 720px;
  min-height: 24px;
  margin: auto 0;
`;

export const BackToMain = styled.div`
  width: 280px;
  min-height: 24px;
  margin: auto 0;
  display: flex;
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

export const Logos = styled.div`
  display: flex;
  width: 285px;
  height: 22px;
`;

export const TriangleLogo = styled.div`
  width: 23px;
  height: 22px;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-image: url(${triangle});
`;

export const CircleLogo = styled.div`
  width: 23px;
  height: 22px;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-image: url(${circle});
`;

export const SquareLogo = styled.div`
  width: 23px;
  height: 22px;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-image: url(${square});
`;
