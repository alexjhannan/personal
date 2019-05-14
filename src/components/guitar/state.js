import React, { useReducer } from 'react'
import { map2d, generateColorArray } from '~utilities'
import { initializeNoteMap, calculateMajorScaleNotes, calculateMinorScaleNotes } from './utils'

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
      switch (nextState.scaleType) {
        case 'major':
          nextState.scaleNotes = calculateMajorScaleNotes(nextState.scaleKey)
          nextState.scaleColors = generateColorArray(7, '60%', '30%')
          break
        case 'minor':
          nextState.scaleNotes = calculateMinorScaleNotes(nextState.scaleKey)
          nextState.scaleColors = generateColorArray(7, '60%', '30%')
          break
        default:
          throw new Error('Triggering a scale has failed - unsupported scale requested.')
      }
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
