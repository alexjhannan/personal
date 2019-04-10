import React from "react"
import styled from "styled-components"
import { TimelineMax, Bounce, Expo } from "gsap";

const SVG = styled.svg`
  width: 300px;
  height: 300px;
  color: black;
  border-radius: 50%;
`

class ExplosionPlay extends React.Component {
  componentDidMount() {
    const tl = new TimelineMax({ repeat: -1, yoyo: true })
    tl.add('init')
      .to('.circle-inside', 1, { fill: 'orange', attr: { r: 5 }, ease: Bounce.easeOut }, 'init')
      .to('.circle-outline', 1, { stroke: 'red' }, 'init+=0.5')
      .to('.circle-inside', 0.3, { fill: 'red', attr: { r: 0.5 }, ease: Bounce.easeInOut })
      .staggerTo(
        '.line',
        0,
        {
          cycle: {
            color: ['blue', 'green'],
            rotation: [0, 36, 72, 108, 154, 180, 216, 252, 288, 324],
          },
          transformOrigin: '50% 0',
        },
      )
      .to('.line', 0.1, { opacity: 1 })
      .to(
        '#explosion',
        0.375,
        {
          attr: { viewBox: '49 49 2 2' },
          ease: Expo.easeIn,
        },
      )
      .to('#explosion', 0.3, { opacity: 0 })
  }

  render() {
    return (
      <SVG
        id="explosion"
        viewBox="0 0 100 100"
        aria-labelledby="title"
      >
        <title id="explosion" lang="en">
          Explosion
        </title>
        <g className="lines" stroke="currentColor" strokeLinecap="round" strokeDasharray="2.4">
          {
            ' '.repeat(10).split('').map((_, i) => (
              <path key={i} className="line" d="M50,50 v10" opacity="0" />
            ))
          }
        </g>
        <circle className="circle-inside" cx="50" cy="50" r="30" fill="currentColor" />
        <circle className="circle-outline" cx="50" cy="50" r="30" fill="none" stroke="currentColor" />
      </SVG>
    )
  }
}

export default ExplosionPlay