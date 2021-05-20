import { connect } from 'react-redux';
import { Dispatch } from "redux";

import { submitForm } from '../actionCreators/surveyFormActionCreators';
import { SubmitFormAction } from '../actionTypes/surveyFormActionTypes';
import SurveyForm from '../components/SurveyForm';

const mapDispatchToProps = (dispatch: Dispatch<SubmitFormAction>) => ({
  onSubmit: (submitted: boolean) => {
    dispatch(submitForm(submitted));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SurveyForm);