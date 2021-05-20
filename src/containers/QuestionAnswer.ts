import { connect } from "react-redux";

import { AppState } from "../reducers/rootReducer";
import * as actionTypes from '../actionTypes/questionAnswerActionTypes';
import QuestionAnswer from '../components/QuestionAnswer';

const mapStateToProps = (state: AppState) => {
  return {
    answers: state.answers
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionAnswer);
