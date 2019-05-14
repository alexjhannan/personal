import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import { FB_HEIGHT, FB_WIDTH } from './utils'
import {
  useGuitarReducer,
  GuitarContext,
  ADD_ALL_NOTES,
  REMOVE_ALL_NOTES,
  TRIGGER_SCALE,
} from './state'
import FretsAndStrings from './frets-and-strings'
import NoteDisplay from './note-display'
import Controls from './controls'

const GuitarContainer = styled.svg`
  width: 100%;
  display: block;
  visibility: hidden;
  user-select: none;
  background: var(--color-pGrey4);
  padding: 24px 0;
`

const Guitar = () => {
  const [state, dispatch] = useGuitarReducer()
  const {
    noteMap,
    scaleType,
    scaleKey,
    scaleNotes,
    scaleColors,
  } = state

  useEffect(() => {
    const tl = new TimelineMax({})
    tl.set('#guitar', { visibility: 'visible' })
  })

  return (
    <GuitarContext.Provider value={{
      scaleType, scaleKey, scaleNotes, scaleColors,
    }}>
      <GuitarContainer
        id="guitar"
        viewBox={`
          -50
          -50
          ${FB_WIDTH + 50}
          ${FB_HEIGHT + 100}
        `}
        aria-labelledby="title">
        <title id="guitar" lang="en">
          Guitar Note Mapper
        </title>
        <FretsAndStrings />
        <NoteDisplay noteMap={noteMap} />
      </GuitarContainer>
      <Controls
        addAllNotes={() => dispatch({ type: ADD_ALL_NOTES })}
        removeAllNotes={() => dispatch({ type: REMOVE_ALL_NOTES })}
        triggerScaleCurry={payload => () => dispatch({ type: TRIGGER_SCALE, payload })} />
    </GuitarContext.Provider>
  )
}

export default Guitar
