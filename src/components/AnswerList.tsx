import React from 'react';
import Answer from './Answer';

const AnswerList: React.FC = () => {
  return (
    <div className="AnswerList">
      <h2>This is the Answer List.</h2>
      <Answer />
    </div>
  );
}

export default AnswerList;