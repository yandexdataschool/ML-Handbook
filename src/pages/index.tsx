/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link, graphql } from 'gatsby';
import MainLayout from '../components/MainLayout/MainLayout';

const MainPage = ({ data }) => {
  return (
    <MainLayout>
      <p>
        Перед вами учебник по машинному обучению. Он состоит из двух частей — основного курса теории, который надлежит
        читать подряд, и набора статей отвечающих на вопросы возникающие в реальной практике аналитика или ML-инженера.
      </p>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            Заголовок: <Link to={`/chapters/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
        </article>
      ))}
    </MainLayout>
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
