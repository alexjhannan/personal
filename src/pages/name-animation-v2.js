import React from "react"
import styled from "styled-components"

const SVG = styled.svg`
  width: 300px;
  height: 300px;
  background: purple;
  cursor: pointer;
  user-select: none;
`

class NameAnimationV2 extends React.Component {
  counter = 0
  onClick = () => {
    if (this.counter === 10) {
      this.counter = 0
    } else {
      this.counter += 1
    }
    const offset = 8000 * (this.counter / 10)
    const dimension = 10000 - (this.counter * 900)
    this.svg.setAttribute('viewBox', `${offset} ${offset} ${dimension} ${dimension}`)
  }

  render() {
    return (
      <div>
        <SVG
          id="name"
          viewBox="0 0 10000 10000"
          aria-labelledby="title"
          ref={(el) => this.svg = el}
          onClick={this.onClick}
        >
          <title id="name" lang="en">
            Name Animation
          </title>
          <rect x="500" y="1000" width="9000" height="2000" rx="500" fill="#e8e8e8" />
          <rect x="1000" y="4000" width="4000" height="4000" rx="500" fill="#e8e8e8" />
          <line x1="6000" y1="4500" x2="9000" y2="4500" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="5000" x2="9000" y2="5000" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="5500" x2="9000" y2="5500" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="6000" x2="9000" y2="6000" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="6500" x2="7500" y2="6500" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <rect x="8000" y="7000" width="1100" height="500" rx="100" fill="#e8e8e8" />
          <text textAnchor="middle" x="8500" y="8500" fontSize="50" fill="#e8e8e8">
            Alex Hannan, Web Developer
          </text>
        </SVG>
      </div>
    )
  }
}

export default NameAnimationV2