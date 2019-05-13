import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  shape, string, arrayOf, func, number,
} from 'prop-types'
import { TimelineMax } from 'gsap'
import BaseSVG from '~components/base-svg'

const SVG = styled(BaseSVG)`
  margin: 0 auto;
  display: block;
  width: 200px;
  font-family: var(--display-font-stack);
  font-weight: bold;
`

const Circle = styled.circle`
  cursor: pointer;
  transition: fill 0.3s ease-in;
  z-index: 10;
  &:hover {
    fill: var(--color-iGrey3);
  }
`

const Text = styled.text`
  user-select: none;
  pointer-events: none;
`

const CircleButton = ({
  onClick, x, y, text, r, className, id,
}) => (
  <g transform={`translate(${x}, ${y})`} className={className} id={id}>
    <Circle cx="0" cy="0" r={r} fill="var(--color-inverse)" onClick={onClick} />
    <Text x="0" y="25" textAnchor="middle" fill="white" fontSize="75">
      {text}
    </Text>
  </g>
)

CircleButton.propTypes = {
  onClick: func.isRequired,
  x: number.isRequired,
  y: number.isRequired,
  text: string.isRequired,
  r: number,
  className: string,
  id: string,
}

CircleButton.defaultProps = {
  r: 80,
  className: '',
  id: '',
}

const GooeyRadialButton = ({ centerLabel, buttonDuples, initialAngle }) => {
  const [isOpen, setOpen] = useState(false)
  const [timeline, setTimeline] = useState(null)
  const parentRef = useRef(null)

  useEffect(() => {
    const tl = new TimelineMax({})
    const duration = 0.3
    const staggerOffset = 0.025
    const centerButton = parentRef.current.children[1]
    const radialButtons = parentRef.current.children[0].children
    tl.add('start')
      .fromTo(
        centerButton,
        ((staggerOffset * buttonDuples.length) + (duration / 2)),
        { scale: 1 },
        { scale: 0.75, transformOrigin: '50% 50%' },
        'start',
      )
      .staggerFromTo(radialButtons, duration, { x: 500, y: 500 }, {
        cycle: {
          x: (i) => {
            const angleOffset = 2 * Math.PI * (i / buttonDuples.length)
            const netAngle = initialAngle + angleOffset
            return (500 + (350 * Math.cos(netAngle)))
          },
          y: (i) => {
            const angleOffset = 2 * Math.PI * (i / buttonDuples.length)
            const netAngle = initialAngle + angleOffset
            return (500 + (350 * Math.sin(netAngle)))
          },
        },
      }, '0.025', 'start')
    setTimeline(tl)
    return () => tl.kill()
  }, [buttonDuples.length, initialAngle])

  useEffect(() => {
    if (timeline) {
      if (isOpen) {
        timeline.play()
      } else {
        timeline.reverse()
      }
    }
  }, [isOpen, timeline])

  return (
    <SVG
      id="gooey-button"
      title="Gooey Button"
      viewBox="0 0 1000 1000">
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
      <g filter="url(#goo)" ref={parentRef}>
        <g>
          {buttonDuples.map(({ label, onClick }) => (
            <CircleButton
              key={label}
              text={label}
              x={500}
              y={500}
              onClick={onClick} />
          ))}
        </g>
        <CircleButton x={500} y={500} onClick={() => setOpen(!isOpen)} r={150} text={centerLabel} id="center-button" />
      </g>
    </SVG>
  )
}

GooeyRadialButton.propTypes = {
  centerLabel: string.isRequired,
  buttonDuples: arrayOf(shape({
    label: string.isRequired,
    onClick: func.isRequired,
  })).isRequired,
  initialAngle: number,
}

GooeyRadialButton.defaultProps = {
  initialAngle: Math.PI,
}

export default GooeyRadialButton
