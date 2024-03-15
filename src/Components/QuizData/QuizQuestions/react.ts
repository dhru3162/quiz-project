import { QuizTital } from './index';
// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple




export const react: QuizTital = {
  topic: 'React',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 60,
  questions: [
    {
      question: 'What is JSX in React?',
      choices: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
        'A state management library for React applications',
        'A build tool for bundling React applications',
        'A testing framework for React components',
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 1,
    },
    {
      question: 'React components must always return a single JSX element.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'What is the purpose of React components?',
      choices: [
        'To handle HTTP requests and fetch data from APIs',
        'To manage the state of a React application',
        'To define the structure and appearance of the user interface',
        'To handle user interactions and events',
      ],
      type: 'MCQs',
      correctAnswers: ['To define the structure and appearance of the user interface'],
      score: 1,
    },
    {
      question:
        'Which of the following are valid React lifecycle methods? (Select all that apply)',
      choices: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
      ],
      type: 'MAQs',
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 1,
    },
    {
      question: 'What will be the output of the following React code?',
      code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;`,
      choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 1,
    },
    {
      question:
        'In React, props are used to pass data from parent components to child components.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 1,
    },
    {
      question: 'What is the output of the following code snippet?',
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 1,
    },
    {
      question:
        'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
      choices: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the switch statement',
        'Using the && operator',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the && operator',
      ],
      score: 1,
    },
    {
      question: 'In React, what is the purpose of keys in lists?',
      choices: [
        'To provide a unique identifier for each item in the list',
        'To control the order of items in the list',
        'To enable sorting and filtering of the list',
        'To handle user interactions within the list',
      ],
      type: 'MCQs',
      correctAnswers: ['To provide a unique identifier for each item in the list'],
      score: 1,
    },
    {
      question: 'What will be the result of the following React code?',
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
      choices: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
        'The button will not respond to the click event',
        'An error will occur due to the incorrect usage of onClick',
        'The button will display but nothing will happen when clicked',
      ],
      type: 'MCQs',
      correctAnswers: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
      ],
      score: 1,
    },

  ],
}
