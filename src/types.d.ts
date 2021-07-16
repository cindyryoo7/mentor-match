declare module 'Types' {

  type Question = {
    questionId: string;
    questionType: string;
    question: string;
    answers: string[];
  }

  export {
    Question
  }
}