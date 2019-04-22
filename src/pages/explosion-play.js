import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  TimelineMax, Bounce, Expo, Draggable,
} from 'gsap/all'
import Layout from '~components/layout'
import BaseSVG from '~components/base-svg'

const Container = styled.div`
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ExplosionSVG = styled(BaseSVG)`
  width: 100%;
  color: black;
  border-radius: 50%;
`

const GearSVG = styled(BaseSVG)`
  width: 100%;
`

const GearWidget = styled.g`
  cursor: pointer;
`

const ExplosionPlay = () => {
  useEffect(() => {
    const tl = new TimelineMax({ repeat: -1, yoyo: true })
    tl.set('#gear > .widget', { transformOrigin: '50% 50%' })
      .add('init')
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
        0.25,
        {
          attr: { viewBox: '49 49 2 2' },
          ease: Expo.easeOut,
        },
      )
      .to('#explosion', 0.3, { opacity: 0 })

    Draggable.create('#gear > .widget', {
      type: 'rotation',
      onDragStart() {
        tl.pause()
      },
      onDrag() {
        tl.seek(this.rotation / 360)
      },
      onDragEnd() {
        tl.play()
      },
    })

    return () => tl.kill()
  }, [])

  return (
    <Layout>
      <Container>
        <ExplosionSVG
          id="explosion"
          viewBox="0 0 100 100"
          aria-labelledby="title"
          title="Explosion Animation">
          <g className="lines" stroke="currentColor" strokeLinecap="round" strokeDasharray="2.4">
            {
              'abcdefghij'.split('').map(keyChar => (
                <path key={keyChar} className="line" d="M50,50 v10" opacity="0" />
              ))
            }
          </g>
          <circle className="circle-inside" cx="50" cy="50" r="30" fill="currentColor" />
          <circle className="circle-outline" cx="50" cy="50" r="30" fill="none" stroke="currentColor" />
        </ExplosionSVG>
        <GearSVG
          id="gear"
          viewBox="0 0 100 100"
          aria-labelledby="title"
          title="Explosion Wind-Up Gear">
          <text x="50" y="25" textAnchor="middle" fontSize="5">Spin me!</text>
          <GearWidget className="widget">
            <circle cx="50" cy="50" r="20" fill="#e8e8e8" stroke="black" />
            <path d="M50,50 v-10 m1.5,0 h-3" stroke="black" strokeWidth="1" strokeLinecap="round" />
            <circle cx="50" cy="50" r="2.5" fill="black" />
          </GearWidget>
        </GearSVG>
      </Container>
    </Layout>
  )
}

export default ExplosionPlay
