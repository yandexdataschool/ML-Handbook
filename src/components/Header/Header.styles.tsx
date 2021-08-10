import styled from 'styled-components';

const HeaderStyled = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  width: 1440px;
  height: 52px;
  display: flex;
`;

const Title = styled.h1`
  width: 720px;
  height: 24px;
  font-family: 'Yandex Sans Text';
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  margin-left: 10px;
`;

const Back = styled.h2`
  width: 250px;
  height: 24px;
  margin-left: 50px;
  font-family: 'Yandex Sans Text';
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: rgba(59, 72, 86, 1);
`;

const WBmode = styled.h2`
  width: 236px;
  height: 21px;
  margin-left: 28px;
  font-family: 'Yandex Sans Text';
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 17.5px;
  color: rgba(59, 72, 86, 1);
`;

const Find = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 54px;
`;

export { HeaderStyled, Title, Back, WBmode, Find };
