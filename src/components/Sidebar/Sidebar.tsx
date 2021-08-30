import styled from 'styled-components';

export const Sidebar = styled.section`
  display: none;

  @media screen and (min-width: 1140px) {
    display: block;
    min-width: 300px;
    font-size: 15px;
  }
`;
