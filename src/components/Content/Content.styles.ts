import styled from 'styled-components';
import notFoundImage from './images/Vector.jpg';
import penguinsImage from './images/Penguins.png';

export const Content = styled.section`
  width: 1140px;
  min-height: 952px;
  border: 1px solid aquamarine;
`;

export const Cover = styled.div`
  width: 1140px;
  height: 810px;
`;

export const ImageFrame = styled.div`
  width: 916px;
  height: 408px;
  display: flex;
`;

export const CoverImage = styled.image`
  width: 916px;
  height: 356px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 12px;
`;

export const NotFoundImage = styled.image`
  width: 200px;
  height: 200px;
  background-image: url(${notFoundImage});
`;

export const PinguinsImage = styled.image`
  width: 441px;
  height: 137px;
  background-image: url(${penguinsImage});
`;

export const TitleFrame = styled.div`
  width: 900px;
  height: 48px;
  font-size: 38px;
  font-weight: 400;
  display: flex;
  margin-bottom: 36px;
`;

export const Paragraph = styled.div`
  width: 60px;
  height: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: normal;
`;

export const Title = styled.div`
  width: 840px;
  height: inherit;
  font-size: inherit;
  font-weight: 700;
  font-style: inherit;
`;

export const AuthorsFrame = styled.div`
  width: 900px;
  height: 138px;
  font-size: 38px;
  font-weight: 400;
  display: flex;
`;
