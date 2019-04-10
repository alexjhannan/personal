import React from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap";

const SVG = styled.svg`
  width: 100%;
  height: 100vh;
  background: purple;
  user-select: none;
`

class NameAnimationV2 extends React.Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      const timeline = new TimelineMax({
        yoyo: true,
        yoyoEase: true,
        repeat: 1,
        repeatDelay: 10,
        delay: 1,
        ease: 'Strong',
      })
      const svg = this.svg
      timeline.to(svg, 1.5, { attr: { viewBox: `8500 8500 100 100` } } )
    })
  }

  render() {
    return (
      <div>
        <SVG
          id="name"
          viewBox="0 0 10000 10000"
          aria-labelledby="title"
          ref={(el) => this.svg = el}
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
          <text textAnchor="middle" x="8550" y="8550" fontSize="5" fill="#e8e8e8">
            Web Dev by Alex Hannan
          </text>
        </SVG>
      </div>
    )
  }
}

export default NameAnimationV2