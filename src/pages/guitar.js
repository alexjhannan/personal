import React from "react"
import styled from "styled-components"
import { TimelineMax, Power2 } from "gsap"

const SVG = styled.svg`
  width: 80%;
  display: block;
  margin: 40px auto;
  visibility: hidden;
  user-select: none;
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

const SCALE_LENGTH = 2550
const FB_WIDTH = 1780
const FB_HEIGHT = 200

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

const slowFretPosition = (fretIndex) => {
  let result
  if (fretIndex === 0) {
    result =  Math.round(SCALE_LENGTH / 17.817)
  } else {
    const previousFretPosition = fretPosition(fretIndex - 1)
    const newFretOffset = Math.round((SCALE_LENGTH - previousFretPosition) / 17.817)
    result = previousFretPosition + newFretOffset
  }
  return result
}

const slowStringPosition = (stringIndex) => {
  const stringOffset = 17
  const stringSpan = FB_HEIGHT - stringOffset * 2
  return (stringIndex) * (stringSpan / 5) + stringOffset
}

const fretPosition = memoize(slowFretPosition)

const stringPosition = memoize(slowStringPosition)

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
      .set('.fret, .string, .note', { x: '-100%', opacity: 0 })
      .set('#fretboard', { opacity: 0 })
      .to('#fretboard', 0.5, { opacity: 1, ease: Power2.easeOut }, 'initFretboard')
      .staggerTo('.fret', 0.3, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.05, 'initFretboard+=0.2')
      .staggerTo('.string', 0.3, { x: '0%', opacity: 0.7, ease: Power2.easeOut }, 0.1, 'initFretboard+=0.3')
      .staggerTo('.note', 0.3, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.1, 'initFretboard+=0.3')
    return tl
  }

  render() {
    const nutOffset = 10
    const indicatorOffset = 50
    const NOTES = [
      { string: 0, fret: 0, name: 'A' }
    ]
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
              d={`M${fretPosition(i)},0 V${FB_HEIGHT}`}
            />
          ))}
          {' '.repeat(6).split('').map((_, i) => (
            <String
              key={`string-${i}`}
              className="string"
              d={`M0,${stringPosition(i)} H${FB_WIDTH}`}
            />
          ))}
          {NOTES.map((note, i) => (
            <g key={`note-${i}`} className="note">
              <circle
                cx={fretPosition(i) - 30}
                cy={stringPosition(i)}
                r="20"
                fill="indianred"
              />
              <text
                fill="white"
                fontWeight="bold"
                fontSize="23"
                textAnchor="middle"
                x={fretPosition(i) - 30}
                y={stringPosition(i) + 6}
              >
                {note.name}
              </text>
            </g>
          ))}
        </SVG>
      </div>
    )
  }
}

export default Guitar