import React from "react"
import styled from "styled-components"
import { TimelineMax, Power2 } from "gsap"

const SVG = styled.svg`
  width: 80%;
  display: block;
  margin: 40px auto;
  visibility: hidden;
`

const Fretboard = styled.rect`
  fill: #b99275;
  stroke: none;
`

const Fret = styled.path`
  stroke-width: 6px;
  stroke: gold;
`

const String = styled.path`
  stroke-width: 3px;
  stroke: #E8E8E8;
  stroke-linecap: round
`

function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

const fPos = (fretboardWidth, fretIndex) => {
  let result
  if (fretIndex === 0) {
    result =  Math.round(fretboardWidth / 17.817)
  } else {
    const previousFretPosition = fretPosition(fretboardWidth, fretIndex - 1)
    const newFretOffset = Math.round((fretboardWidth - previousFretPosition) / 17.817)
    result = previousFretPosition + newFretOffset
  }
  return result
}

const fretPosition = memoize(fPos)

const SCALE_LENGTH = 2550
const FB_WIDTH = 1780
const FB_HEIGHT = 200


class Guitar extends React.Component {
  componentDidMount() {
    this.masterTimeline = new TimelineMax({})
    this.masterTimeline
      .set('#guitar', { visibility: 'visible' })
      .add(this.initFretboard())
  }

  initFretboard = () => {
    const tl = new TimelineMax({})
    tl.add('initFretboard')
      .set('.fret, .string', { x: '-100%', opacity: 0 })
      .set('#fretboard', { opacity: 0 })
      .to('#fretboard', 0.5, { opacity: 1, ease: Power2.easeOut }, 'initFretboard')
      .staggerTo('.fret', 0.3, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.05, 'initFretboard+=0.2')
      .staggerTo('.string', 0.3, { x: '0%', opacity: 0.7, ease: Power2.easeOut }, 0.1, 'initFretboard+=0.3')
    return tl
  }

  render() {
    const nutOffset = 10
    const indicatorOffset = 50
    return (
      <div>
        <SVG
          id="guitar"
          viewBox={`
            -${nutOffset}
            -${indicatorOffset}
            ${FB_WIDTH + nutOffset}
            ${FB_HEIGHT + indicatorOffset}
          `}
          aria-labelledby="title"
          ref={(el) => this.svg = el}
        >
          <title id="guitar" lang="en">
            Guitar SVG
          </title>
          <Fretboard id="fretboard" x="0" y="0" width={FB_WIDTH} height={FB_HEIGHT} />
          <Fret className="fret" d={`M-${nutOffset / 2},0 V${FB_HEIGHT}`} />
          {' '.repeat(20).split('').map((_, i) => (
            <Fret
              key={`fret-${i}`}
              className="fret"
              d={`M${fretPosition(SCALE_LENGTH, i)},0 V${FB_HEIGHT}`}
            />
          ))}
          {' '.repeat(6).split('').map((_, i) => (
            <String
              key={`string-${i}`}
              className="string"
              d={`M0,${(i * 30) + 30} H${FB_WIDTH}`}
            />
          ))}
        </SVG>
      </div>
    )
  }
}

export default Guitar