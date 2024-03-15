// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import {QuizTital } from '.'

export const javascript: QuizTital = {
  topic: 'Javascript',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 60,
  questions: [
    {
      question:
        'Which of the following are JavaScript data types? (Select all that apply)',
      choices: ['String', 'Number', 'Function', 'Array'],
      type: 'MAQs',
      correctAnswers: ['String', 'Number', 'Array'],
      score: 1,
    },
    {
      question: 'The "this" keyword in JavaScript refers to the current function.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 1,
    },
    {
      question: 'Which operator is used for strict equality comparison in JavaScript?',
      choices: ['==', '===', '=', '!='],
      type: 'MCQs',
      correctAnswers: ['==='],
      score: 1,
    },
    {
      question:
        'Which of the following methods is used to add an element to the end of an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['push()'],
      score: 1,
    },
    {
      question: 'What is the value of x after executing the following code snippet?',
      code: `let x = 5;
x += 2;
x *= 3;`,
      choices: ['21', '25', '33', '35'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 1,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(typeof null);`,
      choices: ['Object', 'Null', 'Undefined', 'NullObject'],
      type: 'MCQs',
      correctAnswers: ['Object'],
      score: 1,
    },
    {
      question: 'Which of the following is NOT a valid JavaScript variable name?',
      choices: ['myVariable', '_variable', '123variable', '$variable'],
      type: 'MCQs',
      correctAnswers: ['123variable'],
      score: 1,
    },
    {
      question:
        'Which of the following methods is used to remove the last element from an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['pop()'],
      score: 1,
    },
    {
      question: 'JavaScript is a case-sensitive language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(2 + '2');`,
      choices: ['4', '22', '24', "'22'"],
      type: 'MCQs',
      correctAnswers: ['22'],
      score: 1,
    },
  
  ],
}
