import React, { useEffect } from 'react'
import { TimelineMax, Bounce } from 'gsap'
import styled from 'styled-components'
import BaseSVG from '~components/base-svg'

const SVG = styled(BaseSVG)`
  z-index: -1;
  margin: 0 auto;
  display: block;
  height: 100%;
  width: 100%;
`

const QUOTES = [
  'Built with love in Brooklyn',
  'Presented in double vision (where drunk)',
  'There will be a test',
  '50% More Colors Than Bargain-Brand Sites',
  'Put On 2-D Glasses Now',
]

const UnderConstruction = () => {
  useEffect(() => {
    const tl = new TimelineMax()
    tl.to('#uc--mask-circle', 1, { attr: { r: 50 }, ease: Bounce.easeOut }, 0.1)
    return () => tl.kill()
  })

  return (
    <SVG id="under-construction" title="Under Construction" viewBox="0 0 100 100" width="100%">
      <defs>
        <mask id="uc--mask">
          <circle id="uc--mask-circle" cx="50%" cy="50%" r="0" fill="white" />
        </mask>
      </defs>
      <g mask="url(#uc--mask)" textAnchor="middle" fill="var(--color-pGrey0)" fontWeight="bold">
        <rect x="-100" y="-100" width="400" height="400" fill="var(--color-inverse)" />
        <text x="50" y="40" fontSize="10">
          <tspan>UNDER</tspan>
          <tspan x="50" dy="10">CONSTRUCTION</tspan>
        </text>
        <text x="35" y="25" fontSize="5" transform="rotate(-22.5 50 50)">(always)</text>
        <text x="50" y="65" fontSize="4" className="uc-quote">
          {QUOTES[Math.floor(Math.random() * QUOTES.length)]}
        </text>
      </g>
    </SVG>
  )
}

export default UnderConstruction
