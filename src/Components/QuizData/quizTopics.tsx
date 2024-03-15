import { ReactNode } from 'react'


type QuizTopic = {
  title: string,
  description: string,
  disabled?: boolean

}

export const quizTopics: QuizTopic[] = [
  {
    title: 'React',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? "
  },
  {
    title: 'JavaScript',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? "
  },
  {
    title: 'Python',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? "
  },
  {
    title: 'General Knowledge',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? "
  },
  {
    title: 'Gatsby',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? ",
    disabled: true,
  },
  {
    title: 'Angular',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? ",
    disabled: true,
  },
  {
    title: 'Django',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? ",
    disabled: true,
  },
  {
    title: 'CSS',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? ",
    disabled: true,
  },
  {
    title: 'Kotlin',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? ",
    disabled: true,
  },
  {
    title: 'Laravel',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel modi, illo magni asperiores quos architecto? ",
    disabled: true,
  },
]
