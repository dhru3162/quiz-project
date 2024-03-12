import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import NoInternet from '../NoInternet/NoInternet';

interface LayoutType {
    children: React.ReactNode;
}

const AppLayout = ({ children }: LayoutType) => {
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
                <main>
                    {children}
                </main>
                :
                <NoInternet />
            }
        </>
    )
}

export default AppLayout
