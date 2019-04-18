import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import { FB_HEIGHT, FB_WIDTH } from './utils'
import {
  useGuitarReducer,
  ADD_ALL_NOTES,
  REMOVE_ALL_NOTES,
  TRIGGER_MAJOR_SCALE,
} from './state'
import FretsAndStrings from './FretsAndStrings'
import NoteDisplay from './NoteDisplay'
import Controls from './Controls'

const GuitarContainer = styled.svg`
  width: 100%;
  display: block;
  margin: 40px auto;
  visibility: hidden;
  user-select: none;
  background: var(--color-offblack);
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
          ${FB_HEIGHT + 100}
        `}
        aria-labelledby="title"
      >
        <title id="guitar" lang="en">
          Guitar Note Mapper
        </title>
        <FretsAndStrings />
        <NoteDisplay noteMap={noteMap} />
      </GuitarContainer>
      <Controls
        addAllNotes={() => dispatch({ type: ADD_ALL_NOTES })}
        removeAllNotes={() => dispatch({ type: REMOVE_ALL_NOTES })}
        triggerMajorScaleCurry={(payload) => () => dispatch({ type: TRIGGER_MAJOR_SCALE, payload })}
      />
    </div>
  )
}

export default Guitar
