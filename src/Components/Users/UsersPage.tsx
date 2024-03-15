import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Navbar from '../Navbar/Navbar';

const UsersPage = (props: any) => {
    const { userList } = props;
    // console.log(userList);

    return (
        <div className="bgColor min-h-screen w-screen">
            <Navbar />
            <div className='p-4 md:p-8 lg:p-12'>
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

                <div className='bg-white rounded-lg overflow-x-auto'>
                    <Table removeWrapper aria-label="Example static collection table">
                        <TableHeader >
                            <TableColumn>#</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>Rank</TableColumn>
                            <TableColumn>Score</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {userList.map((user: any, index: number) => (
                                <TableRow key={index} className='border-b-1'>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.rank}</TableCell>
                                    <TableCell>{user.score}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
