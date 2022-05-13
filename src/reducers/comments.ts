import { SAVE_COMMENT, FETCH_COMMENT } from '../actions/types'

export default function (state = [], action: any) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    case FETCH_COMMENT:
      return [...state, ...action.payload.data.map((com: any) => com.name)]
    default:
      return state
  }
}
