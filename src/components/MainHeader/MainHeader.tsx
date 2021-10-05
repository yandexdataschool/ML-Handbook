import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import * as Styles from './MainHeader.styles';

export const MainHeader = () => {
  return (
    <Styles.MainHeader>
      <Styles.HeaderWrapper>
        <Styles.Logos>
          <Styles.TriangleLogo />
          <Styles.CircleLogo />
          <Styles.SquareLogo />
        </Styles.Logos>
        <Styles.Title>ML&ndash;Учебник</Styles.Title>
      </Styles.HeaderWrapper>
    </Styles.MainHeader>
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
