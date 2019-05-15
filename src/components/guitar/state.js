import React, { useReducer } from 'react'
import { map2d } from '~utilities'
import {
  initializeNoteMap, calculateScaleNotes, generateColorArray, NOTES, SCALES,
} from './utils'

const initialScaleKey = NOTES[3] // C
const initialScaleType = Object.keys(SCALES)[0] // major

const initialGuitarContext = {
  scaleType: initialScaleType,
  scaleKey: initialScaleKey,
  scaleColors: generateColorArray(SCALES[initialScaleType].length),
  scaleNotes: calculateScaleNotes(initialScaleKey, initialScaleType),
}

export const GuitarContext = React.createContext(initialGuitarContext)

export const RESET = 'reset'
export const SHOW_ALL_NOTES = 'show_all_notes'
export const TRIGGER_SCALE = 'trigger_scale'
export const SET_SCALE_TYPE = 'set_scale_type'
export const SET_SCALE_KEY = 'set_scale_key'

function reducer(state, action) {
  const nextState = { ...state }
  switch (action.type) {
    case RESET:
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: -1,
      }), state.noteMap)
      return nextState
    case SHOW_ALL_NOTES:
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: 1,
      }), state.noteMap)
      nextState.scaleColors = ['black']
      return nextState
    case TRIGGER_SCALE:
      nextState.scaleKey = action.payload.key
      nextState.scaleType = action.payload.scale
      nextState.scaleNotes = calculateScaleNotes(nextState.scaleKey, nextState.scaleType)
      nextState.scaleColors = generateColorArray(nextState.scaleNotes.length)
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: nextState.scaleNotes.indexOf(note.name),
      }), state.noteMap)
      return nextState
    case SET_SCALE_TYPE:
      nextState.scaleType = action.payload
      nextState.scaleNotes = calculateScaleNotes(nextState.scaleKey, nextState.scaleType)
      nextState.scaleColors = generateColorArray(nextState.scaleNotes.length)
      nextState.noteMap = map2d(note => ({
        ...note,
        scaleIndex: nextState.scaleNotes.indexOf(note.name),
      }), state.noteMap)
      return nextState
    case SET_SCALE_KEY:
      nextState.scaleKey = action.payload
      nextState.scaleNotes = calculateScaleNotes(nextState.scaleKey, nextState.scaleType)
      nextState.scaleColors = generateColorArray(nextState.scaleNotes.length)
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
