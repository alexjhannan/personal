import React from 'react'
import NoteBlip from './NoteBlip'

const NoteDisplay = ({ noteMap }) => (
  <g>
    {noteMap.map((string, i) => (
      <React.Fragment key={`string-${i}`}>
        {string.map((note, j) => (
          <NoteBlip
            key={`note-${j}`}
            note={note}
          />
        ))}
      </React.Fragment>
    ))}
  </g>
)

export default NoteDisplay
