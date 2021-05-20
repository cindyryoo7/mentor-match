import * as actions from '../actionTypes/questionAnswerActionTypes';
import { QuestionAnswer } from 'Types';

export function submitAnswer(answers: QuestionAnswer[]): actions.SubmitAnswerAction {
  return {
    type: actions.SUBMIT_ANSWER,
    answers
  };
}