import * as types from '../constants';

export function fetchDataAttempt() {
  return {
    type: types.FETCH_DATA_ATTEMPT
  };
}

export function fetchDataSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataFail(error) {
  return {
    type: types.FETCH_DATA_FAIL,
    payload: error
  };
}

export function fetchData(query) {
  return {
    type: types.FETCH_DATA,
    payload: {
      query
    }
  };
}

export function saveForm(formData) {
  return {
    type: types.SAVE_FORM,
    payload: formData
  };
}

