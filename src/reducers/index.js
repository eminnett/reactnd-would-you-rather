import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading'
import currentUser from './currentUser';
import users from './users';

export default combineReducers({
  currentUser,
  users,
  loadingBar: loadingBarReducer
});
