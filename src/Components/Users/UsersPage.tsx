import { TiArrowBack } from 'react-icons/ti';
import HistorySkeleton from '../Loaders/Skeletons/HistorySkeleton';
import Navbar from '../Navbar/Navbar';
import Styles from "./User.module.scss"
import { Pane } from 'evergreen-ui';
import { FiSearch } from 'react-icons/fi';
import debounce from 'lodash.debounce';
import { IoMdCloseCircle } from 'react-icons/io';
import { Select, SelectItem } from '@nextui-org/react';
import toast from 'react-hot-toast';
// import { animals } from "./data";

const UsersPage = (props: any) => {
    const {
        userData,
        isLoading,
        router,
        inKey,
        handleSearchData,
        paramsData,
        handleClearSearch,
        availableFilter,
        handlerFilterList
    } = props;

    // const animals = [
    //     {
    //         value: 'test',
    //         label: 'Test'
    //     },
    //     {
    //         value: 'test1',
    //         label: 'Test1'
    //     },
    //     {
    //         value: 'test2',
    //         label: 'Test2'
    //     },
    //     {
    //         value: 'test3',
    //         label: 'Test3'
    //     },
    // ]

    const userList = userData?.map((user: any, index: number) => {
        return (
            <div key={index} className={`bg-white border-b flex justify-stretch hover:bg-[#EEEEEE] cursor-default`}>
                <div className={`${Styles.themeBlue} px-2 md:px-4 py-2 md:py-4 font-extrabold text-sm w-[10%]`}>
                    {index + 1}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[35%] truncate">
                    {user?.fullName}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[35%] truncate ">
                    {user?.email}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-3 w-[20%]">
                    {user?.totalScore}
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

                            <h1 className={`${Styles.textWhite} text-2xl md:text-3xl font-bold mx-auto mb-4`}>
                                Users List
                            </h1>

                            <div className="w-full flex justify-between">

                                <div className='relative w-1/2 pr-1'>

                                    <div className='relative w-fit'>
                                        <input
                                            type="text"
                                            key={inKey}
                                            placeholder="Search..."
                                            className={`${Styles.whiteBg} border max-w-full h-12 rounded-lg px-7 py-2 outline-none focus:border-[#0C356A]`}
                                            onChange={debounce((e) => {
                                                handleSearchData(e.target.value)
                                            }, 500)}
                                        />
                                        <div className={`${Styles.themeBlue} absolute top-[0.92rem] z-10 left-2.5`}>
                                            <FiSearch />
                                        </div>
                                        {paramsData.search !== '' &&
                                            <div
                                                className={`${Styles.themeBtn} absolute top-4 z-10 right-2.5 cursor-pointer`}
                                                onClick={handleClearSearch}
                                            >
                                                <IoMdCloseCircle />
                                            </div>
                                        }
                                    </div>

                                </div>

                                <div className='w-1/2 inline-flex justify-end pl-1'>
                                    <Select
                                        size={'sm'}
                                        label="Filter"
                                        className={`${Styles.whiteBg} rounded-lg w-56 max-w-full`}
                                        onChange={(e: any) => handlerFilterList(e.target.value)}
                                    >
                                        {availableFilter.map((filter: any) => (
                                            <SelectItem key={filter.value} value={filter.value}>
                                                {filter.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>

                            </div>
                        </div>

                        <div className="relative overflow-x-auto shadow-lg rounded-lg ">
                            <div className="text-sm text-left">
                                <div className={`text-xs ${Styles.themeBlue} uppercase bg-blue-100`}>
                                    <div className='flex justify-stretch font-extrabold text-sm cursor-default'>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[10%]">
                                            #
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[35%]">
                                            Name
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[35%]">
                                            Email
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[20%]">
                                            Score
                                        </div>
                                    </div>
                                </div>

                                <div className={`bg-white h-96 overflow-auto `}>
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
