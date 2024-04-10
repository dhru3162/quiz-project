import { TiArrowBack } from 'react-icons/ti';
import HistorySkeleton from '../Loaders/Skeletons/HistorySkeleton';
import Navbar from '../Navbar/Navbar';
import Styles from "./User.module.scss"
import { Pane } from 'evergreen-ui';

const UsersPage = (props: any) => {
    const {
        userData,
        isLoading,
        router
    } = props;

    const userList = userData?.map((user: any, index: number) => {
        return (
            <div key={index} className="bg-white border-b flex justify-stretch hover:bg-blue-50 cursor-default">
                <div className="px-2 md:px-4 py-2 md:py-4 font-extrabold text-sm text-gray-900 w-[10%]">
                    {index + 1}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[45%] truncate">
                    {user?.fullName}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[45%] truncate ">
                    {user?.email}
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="bgColor min-h-[100dvh] w-screen ">
                <Navbar />
                <div className='max-w-screen-2xl bgColor mt-5 '>
                    <div className='md:px-10 max-w-[90%] z-0 lg:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[40%] mx-auto right-0 left-0 absolute'>

                        <div className="flex flex-col items-center mb-4">

                            <div className='w-full flex justify-start'>
                                <div
                                    className={`${Styles.btnColor} max-md:ml-10 max-w-fit text-lg max-md:text-sm cursor-pointer`}
                                    onClick={() => router.push("/dashboard")}
                                >
                                    <Pane display="flex" alignItems="center">
                                        <TiArrowBack className="mr-2" />
                                        <span className="mt-1">Back</span>
                                    </Pane>
                                </div>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mx-auto mb-4">
                                Users List
                            </h1>

                            <div className="w-full flex justify-start">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="relative overflow-x-auto shadow-lg rounded-lg ">
                            <div className="text-sm text-left text-gray-500">
                                <div className="text-xs text-gray-700 uppercase bg-blue-100">
                                    <div className='flex justify-stretch font-extrabold text-sm cursor-default'>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[10%]">
                                            #
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[45%] ">
                                            Name
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[45%] ">
                                            Email
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='max-h-80 overflow-auto'>
                                    {userData.length === 0 ? (
                                        <div className="px-6 py-4 w-full text-sm text-center">
                                            No results found.
                                        </div>
                                    ) : (
                                        <>
                                            {userList}
                                        </>
                                    )}
                                </div> */}

                                <div className='h-96 overflow-auto bg-white'>
                                    {isLoading &&
                                        <HistorySkeleton />
                                    }
                                    {!isLoading &&
                                        <>
                                            {history?.length === 0 ? (
                                                <div className="px-6  py-4 w-full text-sm text-center">
                                                    No results found.
                                                </div>
                                            ) : (
                                                userList
                                            )}
                                        </>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsersPage;
