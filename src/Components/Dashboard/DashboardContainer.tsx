import React from 'react'
import DashboardPage from './DashboardPage'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA, dummyQuizData } from '@/src/lib/const'

const DashboardContainer = () => {


    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.dashboard}
            />
            <DashboardPage
                {...{
                    dummyQuizData,
                }}
            />
        </>
    )
}

export default DashboardContainer
