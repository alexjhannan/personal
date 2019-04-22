import React from 'react'
import styled from 'styled-components'
import { string, shape, number } from 'prop-types'
import cx from 'classnames'
import { fretPosition, stringPosition } from './utils'

const BG_MAP = {
  root: '#ffa500',
  third: '#4ca64c',
  fifth: '#800080',
  default: '#222',
}

const G = styled.g`
  transform: translate(${props => `${props.x}px, ${props.y}`}px);
  opacity: 0;
`

const NoteBlip = React.memo(({ note }) => {
  const groupClasses = cx({
    'note-active': note.theme !== 'hidden',
    'note-hidden': note.theme === 'hidden',
  })

  const noteBackground = BG_MAP[note.theme] || BG_MAP.default

  return (
    <G
      className={groupClasses}
      fill="none"
      x={fretPosition(note.fret) - 24}
      y={stringPosition(note.string)}
    >
      <circle
        cx={0}
        cy={0}
        r="20"
        stroke="var(--color-iGrey0)"
        fill={noteBackground}
      />
      {
        note.name.length === 1 ? (
          <text
            fill="var(--color-iGrey0)"
            fontWeight="bold"
            fontSize={23}
            textAnchor="middle"
            x={0}
            y={7}
          >
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
                    y={6 + (i * 5)}
                  >
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
}, (prevProps, nextProps) => prevProps.theme !== nextProps.theme)

NoteBlip.propTypes = {
  note: shape({
    string: number,
    fret: number,
    theme: string,
  }).isRequired,
}

export default NoteBlip
