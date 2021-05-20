import * as actions from '../actionTypes/surveyFormActionTypes';
import { QuestionAnswer } from 'Types';

export function submitAnswer(answers: QuestionAnswer[]): actions.SubmitAnswerAction {
  return {
    type: actions.SUBMIT_ANSWER,
    answers
  };
}

export function submitForm(submitted: boolean): actions.SubmitFormAction {
  return {
    type: actions.SUBMIT_FORM,
    submitted
  };
}
