import { RECEIVE_USERS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/users';

export default function users(state = {}, action) {
  let user;
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION :
      user = state[action.currentUser];
      user.questions.push(action.qid);
      return {
        ...state,
        [action.currentUser]: user
      };
    case ANSWER_QUESTION :
      user = state[action.currentUser];
      user.answers[action.qid] = action.answer;
      return {
        ...state,
        [action.currentUser]: user
      };
    default :
      return state;
  }
}
