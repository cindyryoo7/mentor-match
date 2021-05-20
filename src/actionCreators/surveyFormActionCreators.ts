import * as actions from '../actionTypes/surveyFormActionTypes';

export function submitForm(submitted: boolean): actions.SubmitFormAction {
  return {
    type: actions.SUBMIT_FORM,
    submitted
  };
}