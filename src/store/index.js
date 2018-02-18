import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from '../reducers/';
import logger from '../middleware/logger';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

let store = createStore(todoApp, composeWithDevTools(
    applyMiddleware(logger, sagaMiddleware)
));

sagaMiddleware.run(mySaga)

export default store;