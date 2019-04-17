import React, { useRef, useEffect } from 'react'
import { TimelineMax } from 'gsap'
import styled from 'styled-components'
import { string, shape, number } from 'prop-types'
import { fretPosition, stringPosition, calculateNoteName } from './utils'

const G = styled.g`
  visibility: ${(props) => (props.theme === 'hidden' ? 'hidden' : 'visible')}
`

const NoteBlip = React.memo(({ note }) => {
  const groupEl = useRef(null)

  useEffect(() => {
    if (groupEl.current) {
      const tl = new TimelineMax({})
      const cx = fretPosition(note.fret) - 24
      const cy = stringPosition(note.string)
      tl.set(groupEl.current, { x: cx, y: cy })
    }
  })

  return (
    <G
      className="note"
      ref={groupEl}
      theme={note.theme}
    >
      <circle
        cx={0}
        cy={0}
        r="20"
        fill={note.root ? 'indianred' : 'black'}
      />
      {
        note.name.split('').map(
          (char, i) => (
            <text
              key={`string-${note.string}--fret-${note.fret}--${i}`}
              fill="white"
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
