import { QuestionAnswer } from 'Types';
export const SUBMIT_ANSWER = 'questionAnswerActionTypes/SUBMIT_ANSWER';

export interface SubmitAnswerAction {
  type: typeof SUBMIT_ANSWER;
  answers: QuestionAnswer[];
}