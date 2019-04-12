import { REMOVE_ALL_NOTES, ADD_NOTES } from '@state/actionTypes'

export const removeAllNotes = () =>
  ({ type: REMOVE_ALL_NOTES })

export const addNotes = (payload) =>
  ({ type: ADD_NOTES, payload })

export const addAllNotes = () => {
  const payload = []
  let string = 1
  while (string < 7) {
    let fret = 0
    while (fret < 21) {
      payload.push({ string, fret })
      fret += 1
    }
    string += 1
  }
  return addNotes(payload)
}