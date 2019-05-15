import React, { useEffect, useContext } from 'react'
import { TimelineMax } from 'gsap'
import { arrayOf, shape } from 'prop-types'
import { GuitarContext } from './state'
import NoteBlip from './note-blip'

const NoteDisplay = ({ noteMap }) => {
  const { scaleColors } = useContext(GuitarContext)
  useEffect(() => {
    const tl = new TimelineMax({})
    tl.add('start')
      .to('#note-display > .note-hidden', 0.5, { opacity: 0 }, 'start')
      .to('#note-display > .note-active', 0.5, { opacity: 1 }, 'start')
    return () => tl.kill()
  })

  return (
    <g id="note-display">
      {noteMap.map((string, i) => (
        <React.Fragment key={`string-${i}`}> {/* eslint-disable-line */}
          {string.map((note, j) => (
            <NoteBlip
              key={`note-${j}`} // eslint-disable-line
              note={note}
              fill={scaleColors[note.scaleIndex] || 'black'} />
          ))}
        </React.Fragment>
      ))}
    </g>
  )
}

NoteDisplay.propTypes = {
  noteMap: arrayOf(
    arrayOf(
      shape({}),
    ),
  ).isRequired,
}

export default NoteDisplay
