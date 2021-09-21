import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>André Seiji</title>
      <h1 style={headingStyles}>
        Hi,
        <br />
        <span>I'm Seiji</span> &nbsp;
        <span role="img" aria-label="Smile emoji">
          😊
        </span>
      </h1>
      <p>
        Currently remaking my personal website...
      </p>
    </main>
  )
}

export default IndexPage
