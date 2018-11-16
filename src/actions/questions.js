import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

export function handleCreateQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { currentUser } = getState();

    dispatch(showLoading());

    return saveQuestion({ author: currentUser, optionOneText, optionTwoText})
      .then((question) => dispatch(createQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
