import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchDataSaga from './fetchDataSaga';
import saveFormSaga from './saveFormSaga';

function* watchFetchData() {
  yield takeLatest(types.FETCH_DATA, fetchDataSaga);
}

function* watchSaveForm() {
  yield takeLatest(types.SAVE_FORM, saveFormSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchData),
    // another action listener,
    fork(watchSaveForm)
  ]);
}
