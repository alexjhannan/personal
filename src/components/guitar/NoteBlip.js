import React from "react"
import { fretPosition, stringPosition } from './utils'

class NoteBlip extends React.Component {
  render() {
    const { note } = this.props
    return (
      <g className="note">
        <circle
          cx={fretPosition(note.fret) - 30}
          cy={stringPosition(note.string)}
          r="20"
          fill={note.root ? 'indianred' : 'black'}
        />
        <text
          fill="white"
          fontWeight="bold"
          fontSize="23"
          textAnchor="middle"
          x={fretPosition(note.fret) - 30}
          y={stringPosition(note.string) + 7.5}
        >
          {note.name}
        </text>
      </g>
    )
  }
}

export default NoteBlip