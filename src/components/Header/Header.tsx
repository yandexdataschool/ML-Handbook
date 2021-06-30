import * as React from 'react'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

export const Header = () => {
  return (
    <h1 style={headingStyles}>
      Congratulations
      <br />
      <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
      <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
    </h1>
  )
}
