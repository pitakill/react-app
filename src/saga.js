import {
    call,
    put,
    takeEvery,
} from 'redux-saga/effects';

function* getDataHandler(action) {
    try {
        const responseRaw = yield call(() => fetch(`https://swapi.co/api/people`));
        const {results: data} = yield call(() => responseRaw.json());
        yield put({type: 'GET_DATA_SUCCESS', data});
    } catch (e) {
        yield put({type: 'GET_DATA_ERROR', data: e});
    }
};

export default function* saga() {
    yield takeEvery("GET_DATA", getDataHandler);
};
