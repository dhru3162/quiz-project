import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { APP_TITLE_DATA } from '@/src/lib/const'
import HistoryPage from './HistoryPage'
import { useRouter } from 'next/navigation'

const HistoryContainer = () => {
    const router = useRouter()

    // table data
    const history = [
        {
            key: "1",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "2",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "3",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "4",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "5",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "6",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "7",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "8",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "9",
            title: 'React',
            result: "12/15",
            score: "12",
        },
        {
            key: "10",
            title: 'React',
            result: "12/15",
            score: "12",
        },
    ];

    return (
        <>
            <TitleComponent
                title={APP_TITLE_DATA.history}
            />
            <HistoryPage
                {...{
                    history,
                    router,
                }}
            />
        </>
    )
}

export default HistoryContainer
