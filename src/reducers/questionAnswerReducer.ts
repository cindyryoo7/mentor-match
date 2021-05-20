import * as actions from '../actionTypes/questionAnswerActionTypes';
import { QuestionAnswer } from 'Types';

export interface QuestionAnswerState {
  answers: QuestionAnswer[];
}

const initialState: QuestionAnswerState = {
  answers: []
};

export default function questionAnswerReducer(
  state: QuestionAnswerState = initialState,
  action: actions.SubmitAnswerAction
): QuestionAnswerState {
  switch (action.type) {
    case actions.SUBMIT_ANSWER:
      return {
        answers: action.answers
      };
    default:
      return state;
  }
}
