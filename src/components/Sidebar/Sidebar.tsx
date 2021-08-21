import styled from 'styled-components';

export const Sidebar = styled.section`
  display: none;
  width: 300px;
  height: 952px;
  color: aqua;
  font-size: 15px;
  border: 1px solid aquamarine;

  @media screen and (min-width: 1140px) {
    display: block;
  }
`;
