declare module 'Types' {

  type Question = {
    questionId: number;
    questionType: string;
    question: string;
    answers: string[];
  }

  export {
    Question
  }
}