import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react"
import Style from './History.module.scss'

const HistoryTable = (props: any) => {
    const {
        rows,
        columns
    } = props

    return (
        <>

            {/* <Table>
            <TableHeader columns={columns}>
                {(column: any) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item: any) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table> */}
            <div className="relative overflow-x-auto shadow-lg rounded-lg">
                <div className="w-full text-sm text-left text-gray-500">
                    <div className="text-xs text-gray-700 uppercase bg-blue-100">
                        <div className='flex justify-stretch font-extrabold text-sm cursor-default'>
                            <div className="px-4 py-3 w-[4%]">
                                #
                            </div>
                            <div className="px-4 py-3 w-[14%] line-clamp-2">
                                Quiz Title
                            </div>
                            <div className="px-4 py-3 w-[15%] line-clamp-2">
                                Result
                            </div>
                            <div className="px-4 py-3 w-[12%] line-clamp-2">
                                Score
                            </div>
                        </div>
                    </div>

                    {/* {isLoading ? (
                        <div className='dark:bg-gray-700 min-w-full h-56 overflow-y-auto'>
                            <OrderListSkeleton rows={15} />
                        </div>
                    ) : (
                        <div className='h-56 overflow-y-scroll'>
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={getMoreOrder}
                                hasMore={orderList?.hasMany}
                                useWindow={false}
                                loader={<div key={0}><OrderListSkeleton /></div>}
                            >
                                <div>
                                    {orderList?.list?.length === 0 ? (
                                        <>
                                            <div className="px-6 py-4 w-full text-sm text-center">
                                                No results found.
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {orderListTable()}
                                        </>
                                    )}
                                </div>
                            </InfiniteScroll>
                        </div>
                    )} */}
                </div>
            </div >
        </>
    )
}

export default HistoryTable