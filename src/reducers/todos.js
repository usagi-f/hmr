import { ADD_TODO } from '../actions/';

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
    default: // フォールバック処理
      return state
  }
}
