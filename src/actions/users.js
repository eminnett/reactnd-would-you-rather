import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

function answerQuestion(currentUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    currentUser,
    qid,
    answer
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { currentUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({ authedUser: currentUser, qid, answer})
      .then(() => dispatch(answerQuestion(currentUser, qid, answer)))
      .then(() => dispatch(hideLoading()))
  }
}
