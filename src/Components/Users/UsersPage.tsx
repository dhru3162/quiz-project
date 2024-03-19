// import React from 'react';
// import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
// import Navbar from '../Navbar/Navbar';

// const UsersPage = (props: any) => {
//     const { userList } = props;
//     // console.log(userList);

//     return (
//         <div className="bgColor min-h-screen w-screen">
//             <Navbar />
//             <div className='p-4 md:p-8 lg:p-12'>
               

//                 <div className='bg-white rounded-lg overflow-x-auto'>
//                     <Table removeWrapper aria-label="Example static collection table">
//                         <TableHeader >
//                             <TableColumn>#</TableColumn>
//                             <TableColumn>Name</TableColumn>
//                             <TableColumn>Email</TableColumn>
//                             <TableColumn>Rank</TableColumn>
//                             <TableColumn>Score</TableColumn>
//                         </TableHeader>
//                         <TableBody>
//                             {userList.map((user: any, index: number) => (
//                                 <TableRow key={index} className='border-b-1'>
//                                     <TableCell>{index + 1}</TableCell>
//                                     <TableCell>{user.name}</TableCell>
//                                     <TableCell>{user.email}</TableCell>
//                                     <TableCell>{user.rank}</TableCell>
//                                     <TableCell>{user.score}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UsersPage;







import React from 'react';
import Navbar from '../Navbar/Navbar';


const UsersPage = (props: any) => {
    const { userList } = props;

    const UserList = userList.map((user: any, index: number) => {
        return (
            <div key={index} className="bg-white border-b flex justify-stretch hover:bg-blue-50 cursor-default">
                <div className="px-2 md:px-4 py-2 md:py-4 font-extrabold text-sm text-gray-900 w-[10%]">
                    {index + 1}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[30%] truncate">
                {user?.name || '-'}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[32%] truncate ">
                    {user?.email || '-'}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[20%] truncate ">
                    {user?.rank || '-'}
                </div>
                <div className="px-2 md:px-4 py-2 md:py-4 w-[18%] truncate ">
                    {user?.score || '-'}
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="bgColor min-h-screen w-screen ">
                <Navbar />
                <div className='max-w-screen-2xl bgColor mt-5 '>
                    <div className='md:px-10 w-full mx-auto'>

                    <div className="flex flex-col items-center mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mx-auto">Users List</h1>
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
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[30%] ">
                                            Name
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[30%] ">
                                            Email
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[20%] ">
                                            Rank
                                        </div>
                                        <div className="px-2 md:px-4 py-2 md:py-3 w-[20%] ">
                                           Score
                                        </div>
                                    </div>
                                </div>
                                <div className='max-h-80 overflow-auto'>
                                    {userList.length === 0 ? (
                                        <div className="px-6 py-4 w-full text-sm text-center">
                                            No results found.
                                        </div>
                                    ) : (
                                        <>
                                            {UserList}
                                        </>
                                    )}
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
