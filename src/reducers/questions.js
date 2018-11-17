import { RECEIVE_QUESTIONS, CREATE_QUESTION, UPDATE_VOTES } from '../actions/questions';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      };
    case CREATE_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      };
    case UPDATE_VOTES :
      let question = state[action.qid];
      question[action.answer].votes.push(action.currentUser);
      return {
        ...state,
        [action.qid]: question
      };
    default :
      return state;
  }
}
