import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import NoInternet from '../NoInternet/NoInternet';
import { useSelector } from 'react-redux';
import Loader from './../Loaders/Loader';

interface LayoutType {
    children: React.ReactNode;
}

const AppLayout = ({ children }: LayoutType) => {
    const { isFirstLoading }: any = useSelector((state: any) => state.auth)
    const [isOnline, setIsOnline] = useState<boolean>(true)

    useEffect(() => {
        const handleOnlineStatus = () => {
            setIsOnline(navigator.onLine);
            if (navigator.onLine) {
                toast.success('Internet Connection Is Back!');
            } else {
                toast.error(`No Internet`)
            }
        };

        if (typeof window !== 'undefined') {
            setIsOnline(navigator.onLine)
            window.addEventListener('online', handleOnlineStatus);
            window.addEventListener('offline', handleOnlineStatus);
            return () => {
                window.removeEventListener('online', handleOnlineStatus);
                window.removeEventListener('offline', handleOnlineStatus);
            };
        }
    }, []);

    return (
        <>
            {isOnline ?
                <>
                    {isFirstLoading ?
                        <Loader />
                        :
                        <main>
                            {children}
                        </main>
                    }
                </>
                :
                <NoInternet />
            }
        </>
    )
}

export default AppLayout
