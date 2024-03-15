// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { QuizTital } from '.'

export const generalKnowledge: QuizTital = {
  topic: 'GeneralKnowledge',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 60,
  questions: [
    {
      question: 'What is the name of this reptile?',
      choices: ['Snake', 'Turtle', 'Crocodile', 'Lizard'],
      type: 'MCQs',
      correctAnswers: ['Turtle'],
      score: 1,
    },
    {
      question: 'In which country is this historical place located?',
      choices: ['China', 'Greece', 'India', 'Egypt'],
      type: 'MCQs',
      correctAnswers: ['China'],
      score: 1,
    },
    {
      question: 'This is a famous Indian dish. What is the name of this dish?',
      choices: ['panipuri', 'Gujrati thal', 'Panjabi', 'momos'],
      type: 'MCQs',
      correctAnswers: ['panjabi'],
      score: 1,
    },
    {
      question: 'Which famous car is this?',
      choices: ['Ford', 'Toyota', 'Mercedes', 'Honda'],
      type: 'MCQs',
      correctAnswers: ['Mercedes'],
      score: 1,
    },
    {
      question: 'To which renowned automobile brand does this logo belong?',
      choices: ['Audi', 'Tesla', 'BMW', 'Hyundai'],
      type: 'MCQs',
      correctAnswers: ['Tesla'],
      score: 1,
    },
    {
      question: 'Do you recognize this iconic mosque? If so, where is it situated?',
      choices: [
        'Faisal Mosque, Islamabad',
        'Sheikh Zayed Grand Mosque, UAE',
        'Taj Mahal, India',
        'Blue Mosque, Turkey',
      ],

      type: 'MCQs',
      correctAnswers: ['Faisal Mosque, Islamabad'],
      score: 1,
    },
    {
      question: 'Which of the following is NOT a JavaScript data type?',
      choices: ['String', 'Boolean', 'Integer', 'Object'],
      type: 'MCQs',
      correctAnswers: ['Integer'],
      score: 1,
    },
    {
      question:
        'Which of the following are valid JavaScript loop statements? (Select all that apply)',
      choices: ['for', 'while', 'loop', 'do...while'],
      type: 'MAQs',
      correctAnswers: ['for', 'while', 'do...while'],
      score: 1,
    },
    {
      question: 'JavaScript is a statically typed language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 1,
    },
    {
      question:
        'Which of the following is a valid way to comment a single line in JavaScript?',
      choices: [
        '// This is a comment',
        '/* This is a comment */',
        '<!-- This is a comment -->',
        '# This is a comment',
      ],
      type: 'MCQs',
      correctAnswers: ['// This is a comment'],
      score: 1,
    },
  ],
}
