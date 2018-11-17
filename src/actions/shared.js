import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addQuestion, answerQuestion } from '../actions/users'
import { receiveQuestions, createQuestion, updateVotes } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function populateData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { currentUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({ authedUser: currentUser, qid, answer})
      .then(() => {
        dispatch(answerQuestion(currentUser, qid, answer))
        dispatch(updateVotes(currentUser, qid, answer))
        dispatch(hideLoading())
      })
  }
}

export function handleCreateQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { currentUser } = getState();

    dispatch(showLoading());

    return saveQuestion({ author: currentUser, optionOneText, optionTwoText})
      .then((question) => {
        dispatch(createQuestion(question))
        dispatch(addQuestion(currentUser, question.id))
        dispatch(hideLoading())
      })
  }
}
