import { ADD_CATEGORY, CHANGE_ACTIVE_CATEGORY } from '../constants/action-types'

export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload }
}

export function changeActiveCategory(payload) {
    return { type: CHANGE_ACTIVE_CATEGORY, payload }
  }