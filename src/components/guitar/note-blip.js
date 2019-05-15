import React from 'react'
import styled from 'styled-components'
import {
  string, shape, number, bool,
} from 'prop-types'
import cx from 'classnames'
import { fretPosition, stringPosition } from './utils'

const G = styled.g`
  transform: translate(${props => `${props.x}px, ${props.y}`}px);
`

const Circle = styled.circle`
  transition: fill 0.25s ease-in;
`

const NoteBlip = ({ note, fill, hidden }) => {
  const groupClasses = cx({
    'note-active': !hidden,
    'note-hidden': hidden,
  })

  return (
    <G
      className={groupClasses}
      fill="none"
      x={typeof note.fret === 'number' ? fretPosition(note.fret) - 24 : 0}
      y={typeof note.string === 'number' ? stringPosition(note.string) : 0}>
      <Circle
        cx={0}
        cy={0}
        r="20"
        fill={fill} />
      {
        note.name.length === 1 ? (
          <text
            fill="var(--color-iGrey0)"
            fontWeight="bold"
            fontSize={23}
            textAnchor="middle"
            x={0}
            y={7}>
            {note.name}
          </text>
        ) : (
          <>
            {
              note.name.split('').map(
                (char, i) => (
                  <text
                    key={i} // eslint-disable-line
                    fill="var(--color-iGrey0)"
                    fontWeight="bold"
                    fontSize={i === 0 ? 23 : 17}
                    textAnchor="middle"
                    x={-2 + (i * 12)}
                    y={6 + (i * 5)}>
                    {char}
                  </text>
                ),
              )
            }
          </>
        )
      }
    </G>
  )
}

NoteBlip.propTypes = {
  note: shape({
    string: number,
    fret: number,
    name: string.isRequired,
  }).isRequired,
  fill: string,
  hidden: bool,
}

NoteBlip.defaultProps = {
  fill: 'black',
  hidden: false,
}

export default NoteBlip
