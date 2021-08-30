import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import * as Styles from './Header.styles';
import { Switch } from '../Switch/Switch';

export const Header = () => {
  return (
    <Styles.Header>
      <Styles.HeaderWrapper>
        <Styles.BackToMain>
          <Styles.BackVector />
          <Styles.BackTitle>ML&ndash;Учебник</Styles.BackTitle>
        </Styles.BackToMain>
        <Styles.Title>Об этой книге</Styles.Title>
        <Switch />
        <Styles.Find />
      </Styles.HeaderWrapper>
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
