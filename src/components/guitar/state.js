import { useReducer } from 'react'
import { map2d } from '~utilities'
import { initializeNoteMap } from './utils'

export const ADD_ALL_NOTES = 'add_all_notes'
export const REMOVE_ALL_NOTES = 'remove_all_notes'

function reducer(state, action) {
  switch (action.type) {
    case ADD_ALL_NOTES:
      return {
        noteMap: map2d((note) => ({
          ...note,
          theme: 'none',
        }), state.noteMap),
      }
    case REMOVE_ALL_NOTES:
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

export const useGuitarReducer = () => useReducer(
  reducer,
  { noteMap: initializeNoteMap() },
)
