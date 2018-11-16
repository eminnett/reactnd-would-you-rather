import { RECEIVE_USERS, ANSWER_QUESTION } from '../actions/users';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION :
      const { currentUser, qid, answer } = action;
      let user = state[currentUser];
      user.answers[qid] = answer;
      return {
        ...state,
        [currentUser]: user
      };
    default :
      return state;
  }
}
