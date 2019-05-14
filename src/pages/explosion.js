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

const GearWidget = styled.g`
  cursor: pointer;
`

const ExplosionPlay = () => {
  useEffect(() => {
    const tl = new TimelineMax({ repeat: -1, yoyo: true })
    tl.set('#explosion--control', { transformOrigin: '50% 50%' })
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
        '.line',
        0.25,
        {
          strokeWidth: 2,
          scale: 3,
          ease: Expo.easeOut,
        },
      )
      .to('.lines, .circle-inside, .circle-outside', 0.3, { opacity: 0 })

    Draggable.create('#explosion--control', {
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
          viewBox="0 0 200 100"
          aria-labelledby="title"
          title="Explosion Animation">
          <path
            className="connecting-wire"
            stroke="currentColor"
            fill="none"
            strokeLinejoin="round"
            d="M150,50 C148.13,64.26 139.30,70.48 123.52,68.62 C99.84,65.83 85.51,74.83 83.02,70.17 C80.53,65.52 91.43,62.41 93.93,65.52 C96.42,68.62 93.30,79.79 50,70.17" />
          <circle className="circle-outline" cx="50" cy="50" r="30" fill="#e8e8e8" stroke="currentColor" />
          <g className="lines" stroke="currentColor" strokeLinecap="round" strokeDasharray="2.4">
            {
              'abcdefghij'.split('').map(keyChar => (
                <path key={keyChar} className="line" d="M50,50 v10" opacity="0" />
              ))
            }
          </g>
          <circle className="circle-inside" cx="50" cy="50" r="30" fill="currentColor" />
          <text x="150" y="25" textAnchor="middle" fontSize="5">Spin me!</text>
          <GearWidget id="explosion--control">
            <circle cx="150" cy="50" r="20" fill="#e8e8e8" stroke="black" />
            <path d="M150,50 v-10 m1.5,0 h-3" stroke="black" strokeWidth="1" strokeLinecap="round" />
            <circle cx="150" cy="50" r="2.5" fill="black" />
          </GearWidget>
        </ExplosionSVG>
      </Container>
    </Layout>
  )
}

export default ExplosionPlay
