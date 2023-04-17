import React, { useEffect, useState } from 'react'
import { TimelineMax, Bounce } from 'gsap'
import styled from 'styled-components'
import { string } from 'prop-types'
import BaseSVG from '~components/base-svg'

const SVG = styled(BaseSVG)`
  z-index: -1;
  margin: 0 auto;
  display: block;
  height: 100%;
  width: 100%;
`

const Circle = styled.circle`
  transition: scale 0.15s ease-in;
  fill: var(--color-inverse);
  transform-origin: 50% 50%;
`

const Group = styled.g`
  user-select: none;
  cursor: pointer;
  &:hover {
    ${Circle} {
      scale: .98;
    }
  }
`

const QUOTES = [
  'Cilcking may improve your experience',
  '50% more colors than bargain-brand sites',
  'Not a substitute for human interaction',
  'Made from 100% recycled pixels',
  'Put on 2D glasses now',
  'Presented in double vision (where drunk)',
  '\\ [T] /',
]

const UnderConstruction = ({ width }) => {
  const [quoteCounter, setQuoteCounter] = useState(0)

  useEffect(() => {
    const tl = new TimelineMax()
    tl.to('#uc--mask-circle', 1, { attr: { r: 50 }, ease: Bounce.easeOut }, 0.1)
    return () => tl.kill()
  })

  useEffect(() => { // eslint-disable-line
    if (quoteCounter === QUOTES.length - 1) {
      const tl = new TimelineMax()
      tl.set('#under-construction', { pointerEvents: 'none' })
        .to('#uc--mask-circle', 1, { attr: { r: 0 }, ease: Bounce.easeOut }, 0.5)
        .set('#under-construction', { pointerEvents: 'all', onComplete: () => { setQuoteCounter(0) } })
        .to('#uc--mask-circle', 1, { attr: { r: 50 }, ease: Bounce.easeOut }, 3)
      return () => tl.kill()
    }
  })

  return (
    <SVG id="under-construction" title="Under Construction" viewBox="0 0 100 100" width={width}>
      <defs>
        <mask id="uc--mask">
          <circle id="uc--mask-circle" cx="50%" cy="50%" r="0" fill="white" />
        </mask>
      </defs>
      <Group
        mask="url(#uc--mask)"
        textAnchor="middle"
        fill="var(--color-pGrey0)"
        fontWeight="bold"
        onClick={() => {
          if (quoteCounter < QUOTES.length - 1) {
            setQuoteCounter((quoteCounter + 1))
          }
        }}>
        <Circle cx={50} cy={50} r={50} />
        <text x="50" y="40" fontSize="10">
          <tspan>UNDER</tspan>
          <tspan x="50" dy="10">CONSTRUCTION</tspan>
        </text>
        <text x="35" y="25" fontSize="5" transform="rotate(-22.5 50 50)">(always)</text>
        <text x="50" y="65" fontSize="4" className="uc-quote">
          {QUOTES[quoteCounter]}
        </text>
      </Group>
    </SVG>
  )
}


UnderConstruction.propTypes = {
  width: string,
}

UnderConstruction.defaultProps = {
  width: '100px',
}

export default UnderConstruction
