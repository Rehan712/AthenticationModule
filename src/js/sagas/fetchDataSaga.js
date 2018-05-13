import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchDataSaga(action) {
	yield put(actions.fetchDataAttempt());
	//yield call(delay, 1000);
	try {
		const res = yield call(api.youtube);
		yield put(actions.fetchDataSuccess(res.data));
	} catch (e) {
		yield put(actions.fetchDataFail(e));
	}
}
