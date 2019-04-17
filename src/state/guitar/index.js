import { REMOVE_ALL_NOTES, ADD_NOTES } from '~state/actionTypes'

const prepNoteMap = () => {
  // returns a 2d noteMap -- noteMap[0][2] stores the note on the second fret of the first string
  const initialNoteMap = []
  let string = 0
  while (string < 6) {
    const stringArray = []
    let fret = 0
    while (fret < 21) {
      stringArray.push({ string, fret, theme: 'none' })
      fret += 1
    }
    initialNoteMap.push(stringArray)
    string += 1
  }
  return initialNoteMap
}

const initialState = {
  noteMap: prepNoteMap(),
}

const reducer = (state = initialState, action) => {
  if (action.type === REMOVE_ALL_NOTES) {
    return ({
      ...state,
      notes: [],
    })
  } if (action.type === ADD_NOTES) {
    return ({
      ...state,
      notes: [
        ...state.notes,
        ...action.payload,
      ],
    })
  }
  return state
}

export default reducer
