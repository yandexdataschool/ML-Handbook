import styled from "styled-components";

export const Chapter = styled.li`
  font-family: "Yandex Sans", sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: #3b4856;
  margin: 22px 0;
  border-bottom: 1px solid #ffcc00;
  list-style-type: decimal;
`;

export const Section = styled.li`
  font-family: "Yandex Sans", sans-serif;
  margin: 9px 0 0 28px;
  font-size: 22px;
  line-height: 32px;
  color: #3b4856;
  list-style-type: decimal;

  &:hover {
    text-decoration: underline;
  }
`;
