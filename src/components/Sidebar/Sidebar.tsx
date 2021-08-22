import styled from 'styled-components';

export const Sidebar = styled.section`
  display: none;

  @media screen and (min-width: 1140px) {
    display: block;
    min-width: 300px;
    font-size: 15px;
    box-shadow: inset -5px 0 30px -20px rgba(0, 0, 0, 0.06);
  }
`;
