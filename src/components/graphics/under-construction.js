import React, { useEffect } from 'react'
import { TimelineMax, Bounce } from 'gsap'
import styled from 'styled-components'
import BaseSVG from '~components/base-svg'

const SVG = styled(BaseSVG)`
  background: var(--color-primary);
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
  '50% More Colors Than Bargain-Brand Websites',
  'Put On 2-D Glasses Now',
]

const UnderConstruction = () => {
  useEffect(() => {
    const tl = new TimelineMax()
    tl.to('#uc--mask-circle', 1, { attr: { r: 0 }, ease: Bounce.easeOut }, 0.5)
      .to('#under-construction', 0.5, { opacity: 0 }, 1)
      .set('#under-construction', { height: 0, width: 0 })
    return () => tl.kill()
  })

  return (
    <SVG id="under-construction" title="Under Construction" viewBox="0 0 100 100" width="100%">
      <defs>
        <mask id="uc--mask">
          <circle id="uc--mask-circle" cx="50%" cy="50%" r="60" fill="white" />
        </mask>
      </defs>
      <g mask="url(#uc--mask)" textAnchor="middle" fill="var(--color-pGrey4)" fontWeight="bold">
        <rect x="-100" y="-100" width="400" height="400" fill="var(--color-inverse)" />
        <text x="50" y="50" fontSize="8">UNDER CONSTRUCTION</text>
        <text x="13" y="41" fontSize="3">(always)</text>
        <text x="50" y="60" fontSize="4" id="uc-quote">
          {QUOTES[Math.floor(Math.random() * QUOTES.length)]}
        </text>
      </g>
    </SVG>
  )
}

export default UnderConstruction
