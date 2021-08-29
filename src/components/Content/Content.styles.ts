import styled from 'styled-components';

import contentImage from './images/rectangle.jpg';
import coverImage from './images/penguins.png';

export const Content = styled.section`
  border: 1px solid red;
  max-width: 1140px;
  @media screen and (min-width: 1140px) {
    max-width: 820px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1120px;
  }
`;

export const Article = styled.section`
  border: 1px solid black;
  box-sizing: border-box;
  max-width: 1140px;
  @media screen and (min-width: 1140px) {
    max-width: 820px;
    padding: 50px 90px 28px 22px;
    box-shadow: 0px 4px 32px 2px rgba(0, 0, 0, 0.06);
  }
  @media screen and (min-width: 1440px) {
    max-width: 1120px;
    padding-left: 44px;
    padding-right: 181px;
  }
`;

export const Cover = styled.div`
  display: none;
  @media screen and (min-width: 1140px) {
    display: block;
    max-width: 728px;
    max-height: 408px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 911px;
    max-height: 408px;
  }
`;

export const ArticleImage = styled.div`
  background-repeat: no-repeat;
  background-image: url(${contentImage});
  border-radius: 12px;
  @media screen and (min-width: 1140px) {
    width: 728px;
    height: 283px;
  }
  @media screen and (min-width: 1440px) {
    width: 911px;
    height: 356px;
  }
`;

export const CoverImage = styled.div`
  z-index: 2;
  background-repeat: no-repeat;
  background-image: url(${coverImage});
  background-size: contain;
  @media screen and (min-width: 1140px) {
    width: 350px;
    height: 109px;
    margin-top: -75px;
    margin-left: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 438px;
    height: 137px;
    margin-top: -85px;
    margin-left: 461px;
  }
`;

export const Internal = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    max-width: 1120px;
  }
`;

export const ArticleTitle = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 1);
  min-width: 320px;
  min-height: 47px;
  display: flex;
  @media screen and (min-width: 1140px) {
    font-size: 44px;
  }
`;

export const TitleNumber = styled.p`
  font-weight: 400;
  margin-right: 6px;
  min-width: 20px;
`;

export const TitleText = styled.p`
  font-weight: 700;
  min-width: 280px;
`;

export const ArticleAuthors = styled.div`
  display: block;
  min-width: 227px;
  margin-left: 30px;
  @media screen and (min-width: 1440px) {
    margin-left: 117px;
  }
`;

export const AuthorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 227px);
`;

export const AuthorsTitle = styled.p`
  min-width: 228px;
  min-height: 36px;
  font-family: inherit;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
`;

export const ArticleAuthor = styled.div`
  display: flex;
  min-width: 227px;
  min-height: 107px;
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
  color: rgba(59, 72, 86, 1);
`;
