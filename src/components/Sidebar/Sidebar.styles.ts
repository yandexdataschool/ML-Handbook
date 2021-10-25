import styled from 'styled-components';

import menuBtn from '../../images/sidebar-menu.svg';
import closeBtn from '../../images/sidebar-close.svg';

type Props = {
  isOpened?: string;
};

const Sidebar = styled.div`
  position: sticky;
  top: 52px;
  align-self: start;
  width: auto;
  min-width: 60px;

  @media only screen and (max-width: 1140px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  display: ${({ isOpened }: Props) => (isOpened === 'true' ? 'block' : 'none')};
  overflow-y: scroll;
  padding: 24px 40px 40px 20px;
  height: calc(100vh - 52px);
  max-width: ${({ isOpened }: Props) => (isOpened === 'true' ? '300px' : '60px')};
  flex-grow: 1;
`;

const SidebarMenuBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 14px;
  height: 14px;
  outline: none;
  border: none;
  background: center/cover no-repeat url(${menuBtn});
  cursor: pointer;
  transition: text-decoration 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }

  ${({ isOpened }: Props) =>
    isOpened === 'true' &&
    `
      background: center/cover no-repeat url(${closeBtn});
    `}
`;

const SidebarCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 14px;
  height: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: text-decoration 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }
`;

const SidebarHeading = styled.h3`
  margin: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  font-family: 'Yandex Serif', Georgia, 'Times New Roman', Times, serif;
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
  margin-bottom: 6px;
`;

const SidebarList = styled.ul`
  margin: 0;
  padding: 0 0 0 22px;
  list-style: disc;
`;

const SidebarListItem = styled.li`
  margin-bottom: 6px;
  color: #3b4856;
  font-weight: 300;
  font-style: normal;
  font-size: 15px;
  font-family: 'YS Text', Arial, Helvetica, sans-serif;
  line-height: 18px;
  cursor: pointer;
  transition: text-decoration 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }

  &:active {
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
`;

const SidebarSublist = styled.ul`
  margin: 0;
  padding: 0 0 0 16px;
  list-style: circle;
`;

const SidebarSublistItem = styled.li`
  margin-bottom: 6px;
  color: #3b4856;
  font-weight: 300;
  font-size: 15px;
  font-family: 'YS Text', Arial, Helvetica, sans-serif;
  line-height: 18px;
  cursor: pointer;
  transition: text-decoration 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    position: relative;
    text-decoration: underline;
    font-weight: 400;

    &::before {
      position: absolute;
      top: 0;
      left: -58px;
      width: 4px;
      height: 100%;
      background-color: #ffc100;
      content: '';
    }
  }
`;

export {
  Sidebar,
  SidebarContent,
  SidebarMenuBtn,
  SidebarCloseBtn,
  SidebarItem,
  SidebarHeading,
  SidebarList,
  SidebarListItem,
  SidebarSublist,
  SidebarSublistItem,
};
