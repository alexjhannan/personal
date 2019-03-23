import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SVG = styled.svg`
  & > * {
    pointer-events: none;
  }
  & > text {
    color: black;
    stroke: currentColor;
    fill: currentColor;
  }
`

const DURATION = 300

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.animations = []
  }

  onClick = ({ target: svgElement }) => {
    this.animations.push(svgElement.animate([
      { background: 'white' },
      { background: '#ccc' },
    ], {
      duration: DURATION,
      easing: 'ease-in-out',
      direction: 'alternate',
      iterations: 4,
    }))
    Object.values(svgElement.children).map((child, i) => {
      return child.animate([
        { color: '#000' },
        { color: 'indianred' },
      ], {
        duration: DURATION / 2,
        timing: 'steps',
        direction: 'alternate',
        iterations: 8,
      })
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Name Animation" />
        <div style={{ maxWidth: '300px', overflow: 'none' }}>
          <SVG onClick={this.onClick} viewBox="0 0 100 100">
            <text x="30" y="50" strokeWidth="1" stroke="#000">
              <tspan>a</tspan>
              <tspan>l</tspan>
              <tspan>e</tspan>
              <tspan>x</tspan>
            </text>
          </SVG>
        </div>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}

export default IndexPage
