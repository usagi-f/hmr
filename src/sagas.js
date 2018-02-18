import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_FETCH, succeededFetch, failedFetch } from './actions';
import Api from './api';

function* fetchData() { // ②
  try {
    const data = yield call(Api.fetchData); // ③
    yield put(succeededFetch(data)); // ④
  } catch (e) {
    yield put(failedFetch(e.message)); // ⑤
  }
}

function* mySaga() {
  yield takeEvery(REQUEST_FETCH, fetchData); // ①
}

export default mySaga;