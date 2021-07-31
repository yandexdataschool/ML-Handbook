import React from 'react';
import { Link } from 'gatsby';
import { css } from '@linaria/core';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const paragraphStyles = {
  marginBottom: 48,
};

const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const classHeader = css`
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: red;
  font-weight: 800;
  font-style: italic;
`;

const TestPage = () => {
  return (
    <main style={pageStyles}>
      <title>Lintest</title>
      <h1 className={classHeader}>Test is OK</h1>
      <p style={paragraphStyles}>
        Hi{' '}
        <span role="img" aria-label="Pensive emoji">
          🍆🍅🥐🥯🥯🍇🍉🍎
        </span>{' '}
        ...
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default TestPage;
