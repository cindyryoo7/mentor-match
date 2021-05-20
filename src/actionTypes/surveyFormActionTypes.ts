export const SUBMIT_FORM = "surveyFormActionTypes/SUBMIT_FORM";
export interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
  submitted: boolean;
}