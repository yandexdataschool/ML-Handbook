import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import * as Styles from './Header.styles';

// export const Header = () => {
//   return <Styles.Header>Congratulations! It is the best Header</Styles.Header>;
// };

import { Title, BackToMain, BackVector, BackTitle, WBmode, Theme, Tumbler, Find } from './Header.styles';

export const Header = () => {
  return (
    <Styles.Header>
      <BackToMain>
        <BackVector />
        <BackTitle>ML&ndash;Учебник</BackTitle>
      </BackToMain>
      <Title>Об этой книге</Title>
      <WBmode>
        <Theme>
          Белый
          <Tumbler />
        </Theme>
        <Theme>Черный</Theme>
      </WBmode>
      <Find />
    </Styles.Header>
  );
};

// export const Header = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           allMdx {
//             edges {
//               node {
//                 frontmatter {
//                   author
//                   title
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <header>
//           <h1>{data.allMdx.edges.node.frontmatter.title}</h1>
//         </header>
//       )}
//     />
//   );
// };
