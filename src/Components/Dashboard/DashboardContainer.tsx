import React, { useContext } from 'react'
import DashboardPage from './DashboardPage'
import { Context } from '../Context/ContextProvider'

const DashboardContainer = () => {
    const { LogOut } = useContext(Context)

    return (
        <>
            <DashboardPage
                {...{
                    LogOut
                }}
            />
        </>
    )
}

export default DashboardContainer
