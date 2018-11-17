export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export function addQuestion(currentUser, qid, answer) {
  return {
    type: ADD_QUESTION,
    currentUser,
    qid,
    answer
  };
}

export function answerQuestion(currentUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    currentUser,
    qid,
    answer
  };
}
