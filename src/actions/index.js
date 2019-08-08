import {
  ADD_CATEGORY,
  CHANGE_ACTIVE_CATEGORY,
  DELETE_CATEGORY,
  SHOW_POPUP,
  HIDE_POPUP
} from '../constants/action-types'

export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload }
}

export function changeActiveCategory(payload) {
  return { type: CHANGE_ACTIVE_CATEGORY, payload }
}

export function deleteCategory(payload) {
  return { type: DELETE_CATEGORY, payload }
}

export function showPopup(payload) {
  return { type: SHOW_POPUP, payload }
}

export function hidePopup() {
  return { type: HIDE_POPUP }
}
