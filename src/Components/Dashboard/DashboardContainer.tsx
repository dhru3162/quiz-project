import React, { useContext } from 'react'
import DashboardPage from './DashboardPage'
import { Context } from '../Context/ContextProvider'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'

const DashboardContainer = () => {

    const data = [
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            totalQuestions: '15',
            time: '60',
        },
        {
            title: 'Next',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            totalQuestions: '15',
            time: '60',
        },
        {
            title: 'Node',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            totalQuestions: '15',
            time: '60',
        },
        {
            title: 'Dot Net',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            totalQuestions: '15',
            time: '60',
        },
        {
            title: 'Express',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            totalQuestions: '15',
            time: '60',
        },
        {
            title: 'MongoDB',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            totalQuestions: '15',
            time: '60',
        },
    ]

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.dashboard}
            />
            <DashboardPage
                {...{
                    data,
                }}
            />
        </>
    )
}

export default DashboardContainer
