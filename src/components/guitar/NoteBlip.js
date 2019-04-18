import React, { useRef, useEffect } from 'react'
import { TimelineMax } from 'gsap'
import styled from 'styled-components'
import { string, shape, number } from 'prop-types'
import { fretPosition, stringPosition } from './utils'

const G = styled.g`
  opacity: 0;
`

const NoteBlip = React.memo(({ note }) => {
  const groupEl = useRef(null)

  useEffect(() => {
    if (groupEl.current) {
      const tl = new TimelineMax({})
      tl.set(groupEl.current, {
        x: fretPosition(note.fret) - 24,
        y: stringPosition(note.string),
      })
    }
  }, [note.fret, note.string])

  useEffect(() => {
    if (groupEl.current) {
      const tl = new TimelineMax({})
      tl.add('start')
      if (note.theme === 'hidden') {
        tl.to(groupEl.current, 0.5, { opacity: 0 }, 'start')
      } else {
        tl.to(groupEl.current, 0.5, { opacity: 1 }, 'start')
        if (note.theme === 'root') {
          tl.to(groupEl.current, 0.5, { fill: '#ffa500' }, 'start')
        } else if (note.theme === 'third') {
          tl.to(groupEl.current, 0.5, { fill: '#4CA64C' }, 'start')
        } else if (note.theme === 'fifth') {
          tl.to(groupEl.current, 0.5, { fill: '#800080' }, 'start')
        } else {
          tl.to(groupEl.current, 0.5, { fill: '#222 ' }, 'start')
        }
      }
    }
  }, [note.theme])

  return (
    <G
      className="note"
      ref={groupEl}
      theme={note.theme}
      fill="none"
    >
      <circle cx={0} cy={0} r="20" stroke="var(--color-offwhite)" />
      {
        note.name.length === 1 ? (
          <text
            fill="var(--color-offwhite)"
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
                    fill="var(--color-offwhite)"
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
