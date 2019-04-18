import React, { useEffect } from 'react'
import { TimelineMax } from 'gsap'
import { arrayOf, shape } from 'prop-types'
import NoteBlip from './NoteBlip'

const NoteDisplay = ({ noteMap }) => {
  useEffect(() => {
    const tl = new TimelineMax({})
    tl.to('.note-hidden', 0.5, { opacity: 0 })
      .to('.note-active', 0.5, { opacity: 1 })
    return () => tl.kill()
  })

  return (
    <g>
      {noteMap.map((string, i) => (
        <React.Fragment key={`string-${i}`}> {/* eslint-disable-line */}
          {string.map((note, j) => (
            <NoteBlip
              key={`note-${j}`} // eslint-disable-line
              note={note}
            />
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
