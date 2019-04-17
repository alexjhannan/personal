import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from 'gsap'
import { FB_HEIGHT, FB_WIDTH } from './utils'
import { ADD_ALL_NOTES, REMOVE_ALL_NOTES, useGuitarReducer } from './state'
import FretsAndStrings from './FretsAndStrings'
import NoteBlip from './NoteBlip'
import Controls from './Controls'

const GuitarContainer = styled.svg`
  width: 95%;
  display: block;
  margin: 40px auto;
  visibility: hidden;
  user-select: none;
`

const Guitar = () => {
  const [state, dispatch] = useGuitarReducer()
  const { noteMap } = state

  useEffect(() => {
    const tl = new TimelineMax({})
    tl.set('#guitar', { visibility: 'visible' })
  })

  return (
    <div>
      <GuitarContainer
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
          Guitar GuitarContainer Note Mapper
        </title>
        <FretsAndStrings />
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
      </GuitarContainer>
      <Controls
        addAllNotes={() => dispatch({ type: ADD_ALL_NOTES })}
        removeAllNotes={() => dispatch({ type: REMOVE_ALL_NOTES })}
      />
    </div>
  )
}

export default Guitar
