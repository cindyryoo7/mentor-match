import { Question } from 'Types';

export const generalQuestions: Array<Question> = [
  {
    "questionId": "1",
    "questionType": "input",
    "question": "What is your name?",
    "answers": []
  },
  {
    "questionId": "2",
    "questionType": "input",
    "question": "What is your position?",
    "answers": []
  },
  {
    "questionId": "3",
    "questionType": "input",
    "question": "What time zone are you in?",
    "answers": []
  },
  {
    "questionId": "4",
    "questionType": "radio",
    "question": "Are you interested in being a mentor or mentee?",
    "answers": ["Mentor", "Mentee"]
  }
]

export const allLanguages: string[] = [
  "Angular",
  "C",
  "C#",
  "C++",
  "CSS",
  "Go",
  "HTML",
  "Java",
  "Javascript",
  "Perl",
  "PHP",
  "Python",
  "React",
  "Redux",
  "Ruby",
  "SQL",
  "TypeScript",
  "Vue"
];

export const allTechnicalSkills: string[] = [
  "Algorithms",
  "Cloud (AWS, Azure, GCP)",
  "Containers (Docker, Kubernetes)",
  "Databases",
  "Data Structures",
  "Debugging",
  "Object Oriented Programming",
  "Optimization",
  "Testing"
];

export const allSoftSkills: string[] = [
  "Communication",
  "Project management",
  "Time management",
  "Working remotely",
  "Work-life balance"
];

export const allHobbies: string[] = [
  "Animals",
  "Arts & Crafts",
  "Collecting",
  "Food & Drinks",
  "Games & Puzzles",
  "Music",
  "Nature & Outdoors",
  "Performing arts",
  "Spiritual & Mental",
  "Sports",
  "TV & Movies"
]