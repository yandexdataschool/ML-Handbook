/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout/Layout';

const MainPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            Заголовок: <Link to={`/chapters/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Авторы: {node.frontmatter.author}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          author
        }
        id
        slug
      }
    }
  }
`;

export default MainPage;
