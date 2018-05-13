import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';

const rootReducer = combineReducers({
  data: fetchDataReducer
});

export default rootReducer;
