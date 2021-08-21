import styled from 'styled-components';

import contentImage from './images/rectangle.jpg';
import coverImage from './images/penguins.png';

export const Content = styled.section`
  max-width: 1140px;
  padding-left: 44px;
`;

export const Cover = styled.div`
  display: none;
  @media screen and (min-width: 1140px) {
    margin-top: 50px;
    margin-left: 37px;
    display: block;
    width: 911px;
    height: 408px;
  }
`;

export const ContentImage = styled.div`
  width: 911px;
  height: 356px;
  margin: 0;
  background-repeat: no-repeat;
  background-image: url(${contentImage});
`;

export const CoverImage = styled.div`
  width: 438px;
  height: 137px;
  margin-top: -85px;
  margin-left: 461px;
  z-index: 2;
  background-repeat: no-repeat;
  background-image: url(${coverImage});
`;
