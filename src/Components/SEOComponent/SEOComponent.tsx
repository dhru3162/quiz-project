import Head from 'next/head';
import React from 'react'
import { APP_NAME } from './../../lib/const';

export interface SEOComponentProps {
    title?: string;
}

const SEOComponent = ({ title }: SEOComponentProps) => {
    return (
        <Head>
            <title>
                {title ? `${title} | ${APP_NAME}` : `${APP_NAME}`}
            </title>
        </Head>
    )
}

export default SEOComponent
