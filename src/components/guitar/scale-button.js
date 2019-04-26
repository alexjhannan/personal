import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { func, number, string } from 'prop-types'
import { TimelineMax } from 'gsap'
import BaseSVG from '~components/base-svg'
import { NOTE_NAMES } from './utils'

const SVG = styled(BaseSVG)`
  margin: 0 auto;
  display: block;
  width: 150px;
  font-family: Arvo;
`

const Circle = styled.circle`
  cursor: pointer;
  transition: filter 0.3s ease-in;
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
  onClick, x, y, text, r, className,
}) => (
  <g transform={`translate(${x}, ${y})`} className={className}>
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
}

CircleButton.defaultProps = {
  r: 80,
  className: '',
}

const ScaleButton = ({ scaleName, scaleActionCurry }) => {
  const [isOpen, setOpen] = useState(false)
  const [timeline, setTimeline] = useState(null)
  const noteGroupRef = useRef(null)

  useEffect(() => {
    const tl = new TimelineMax({})
    const initialAngle = 0
    tl.add('start')
      .staggerTo(noteGroupRef.current.children, 0.3, {
        cycle: {
          x: (i) => {
            const angleOffset = 2 * Math.PI * (i / 12)
            const netAngle = initialAngle + angleOffset
            return (500 - (350 * Math.cos(netAngle)))
          },
          y: (i) => {
            const angleOffset = 2 * Math.PI * (i / 12)
            const netAngle = initialAngle + angleOffset
            return (500 - (350 * Math.sin(netAngle)))
          },
        },
      }, '0.025')
      .add('end')
    setTimeline(tl)
    return () => tl.kill()
  }, [])

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
      <g filter="url(#goo)">
        <g ref={noteGroupRef}>
          {NOTE_NAMES.map(noteName => (
            <CircleButton
              key={noteName}
              text={noteName}
              className="note-button"
              x={500}
              y={500}
              onClick={scaleActionCurry(noteName)} />
          ))}
        </g>
        <CircleButton x={500} y={500} onClick={() => setOpen(!isOpen)} r={150} text={scaleName} />
      </g>
    </SVG>
  )
}

ScaleButton.propTypes = {
  scaleName: string.isRequired,
  scaleActionCurry: func.isRequired,
}

export default ScaleButton
