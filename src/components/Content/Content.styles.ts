import styled from 'styled-components';

import contentImage from './images/rectangle.jpg';
import coverImage from './images/penguins.png';

export const Content = styled.section`
  max-width: 1140px;
  margin-left: 13px;
  @media screen and (min-width: 1440px) {
    padding-left: 44px;
    padding-right: 181px;
  }
`;

export const Cover = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-top: 50px;
    margin-left: -7px;
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

export const Internal = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;

export const InternalTitel = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #000;
  @media screen and (min-width: 1440px) {
    display: block;
    font-size: 44px;
    font-weight: 700;
  }
`;

export const InternalAuthors = styled.div`
  display: block;
  width: 263px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 117px;
    width: 789px;
    height: 107px;
  }
`;

export const InternalAuthor = styled.div`
  display: flex;
  width: 263px;
  height: 107px;
`;

export const AuthorsPhoto = styled.div`
  width: 72px;
  height: 72px;
  margin-right: 11px;
  background-color: rgba(229, 229, 229, 1);
  border-radius: 50%;
`;

export const AuthorsName = styled.p`
  max-width: 190px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #3b4856;
`;
