import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import { FB_HEIGHT, FB_WIDTH } from './utils'
import {
  useGuitarReducer,
  GuitarContext,
  SHOW_ALL_NOTES,
  RESET,
  TRIGGER_SCALE,
  SET_SCALE_TYPE,
  SET_SCALE_KEY,
} from './state'
import FretsAndStrings from './frets-and-strings'
import NoteDisplay from './note-display'
import Legend from './legend'
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
        <NoteDisplay />
      </GuitarContainer>
      <Legend />
      <Controls
        addAllNotes={() => dispatch({ type: SHOW_ALL_NOTES })}
        removeAllNotes={() => dispatch({ type: RESET })}
        setScaleType={payload => dispatch({ type: SET_SCALE_TYPE, payload })}
        setScaleKey={payload => dispatch({ type: SET_SCALE_KEY, payload })}
        triggerScaleCurry={payload => () => dispatch({ type: TRIGGER_SCALE, payload })} />
    </GuitarContext.Provider>
  )
}

export default Guitar
