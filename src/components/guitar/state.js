import { useReducer } from 'react'
import { map2d } from '~utilities'
import { initializeNoteMap, calculateMajorScaleNotes, calculateMinorScaleNotes } from './utils'

export const ADD_ALL_NOTES = 'add_all_notes'
export const REMOVE_ALL_NOTES = 'remove_all_notes'
export const TRIGGER_MAJOR_SCALE = 'trigger_major_scale'
export const TRIGGER_MINOR_SCALE = 'trigger_minor_scale'

function reducer(state, action) {
  let nextNoteMap = {}
  switch (action.type) {
    case ADD_ALL_NOTES:
      nextNoteMap = map2d(note => ({
        ...note,
        theme: 'none',
      }), state.noteMap)
      return {
        ...state,
        noteMap: nextNoteMap,
      }
    case REMOVE_ALL_NOTES:
      nextNoteMap = map2d(note => ({
        ...note,
        theme: 'hidden',
      }), state.noteMap)
      return {
        ...state,
        noteMap: nextNoteMap,
      }
    case TRIGGER_MAJOR_SCALE:
      nextNoteMap = map2d((note) => {
        const clonedNote = { ...note }
        const scaleNotes = calculateMajorScaleNotes(action.payload)
        switch (scaleNotes.indexOf(note.name)) {
          case 0:
            clonedNote.theme = 'root'
            break
          case 2:
            clonedNote.theme = 'third'
            break
          case 4:
            clonedNote.theme = 'fifth'
            break
          case -1:
            clonedNote.theme = 'hidden'
            break
          default:
            clonedNote.theme = 'none'
        }
        return clonedNote
      }, state.noteMap)
      return {
        ...state,
        noteMap: nextNoteMap,
      }
    case TRIGGER_MINOR_SCALE:
      nextNoteMap = map2d((note) => {
        const clonedNote = { ...note }
        const scaleNotes = calculateMinorScaleNotes(action.payload)
        switch (scaleNotes.indexOf(note.name)) {
          case 0:
            clonedNote.theme = 'root'
            break
          case 2:
            clonedNote.theme = 'third'
            break
          case 4:
            clonedNote.theme = 'fifth'
            break
          case -1:
            clonedNote.theme = 'hidden'
            break
          default:
            clonedNote.theme = 'default'
        }
        return clonedNote
      }, state.noteMap)
      return {
        ...state,
        noteMap: nextNoteMap,
      }
    default:
      throw new Error()
  }
}

export const useGuitarReducer = () => useReducer(
  reducer,
  { noteMap: initializeNoteMap() },
)
