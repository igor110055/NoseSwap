import { combineReducers } from 'redux';
import auth from './auth';
import blockchain from './blockchain';

export default combineReducers({
  auth,
  blockchain,
});
