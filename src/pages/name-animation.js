import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import anime from "animejs"

import Layout from "@components/Layout"
import SEO from "@components/SEO"

const NAME_TO_RENDER = 'alex hannan'

const Span = styled.span`
  pointer-events: none;
  display: inline-block;
`

class NameAnimation extends React.Component {
  constructor(props) {
    super(props)

    this.spannedName = (
      <>
        {
          NAME_TO_RENDER.split('').map(
            (char, i) =>
              char !== ' '
                ? <Span key={`char-${i}`}>{char}</Span>
                : ' '
          )
        }
      </>
    )
  }

  onClick = ({ target: parentElement }) => {
    anime({
      targets: parentElement,
      translateX: 50,
      direction: 'alternate',
      iterations: 2,
      easing: 'easeInOutSine',
    })

    Object.values(parentElement.children).forEach((child, i) => {
      anime({
        targets: child,
        translateY: 20 * i,
        direction: 'alternate',
        iterations: 2,
        easing: 'easeInOutSine',
      })
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Name Animation" />
        <div style={{ maxWidth: "300px", overflow: "none" }}>
          <h3 onClick={this.onClick}>
            {this.spannedName}
          </h3>
        </div>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}

export default NameAnimation
