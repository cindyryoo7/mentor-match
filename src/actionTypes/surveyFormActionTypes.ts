import { QuestionAnswer } from 'Types';

export const SUBMIT_ANSWER = 'questionAnswerActionTypes/SUBMIT_ANSWER';
export const SUBMIT_FORM = "surveyFormActionTypes/SUBMIT_FORM";

export interface SubmitAnswerAction {
  type: typeof SUBMIT_ANSWER;
  answers: QuestionAnswer[];
}

export interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
  submitted: boolean;
}