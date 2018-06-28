// @flow
import {createStore, applyMiddleware} from 'redux';
import reducer from '@/reducer';

// Saga
import saga from '@/saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();


export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);
