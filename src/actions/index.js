// type
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}



export const REQUEST_FETCH = 'REQUEST_FETCH';
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';

export function requestFetch() {
  return {
    type: REQUEST_FETCH
  }
}

export function succeededFetch(payload) { // ②
  return {
    type: SUCCEEDED_FETCH,
    payload
  }
}

export function failedFetch(message) { // ②
  return {
    type: FAILED_FETCH,
    message
  }
}