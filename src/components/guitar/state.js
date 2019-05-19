import React, { useReducer } from 'react'
import {
  calculateScaleNotes, generateColorArray, NOTES, SCALES,
} from './utils'

const initialScaleKey = NOTES[0]
const initialScaleType = Object.keys(SCALES)[0]

const initialGuitarContext = {
  scaleType: initialScaleType,
  scaleKey: initialScaleKey,
  scaleColors: generateColorArray(SCALES[initialScaleType].length),
  scaleNotes: calculateScaleNotes(initialScaleKey, initialScaleType),
}

export const GuitarContext = React.createContext(initialGuitarContext)

export const RESET = 'reset'
export const SHOW_ALL_NOTES = 'show_all_notes'
export const SET_SCALE_TYPE = 'set_scale_type'
export const SET_SCALE_KEY = 'set_scale_key'

function reducer(state, action) {
  const nextState = { ...state }
  switch (action.type) {
    case RESET:
      return {
        ...state,
        scaleType: '',
        scaleKey: '',
        scaleNotes: [],
        scaleColors: [],
      }
    case SHOW_ALL_NOTES:
      return {
        ...state,
        scaleType: '',
        scaleKey: '',
        scaleNotes: NOTES,
        scaleColors: [],
      }
    case SET_SCALE_TYPE:
      nextState.scaleType = action.payload
      nextState.scaleKey = nextState.scaleKey || initialScaleKey
      nextState.scaleNotes = calculateScaleNotes(nextState.scaleKey, nextState.scaleType)
      nextState.scaleColors = generateColorArray(nextState.scaleNotes.length)
      return nextState
    case SET_SCALE_KEY:
      nextState.scaleType = nextState.scaleType || initialScaleType
      nextState.scaleKey = action.payload
      nextState.scaleNotes = calculateScaleNotes(nextState.scaleKey, nextState.scaleType)
      nextState.scaleColors = generateColorArray(nextState.scaleNotes.length)
      return nextState
    default:
      throw new Error()
  }
}

export const useGuitarReducer = () => useReducer(
  reducer,
  {
    ...initialGuitarContext,
  },
)
