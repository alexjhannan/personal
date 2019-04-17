import React, { useEffect } from 'react'
import { TimelineMax, Power2 } from 'gsap'
import styled from 'styled-components'
import {
  FB_HEIGHT, FB_WIDTH, stringPosition, fretPosition,
} from './utils'

const Fingerboard = styled.rect`
  fill: #b99275;
  stroke: none;
`

const Fret = styled.path`
  stroke-width: 6px;
  stroke: gold;
`

const String = styled.path`
  stroke-linecap: round
`

const FretsAndStrings = React.memo(() => {
  useEffect(() => {
    const tl = new TimelineMax({})
    tl.add('init')
      .set('.fret, .string', { x: '-100%', opacity: 0 })
      .set('#fingerboard', { opacity: 0 })
      .to('#fingerboard', 0.5, { opacity: 1, ease: Power2.easeOut }, 'init')
      .staggerTo('.fret', 0.3, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.05, 'init+=0.2')
      .staggerTo('.string', 0.3, { x: '0%', opacity: 0.7, ease: Power2.easeOut }, 0.1, 'init+=0.3')
  })

  return (
    <>
      <Fingerboard id="fingerboard" x="0" y="0" width={FB_WIDTH} height={FB_HEIGHT} />
      <Fret className="fret" d={`M3,0 V${FB_HEIGHT}`} />
      {' '.repeat(20).split('').map((_, i) => (
        /* eslint-disable react/no-array-index-key */
        <Fret
          key={`fret-${i}`}
          className="fret"
          d={`M${fretPosition(i + 1)},0 V${FB_HEIGHT}`}
        />
      ))}
      {' '.repeat(6).split('').map((_, i) => (
        <String
          key={`string-${i}`}
          className="string"
          d={`M0,${stringPosition(i)} H${FB_WIDTH}`}
          strokeWidth={3 + (i / 2)}
          stroke={i < 2 ? 'grey' : 'silver'}
        />
      ))}
    </>
  )
})

export default FretsAndStrings
