import React, { useState }from 'react';
import logo from '../assets/logo.jpg'

interface Props {
  onSubmit(submitted: boolean): void;
}

const SurveyForm: React.FC<Props> = props => {
  const { onSubmit } = props;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    onSubmit(true);
  }

  return (
    <div className="SurveyForm">
      <header>
        <img src={logo} className="App-logo" width="20%" height="auto"/>
        <h1>Welcome to MentorMatch!</h1>
      </header>
      <h3>Please fill out the following questions to find your perfect match!</h3>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SurveyForm;