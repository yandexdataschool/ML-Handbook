import React from 'react';

import * as Styles from './Sidebar.styles';

export const Sidebar = () => {
  return (
    <Styles.Sidebar>
      <Styles.SidebarContent>
        <Styles.SidebarCloseBtn />
        <Styles.SidebarItem>
          <Styles.SidebarHeading>Заголовок в две строки и переносом</Styles.SidebarHeading>
          <Styles.SidebarList>
            <Styles.SidebarListItem>Первый пункт, который длинный и не влезает на одну строчку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Второй пункт в одну строку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Третий пункт, который длинный и не влезает в стртоку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Четвёртый пункт</Styles.SidebarListItem>
            <Styles.SidebarListItem>
              Пятый пункт аж в три строки, ну мало ли бывает такое чудо, что нельзя сократить заголовок
            </Styles.SidebarListItem>
          </Styles.SidebarList>
        </Styles.SidebarItem>
        <Styles.SidebarItem>
          <Styles.SidebarHeading>Заголовок в две строки и переносом</Styles.SidebarHeading>
          <Styles.SidebarList>
            <Styles.SidebarListItem>Первый пункт, который длинный и не влезает на одну строчку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Второй пункт в одну строку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Третий пункт c подпунктами:</Styles.SidebarListItem>
            <Styles.SidebarSublist>
              <Styles.SidebarSublistItem>Четвёртый пункт</Styles.SidebarSublistItem>
              <Styles.SidebarSublistItem>
                Пятый пункт аж в три строки, ну мало ли бывает такое чудо, что нельзя сократить заголовок
              </Styles.SidebarSublistItem>
              <Styles.SidebarSublistItem>Шестой пункт</Styles.SidebarSublistItem>
            </Styles.SidebarSublist>
            <Styles.SidebarListItem>Первый пункт, который длинный и не влезает на одну строчку</Styles.SidebarListItem>
            <Styles.SidebarListItem>
              Пятый пункт аж в три строки, ну мало ли бывает такое чудо, что нельзя сократить заголовок
            </Styles.SidebarListItem>
          </Styles.SidebarList>
        </Styles.SidebarItem>
        <Styles.SidebarItem>
          <Styles.SidebarHeading>Заголовок в две строки и переносом</Styles.SidebarHeading>
          <Styles.SidebarList>
            <Styles.SidebarListItem>Первый пункт, который длинный и не влезает на одну строчку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Второй пункт в одну строку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Третий пункт, который длинный и не влезает в стртоку</Styles.SidebarListItem>
            <Styles.SidebarListItem>Четвёртый пункт</Styles.SidebarListItem>
            <Styles.SidebarListItem>
              Пятый пункт аж в три строки, ну мало ли бывает такое чудо, что нельзя сократить заголовок
            </Styles.SidebarListItem>
          </Styles.SidebarList>
        </Styles.SidebarItem>
      </Styles.SidebarContent>
    </Styles.Sidebar>
  );
};
