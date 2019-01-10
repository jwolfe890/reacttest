import { all, fork } from 'redux-saga/effects';
import { watchTestSaga } from './successSagas';

export default function* rootSaga() {
    yield all([
        fork(watchTestSaga)
    ])
}