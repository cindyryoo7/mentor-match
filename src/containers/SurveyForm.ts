import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { AppState } from "../reducers/rootReducer";

import { submitForm } from '../actionCreators/surveyFormActionCreators';
import { SubmitFormAction } from '../actionTypes/surveyFormActionTypes';
import SurveyForm from '../components/SurveyForm';

const mapStateToProps = (state: AppState) => {
  return {
    answers: state.answers
  };
};

const mapDispatchToProps = (dispatch: Dispatch<SubmitFormAction>) => ({
  onSubmit: (submitted: boolean) => {
    dispatch(submitForm(submitted));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyForm);