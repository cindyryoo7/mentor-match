import React from 'react';
import QuestionAnswer from '../containers/QuestionAnswer';

const SurveyForm: React.FC = () => {
  return (
    <div className="SurveyForm">
      <h2>This is the Survey Form.</h2>
      <QuestionAnswer />
    </div>
  );
}

export default SurveyForm;