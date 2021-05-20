import React from 'react';
import Question from './Question';
import AnswerList from './AnswerList';

const SurveyForm: React.FC = () => {
  return (
    <div className="SurveyForm">
      <h2>This is the Survey Form.</h2>
      <Question />
      <AnswerList />
    </div>
  );
}

export default SurveyForm;