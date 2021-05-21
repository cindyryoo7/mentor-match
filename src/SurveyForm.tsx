import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import logo from './assets/logo.jpg';
import { allLanguages, allTechnicalSkills, allSoftSkills, allHobbies } from './questions';

const SurveyForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');
  const [role, setRole] = useState<string>('');
  //const [languages, setLanguages] = useState<string[]>([]);
  //const [technicalSkills, setTechnicalSkills] = useState<string[]>([]);
  //const [softSkills, setSoftSkills] = useState<string[]>([]);
  //const [hobbies, setHobbies] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Thanks for submitting the survey! You will be notified if you have been matched.');
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const questionId = e.target.id;
    const value = e.target.value;
    questionId === '1'
      ? setName(value)
      : questionId === '2'
        ? setPosition(value)
        : questionId === '3'
          ? setTimezone(value)
          : setRole(value)
  }

  const handleCheckboxAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    
  }

  const MentorQuestions = (
    <div>
      <h4>What languages are you willing to mentor someone in? Please choose at least one.</h4>
      {allLanguages.map(language => (
        <div>
          <input type="checkbox" id={language} name={language} value={language} onChange={handleCheckboxAnswer} />
          <label htmlFor={language}>{language}</label>
        </div>
      ))}
      <h4>What technical skills are you willing to mentor someone in? Please choose at least one.</h4>
      {allTechnicalSkills.map(technicalSkill => (
        <div>
          <input type="checkbox" id={technicalSkill} name={technicalSkill} value={technicalSkill} onChange={handleCheckboxAnswer} />
          <label htmlFor={technicalSkill}>{technicalSkill}</label>
        </div>
      ))}
      <h4>What soft skills are you willing to mentor someone in? Please choose at least one.</h4>
      {allSoftSkills.map(softSkill => (
        <div>
          <input type="checkbox" id={softSkill} name={softSkill} value={softSkill} onChange={handleCheckboxAnswer} />
          <label htmlFor={softSkill}>{softSkill}</label>
        </div>
      ))}
      <h4>What are your hobbies and interests? Please choose at least one.</h4>
      {allHobbies.map(hobby => (
        <div>
          <input type="checkbox" id={hobby} name={hobby} value={hobby} onChange={handleCheckboxAnswer} />
          <label htmlFor={hobby}>{hobby}</label>
        </div>
      ))}
    </div>
  );

  const MenteeQuestions = (
    <div>
      <h4>What languages would you like to be mentored in? Please choose at least one.</h4>
      {allLanguages.map(language => (
        <div>
          <input type="checkbox" id={language} name={language} value={language} onChange={handleCheckboxAnswer} />
          <label htmlFor={language}>{language}</label>
        </div>
      ))}
      <h4>What technical skills would you like to be mentored in? Please choose at least one.</h4>
      {allTechnicalSkills.map(technicalSkill => (
        <div>
          <input type="checkbox" id={technicalSkill} name={technicalSkill} value={technicalSkill} onChange={handleCheckboxAnswer} />
          <label htmlFor={technicalSkill}>{technicalSkill}</label>
        </div>
      ))}
      <h4>What soft skills would you like to be mentored in? Please choose at least one.</h4>
      {allSoftSkills.map(softSkill => (
        <div>
          <input type="checkbox" id={softSkill} name={softSkill} value={softSkill} onChange={handleCheckboxAnswer} />
          <label htmlFor={softSkill}>{softSkill}</label>
        </div>
      ))}
      <h4>What are your hobbies and interests? Please choose at least one.</h4>
      {allHobbies.map(hobby => (
        <div>
          <input type="checkbox" id={hobby} name={hobby} value={hobby} onChange={handleCheckboxAnswer} />
          <label htmlFor={hobby}>{hobby}</label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="SurveyForm">
      <header>
        <img src={logo} alt='' className="App-logo" width="20%" height="auto" />
        <h1>Welcome to MentorMatch!</h1>
      </header>
      <h3>Please fill out the following questions to find your perfect match!</h3>

      <form>
        <h4>What is your name?</h4>
        <input id="1" type="text" value={name} onChange={handleInputChange} />

        <h4>What is your position?</h4>
        <input id="2" type="text" value={position} onChange={handleInputChange} />

        <h4>What time zone are you in?</h4>
        <input id="3" type="text" value={timezone} onChange={handleInputChange} />

        <h4>Are you interested in being a mentor or mentee?</h4>
        <input type="radio" id="mentor" name="role" value="mentor" onChange={handleInputChange} />
        <label htmlFor="mentor">Mentor</label>

        <input type="radio" id="mentee" name="role" value="mentee" onChange={handleInputChange} />
        <label htmlFor="mentee">Mentee</label>
        <br></br>

        {role === "mentor"
          ? MentorQuestions
          : role === "mentee"
            ? MenteeQuestions
            : null
        }

        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
}

export default SurveyForm;