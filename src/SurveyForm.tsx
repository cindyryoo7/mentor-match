import React, { useState, ChangeEvent, FormEvent } from 'react';
import logo from './assets/logo.jpg';
import { allLanguages, allTechnicalSkills, allSoftSkills, allHobbies } from './questions';

const SurveyForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [languages, setLanguages] = useState<object>({});
  const [technicalSkills, setTechnicalSkills] = useState<object>({});
  const [softSkills, setSoftSkills] = useState<object>({});
  const [hobbies, setHobbies] = useState<object>({});

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const generalQuestions: boolean | number = name.length && position.length && timezone.length && role.length;
    const specificQuestions: boolean | number = Object.keys(languages).length && Object.keys(technicalSkills).length && Object.keys(softSkills).length && Object.keys(hobbies).length;
    if (generalQuestions && specificQuestions) {
      alert('Thanks for submitting the survey! You will be notified if you have been matched.');
    } else {
      alert('Please fill out all fields before submitting the survey.');
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const questionId: string = e.target.id;
    const value: string = e.target.value;
    questionId === '1'
      ? setName(value)
      : questionId === '2'
        ? setPosition(value)
        : questionId === '3'
          ? setTimezone(value)
          : setRole(value)
  }

  const handleMultipleChoice = (e: ChangeEvent<HTMLInputElement>) => {
    const choice: string = e.target.value;
    const name: string = e.target.name;
    name === 'language'
      ? setLanguages(Object.assign({ [choice]: true }, languages))
      : name === 'technical'
        ? setTechnicalSkills(Object.assign({ [choice]: true }, technicalSkills))
        : name === 'soft'
          ? setSoftSkills(Object.assign({ [choice]: true }, softSkills))
          : setHobbies(Object.assign({ [choice]: true }, hobbies))
  }

  const MentorQuestions = (
    <div>
      <h4>What languages are you willing to mentor someone in? Please choose at least one.</h4>
      {allLanguages.map(language => (
        <div>
          <input type="checkbox" id={language} name='language' value={language} onChange={handleMultipleChoice} />
          <label htmlFor='language'>{language}</label>
        </div>
      ))}
      <h4>What technical skills are you willing to mentor someone in? Please choose at least one.</h4>
      {allTechnicalSkills.map(technicalSkill => (
        <div>
          <input type="checkbox" id={technicalSkill} name='technical' value={technicalSkill} onChange={handleMultipleChoice} />
          <label htmlFor='technical'>{technicalSkill}</label>
        </div>
      ))}
      <h4>What soft skills are you willing to mentor someone in? Please choose at least one.</h4>
      {allSoftSkills.map(softSkill => (
        <div>
          <input type="checkbox" id={softSkill} name='soft' value={softSkill} onChange={handleMultipleChoice} />
          <label htmlFor='soft'>{softSkill}</label>
        </div>
      ))}
      <h4>What are your hobbies and interests? Please choose at least one.</h4>
      {allHobbies.map(hobby => (
        <div>
          <input type="checkbox" id={hobby} name='hobby' value={hobby} onChange={handleMultipleChoice} />
          <label htmlFor='hobby'>{hobby}</label>
        </div>
      ))}
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );

  const MenteeQuestions = (
    <div>
      <h4>What languages would you like to be mentored in? Please choose at least one.</h4>
      {allLanguages.map(language => (
        <div>
          <input type="checkbox" id={language} name='language' value={language} onChange={handleMultipleChoice} />
          <label htmlFor='language'>{language}</label>
        </div>
      ))}
      <h4>What technical skills would you like to be mentored in? Please choose at least one.</h4>
      {allTechnicalSkills.map(technicalSkill => (
        <div>
          <input type="checkbox" id={technicalSkill} name='technical' value={technicalSkill} onChange={handleMultipleChoice} />
          <label htmlFor='technical'>{technicalSkill}</label>
        </div>
      ))}
      <h4>What soft skills would you like to be mentored in? Please choose at least one.</h4>
      {allSoftSkills.map(softSkill => (
        <div>
          <input type="checkbox" id={softSkill} name='soft' value={softSkill} onChange={handleMultipleChoice} />
          <label htmlFor='soft'>{softSkill}</label>
        </div>
      ))}
      <h4>What are your hobbies and interests? Please choose at least one.</h4>
      {allHobbies.map(hobby => (
        <div>
          <input type="checkbox" id={hobby} name='hobby' value={hobby} onChange={handleMultipleChoice} />
          <label htmlFor='hobby'>{hobby}</label>
        </div>
      ))}
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );

  return (
    <div className="SurveyForm">
      <header>
        <img src={logo} alt='' className="logo" width="20%" height="auto" />
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
        {'  '}
        <input type="radio" id="mentee" name="role" value="mentee" onChange={handleInputChange} />
        <label htmlFor="mentee">Mentee</label>
        <br></br>

        {role === "mentor"
          ? MentorQuestions
          : role === "mentee"
            ? MenteeQuestions
            : null
        }

      </form>
    </div>
  );
}

export default SurveyForm;