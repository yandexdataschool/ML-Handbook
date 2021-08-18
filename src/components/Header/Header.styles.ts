import styled from 'styled-components';
import backVectorImage from './images/Vector.png';
import findImage from './images/Find.png';
import tumblerImage from './images/Tumbler.png';

const Header = styled.header`
  margin-top: 0;
  margin-bottom: 0;
  width: 1440px;
  height: 52px;
  display: flex;
`;

const Title = styled.h1`
  width: 720px;
  height: 24px;
  margin-block: 0;
  margin: auto 0;
  margin-left: 40px;
  font-family: 'Yandex Sans Text';
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
`;

const BackToMain = styled.div`
  width: 280px;
  height: 24px;
  margin: auto 20px;
  display: flex;
`;

const BackVector = styled.image`
  width: 14px;
  height: 14px;
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
`;

const Thema = styled.div`
  width: 98px;
  display: flex;
`;

const Tumbler = styled.image`
  width: 46px;
  height: 16px;
  padding-left: 52px;
  background-image: url(${tumblerImage});
  background-repeat: no-repeat;
`;

const Find = styled.image`
  width: 32px;
  height: 32px;
  margin: auto;
  background-image: url(${findImage});
`;

export { Header, Title, BackToMain, BackVector, BackTitle, WBmode, Thema, Tumbler, Find };
