import Head from 'next/head';
import React from 'react'
import { APP_NAME } from '../../lib/const';

export interface TitleComponentProps {
    title?: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
    return (
        <Head>
            <title>
                {title ? `${title} | ${APP_NAME}` : `${APP_NAME}`}
            </title>
        </Head>
    )
}

export default TitleComponent
