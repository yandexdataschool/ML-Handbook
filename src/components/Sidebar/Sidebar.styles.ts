import styled from 'styled-components';

import closeBtn from '../../images/sidebar-close.svg';

type Props = {
  current?: boolean;
};

const Sidebar = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  position: relative;
  margin-top: 60px;

  @media only screen and (max-width: 1140px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  position: fixed;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px 40px 0 20px;
  width: 100%;
  height: calc(100vh - 100px);
  max-width: 300px;
  z-index: 1;
`;

const SidebarCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 14px;
  height: 14px;
  outline: none;
  border: none;
  background: center/cover no-repeat url(${closeBtn});
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const SidebarHeading = styled.h3`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  font-family: 'YandexSerif', Georgia, 'Times New Roman', Times, serif;
  line-height: 20px;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarList = styled.ul`
  margin: 0;
  padding: 0 0 0 16px;
`;

const SidebarListItem = styled.li`
  margin-bottom: 6px;
  color: #3b4856;
  font-weight: 300;
  font-size: 15px;
  font-family: 'YandexSans', Arial, Helvetica, sans-serif;
  line-height: 18px;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }

  ${({ current }: Props) =>
    current &&
    `
    position: relative;
    text-decoration: underline;
    font-weight: 400;

    &::before {
      position: absolute;
      top: 0;
      left: -36px;
      width: 4px;
      height: 100%;
      background-color: #FFC100;
      content: '';
    }
  `}
`;

const SideBarSublist = styled.ul`
  margin: 0;
  padding: 0 0 0 22px;
`;

const SideBarSublistItem = styled.li`
  margin-bottom: 6px;
  color: #3b4856;
  font-weight: 300;
  font-size: 15px;
  font-family: 'YandexSans', Arial, Helvetica, sans-serif;
  line-height: 18px;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }

  ${({ current }: Props) =>
    current &&
    `
    position: relative;
    text-decoration: underline;
    font-weight: 400;

    &::before {
      position: absolute;
      top: 0;
      left: -58px;
      width: 4px;
      height: 100%;
      background-color: #FFC100;
      content: '';
    }
  `}
`;

export {
  Sidebar,
  SidebarContent,
  SidebarCloseBtn,
  SidebarItem,
  SidebarHeading,
  SidebarList,
  SidebarListItem,
  SideBarSublist,
  SideBarSublistItem,
};
