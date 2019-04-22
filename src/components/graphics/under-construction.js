import React, { useEffect } from 'react'
import { TimelineMax, Bounce } from 'gsap'
import styled from 'styled-components'
import BaseSVG from '~components/base-svg'

const SVG = styled(BaseSVG)`
  background: indianred;
  z-index: -1;
  margin: 0 auto;
  display: block;
  max-height: 75vh;
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
    const tl = new TimelineMax({ ease: Bounce.easeOut })
    tl.staggerTo('.uc-circle', 0.5, {
      cycle: {
        y: [150, 120, 90, 60, 30],
      },
    }, 0.1, 'init')
    // tl.to('#under-construction', 0.5, { height: 0, width: 0, marginTop: 0 })
    return () => tl.kill()
  })

  return (
    <SVG id="under-construction" title="Under Construction" viewBox="0 0 100 100" width="100%">
      <g fill="var(--color-iGrey1)" r="20">
        {Array(30).fill(1).map((_, i) => ( // eslint-disable-next-line
          <circle key={i} className="uc-circle" cx={0 + (Math.floor(i / 5) * 20)} cy="-60" r="20" />
        ))}
      </g>
      <g textAnchor="middle" fill="var(--color-iGrey4)" fontWeight="bold">
        <text x="50" y="50" fontSize="8">UNDER CONSTRUCTION</text>
        <text x="10" y="40" fontSize="3">(always)</text>
        <text x="50" y="95" fontSize="4">{QUOTES[Math.floor(Math.random() * QUOTES.length)]}</text>
      </g>
    </SVG>
  )
}

export default UnderConstruction
