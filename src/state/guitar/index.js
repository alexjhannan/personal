import { REMOVE_ALL_NOTES, ADD_NOTES } from '@state/actionTypes'

const initialState = {
  notes: [],
}

const reducer = (state = initialState, action) => {
  if (action.type === REMOVE_ALL_NOTES) {
    return ({
      ...state,
      notes: [],
    })
  } else if (action.type === ADD_NOTES) {
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