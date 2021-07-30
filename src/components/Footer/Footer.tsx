import React from 'react';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};

const Footer = () => {
  return (
    <h1 style={headingStyles}>
      Congratulations
      <br />
      <span style={headingAccentStyles}>It is footer! </span>
      <span role="img" aria-label="Party popper emojis">
        🎉🎉🎉
      </span>
    </h1>
  );
};

export default Footer;
