import React from "react"
import { TimelineMax } from "gsap"
import styled from "styled-components"
import { fretPosition, stringPosition, calculateNoteName } from './utils'

const G = styled.g`
  visibility: ${props => props.theme === 'hidden' ? 'hidden' : 'visible'}
`

class NoteBlip extends React.Component {
  componentDidMount() {
    const { note } = this.props
    const tl = new TimelineMax({})
    const cx = fretPosition(note.fret) - 24
    const cy = stringPosition(note.string)
    tl.set(this.group, { x: cx, y: cy })
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.theme !== this.props.theme
  }

  render() {
    const { note } = this.props
    return (
      <G
        className="note"
        ref={(el) => this.group = el}
        theme={note.theme}
      >
        <circle
          cx={0}
          cy={0}
          r="20"
          fill={note.root ? 'indianred' : 'black'}
        />
        {
          calculateNoteName(note.string, note.fret).split('').map(
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
            )
          )
        }
      </G>
    )
  }
}

export default NoteBlip