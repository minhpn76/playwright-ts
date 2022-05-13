import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENT } from './types'

export function saveComment(comment: string) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export async function fetchComment () {
  const resps = await axios.get('https://jsonplaceholder.typicode.com/comments')
  return {
    type: FETCH_COMMENT,
    payload: resps
  }
}
