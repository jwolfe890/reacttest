import { call, put, takeEvery, take } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import { successComplete } from '../actions/successActions';
import * as api from '../api/axiosCalls'
import * as actions from '../actions/successActions'

export function* testSaga() {
    try {
        const response = yield call(api.successFinder)
        let checklist;
        if (response.data) {
            console.log("!!!")

            checklist = response
            console.log("working")

            yield put(successComplete(checklist))
            console.log("working2")
        } else {
            console.log("yolo")
        }
    } catch (e) {
        console.log(e)
        console.log("fuck")
    }
}


export function* watchTestSaga() {
    yield takeEvery(actionTypes.SUCCESSINDICATOR, testSaga)
}

