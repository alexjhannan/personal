import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import Layout from '~components/layout'
import BaseSVG from '~components/base-svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: black;
`

const SVG = styled(BaseSVG)`
  width: 100%;
  display: block;
  background: var(--color-primary);
  user-select: none;
  max-height: calc(100vh - (60px));
`

const NameAnimationV2 = () => {
  useEffect(() => {
    const tl = new TimelineMax({
      yoyo: true,
      yoyoEase: true,
      repeat: -1,
      repeatDelay: 3,
      delay: 1,
      ease: 'Strong',
    })
    tl.to('#web-dev-credits', 1.5, { attr: { viewBox: '8500 8500 100 100' } })
    return () => tl.kill()
  })

  return (
    <Layout theme="fullwidth">
      <Container>
        <SVG
          id="web-dev-credits"
          title="Web Dev Credits Animation"
          viewBox="0 0 10000 10000">
          <rect x="500" y="1000" width="9000" height="2000" rx="500" fill="#e8e8e8" />
          <rect x="1000" y="4000" width="4000" height="4000" rx="500" fill="#e8e8e8" />
          <line x1="6000" y1="4500" x2="9000" y2="4500" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="5000" x2="9000" y2="5000" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="5500" x2="9000" y2="5500" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="6000" x2="9000" y2="6000" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <line x1="6000" y1="6500" x2="7500" y2="6500" strokeWidth="300" stroke="#e8e8e8" strokeLinecap="round" />
          <rect x="8000" y="7000" width="1100" height="500" rx="100" fill="#e8e8e8" />
          <text textAnchor="middle" x="8550" y="8550" fontSize="5" fill="#e8e8e8">
            Hello There
          </text>
        </SVG>
      </Container>
    </Layout>
  )
}

export default NameAnimationV2
