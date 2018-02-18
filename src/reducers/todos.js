import { ADD_TODO, SUCCEEDED_FETCH, FAILED_FETCH } from '../actions/';

const initialState = {
    list: []
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: // typeを頼りに処理を分岐する
      return Object.assign({}, state, { // 新しいStateを生成して返す
        list: [
          ...state.list,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case SUCCEEDED_FETCH:
      return Object.assign({}, state, {
        data: action.payload
      })
    case FAILED_FETCH:
      return Object.assign({}, state, {
        message: action.message
      })
    default: // フォールバック処理
    return state
  }
}
