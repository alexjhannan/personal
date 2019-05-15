import React, { useEffect, useContext } from 'react'
import { TimelineMax } from 'gsap'
import { GuitarContext } from './state'
import { createNoteMap } from './utils'
import NoteBlip from './note-blip'

const noteMap = createNoteMap()

const NoteDisplay = () => {
  const { scaleColors, scaleNotes } = useContext(GuitarContext)
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
          {string.map((note, j) => {
            const scaleIndex = scaleNotes.indexOf(note.name)
            return (
              <NoteBlip
                key={`note-${j}`} // eslint-disable-line
                note={note}
                fill={scaleColors[scaleIndex] || 'black'}
                hidden={scaleIndex === -1} />
            )
          })}
        </React.Fragment>
      ))}
    </g>
  )
}

export default NoteDisplay
