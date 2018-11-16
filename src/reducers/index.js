import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading'
import currentUser from './currentUser';
import users from './users';
import questions from './questions';

export default combineReducers({
  currentUser,
  users,
  questions,
  loadingBar: loadingBarReducer
});
