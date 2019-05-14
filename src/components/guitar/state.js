import React, { useReducer } from 'react'
import { map2d } from '~utilities'
import { initializeNoteMap, calculateScaleNotes, generateColorArray } from './utils'

const initialGuitarContext = {
  scaleType: '',
  scaleKey: '',
  scaleColors: [],
  scaleNotes: [],
}

export const GuitarContext = React.createContext(initialGuitarContext)

export const ADD_ALL_NOTES = 'add_all_notes'
export const REMOVE_ALL_NOTES = 'remove_all_notes'
export const TRIGGER_SCALE = 'trigger_scale'

function reducer(state, action) {
  const nextState = { ...state, ...initialGuitarContext }
  switch (action.type) {
    case ADD_ALL_NOTES:
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: 1,
      }), state.noteMap)
      return nextState
    case REMOVE_ALL_NOTES:
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: -1,
      }), state.noteMap)
      return nextState
    case TRIGGER_SCALE:
      nextState.scaleKey = action.payload.key
      nextState.scaleType = action.payload.scale
      nextState.scaleNotes = calculateScaleNotes(nextState.scaleKey, nextState.scaleType)
      nextState.scaleColors = generateColorArray(nextState.scaleNotes.length, '60%', '37%')
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: nextState.scaleNotes.indexOf(note.name),
      }), state.noteMap)
      return nextState
    default:
      throw new Error()
  }
}

export const useGuitarReducer = () => useReducer(
  reducer,
  {
    noteMap: initializeNoteMap(),
    ...initialGuitarContext,
  },
)
