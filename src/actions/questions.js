export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const UPDATE_VOTES = 'UPDATE_VOTES';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

export function updateVotes(currentUser, qid, answer) {
  return {
    type: UPDATE_VOTES,
    currentUser,
    qid,
    answer
  };
}
