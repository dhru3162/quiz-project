export const APP_NAME = `QuizWiz`

export const APP_TITLE_DATA = {
    login: "Login",
    register: 'Register',
    dashboard: "Dashboard",
    profile: 'Profile',
    history: 'History',
    // playQuiz:"",
}

export const apiLink = `https://dummyjson.com`

export const dummyQuizData = [
    {
        id: '1',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        totalQuestions: '10',
        time: '60',
        questions: [
            {
                question: 'What is JSX in React?',
                options: [
                    'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
                    'A state management library for React applications',
                    'A build tool for bundling React applications',
                    'A testing framework for React components',
                ],
                correctAnswers: 'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript'
            },
            {
                question: 'React components must always return a single JSX element.',
                options: ['True', 'False'],
                correctAnswers: 'True'
            },
            {
                question: 'What is the purpose of React components?',
                options: [
                    'To handle HTTP requests and fetch data from APIs',
                    'To manage the state of a React application',
                    'To define the structure and appearance of the user interface',
                    'To handle user interactions and events',
                ],
                correctAnswers: 'To handle HTTP requests and fetch data from APIs'
            },
            {
                question:
                    'Which of the following are valid React lifecycle methods? (Select all that apply)',
                options: [
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillUpdate',
                    'componentDidUpdate',
                ],
                correctAnswers: 'componentWillMount'
            },
            {
                question: 'What will be the output of the following React code?',
                options: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
                correctAnswers: 'Count: 0'
            },
            {
                question:
                    'In React, props are used to pass data from parent components to child components.',
                options: ['True', 'False'],
                correctAnswers: 'True'
            },
            {
                question: 'What is the output of the following code snippet?',
                options: ['0', '1', '2', 'undefined'],
                correctAnswers: '0'
            },
            {
                question:
                    'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
                options: [
                    'Using the if-else statement',
                    'Using the ternary operator',
                    'Using the switch statement',
                    'Using the && operator',
                ],
                correctAnswers: 'Using the if-else statement'
            },
            {
                question: 'In React, what is the purpose of keys in lists?',
                options: [
                    'To provide a unique identifier for each item in the list',
                    'To control the order of items in the list',
                    'To enable sorting and filtering of the list',
                    'To handle user interactions within the list',
                ],
                correctAnswers: 'To provide a unique identifier for each item in the list'
            },
            {
                question:
                    'Which of the following are valid ways to handle exceptions in Python? (Select all that apply)',
                options: [
                    'Using try-except blocks',
                    'Using the finally block',
                    'Using the raise statement',
                    'Using assert statements',
                ],
                correctAnswers: 'Using try-except blocks'
            },
        ],
    },
    {
        id: '2',
        title: 'Next',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        totalQuestions: '2',
        time: '60',
        questions: [
            {
                questionNumber: '1',
                question: 'What is JSX in React?',
                options: [
                    'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
                    'A state management library for React applications',
                    'A build tool for bundling React applications',
                    'A testing framework for React components',
                ],
                correctAnswers: 'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
            },
            {
                questionNumber: '2',
                question: 'React components must always return a single JSX element.',
                options: ['True', 'False'],
                correctAnswers: 'True',
            },
        ]
    },
    {
        id: '3',
        title: 'Node',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        totalQuestions: '15',
        time: '60',
    },
    {
        id: '4',
        title: 'Dot Net',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        totalQuestions: '15',
        time: '60',
    },
    {
        id: '5',
        title: 'Express',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        totalQuestions: '15',
        time: '60',
    },
    {
        id: '6',
        title: 'MongoDB',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        totalQuestions: '15',
        time: '60',
    },
]

