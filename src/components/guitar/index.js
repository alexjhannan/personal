import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from 'gsap'
import {
  FB_HEIGHT, FB_WIDTH, stringPosition, fretPosition, initializeNoteMap,
} from './utils'
import NoteBlip from './NoteBlip'
import Controls from './Controls'

const SVG = styled.svg`
  width: 95%;
  display: block;
  margin: 40px auto;
  visibility: hidden;
  user-select: none;
`

const Fingerboard = styled.rect`
  fill: #b99275;
  stroke: none;
`

const Fret = styled.path`
  stroke-width: 6px;
  stroke: gold;
`

const String = styled.path`
  stroke-linecap: round
`

function map2d(fn, grandparent) {
  return grandparent.map(
    (parent) => parent.map((child) => fn(child)),
  )
}

function reducer(state, action) {
  switch (action.type) {
    case 'add_all_notes':
      return {
        noteMap: map2d((note) => ({
          ...note,
          theme: 'none',
        }), state.noteMap),
      }
    case 'remove_all_notes':
      return {
        noteMap: map2d((note) => ({
          ...note,
          theme: 'hidden',
        }), state.noteMap),
      }
    default:
      throw new Error()
  }
}

const Guitar = () => {
  const [{ noteMap }, dispatch] = useReducer(
    reducer,
    { noteMap: initializeNoteMap() },
  )


  useEffect(() => {
    const tl = new TimelineMax({})
    tl.add('init')
      .set('#guitar', { visibility: 'visible' })
      .set('.fret, .string', { x: '-100%', opacity: 0 })
      .set('#fingerboard', { opacity: 0 })
      .to('#fingerboard', 0.5, { opacity: 1, ease: Power2.easeOut }, 'initFretboard')
      .staggerTo('.fret', 0.3, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.05, 'initFretboard+=0.2')
      .staggerTo('.string', 0.3, { x: '0%', opacity: 0.7, ease: Power2.easeOut }, 0.1, 'initFretboard+=0.3')
  })

  return (
    <div>
      <SVG
        id="guitar"
        viewBox={`
          -50
          -50
          ${FB_WIDTH + 50}
          ${FB_HEIGHT + 50}
        `}
        aria-labelledby="title"
      >
        <title id="guitar" lang="en">
          Guitar SVG Note Mapper
        </title>
        <Fingerboard id="fingerboard" x="0" y="0" width={FB_WIDTH} height={FB_HEIGHT} />
        <Fret className="fret" d={`M3,0 V${FB_HEIGHT}`} />
        {' '.repeat(20).split('').map((_, i) => (
          /* eslint-disable react/no-array-index-key */
          <Fret
            key={`fret-${i}`}
            className="fret"
            d={`M${fretPosition(i + 1)},0 V${FB_HEIGHT}`}
          />
        ))}
        {' '.repeat(6).split('').map((_, i) => (
          <String
            key={`string-${i}`}
            className="string"
            d={`M0,${stringPosition(i)} H${FB_WIDTH}`}
            strokeWidth={3 + (i / 2)}
            stroke={i < 2 ? 'grey' : 'silver'}
          />
        ))}
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
      </SVG>
      <Controls
        addAllNotes={() => dispatch({ type: 'add_all_notes' })}
        removeAllNotes={() => dispatch({ type: 'remove_all_notes' })}
      />
    </div>
  )
}

export default Guitar
