import { ADD_TODO } from '../actions/';

const initialState = {
    todos: []
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: // typeを頼りに処理を分岐する
      return Object.assign({}, state, { // 新しいStateを生成して返す
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default: // フォールバック処理
      return state
  }
}
