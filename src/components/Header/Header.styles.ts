import styled from 'styled-components';
import backVectorImage from './images/Vector.svg';
import findImage from './images/Find.svg';
import tumblerImage from './images/Tumbler.svg';

const Header = styled.header`
  margin-top: 0;
  margin-bottom: 0;
  max-width: 1440px;
  height: 52px;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  display: none;
  @media screen and (min-width: 1400px) {
    display: flex;
    width: 720px;
    height: 24px;
    margin-block: 0;
    margin: auto 0;
    margin-left: 40px;
    font-family: 'Yandex Sans Text';
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
  }
`;

const BackToMain = styled.div`
  width: 280px;
  height: 24px;
  margin: auto 0;
  display: flex;
`;

const BackVector = styled.div`
  width: 14px;
  height: 10px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-image: url(${backVectorImage});
`;

const BackTitle = styled.h2`
  width: 250px;
  height: 24px;
  margin-left: 6px;
  margin-block: 0;
  font-family: 'Yandex Sans Text';
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: rgba(59, 72, 86, 1);
`;

const WBmode = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    margin: auto 0;
    margin-left: 10px;
    width: 204px;
    height: 21px;
    font-family: 'Yandex Sans Text';
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    color: rgba(59, 72, 86, 1);
    display: flex;
  }
`;

const Theme = styled.div`
  width: 98px;
  display: flex;
`;

const Tumbler = styled.div`
  width: 46px;
  height: 16px;
  padding-left: 52px;
  background-image: url(${tumblerImage});
  background-repeat: no-repeat;
`;

const Find = styled.div`
  width: 32px;
  height: 32px;
  margin: auto 0;
  background-image: url(${findImage});
`;

export { Header, Title, BackToMain, BackVector, BackTitle, WBmode, Theme, Tumbler, Find };
