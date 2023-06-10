import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
const MyClasses = () => {

    const { user, loading } = useContext(AuthContext)

    //   const { refetch, data: rooms = [] } = useQuer({
    //     queryKey: ['rooms', user?.email],
    //     enabled: !loading,
    //     queryFn: async () => {
    //       const res = await axiosSecure(
    //         `${import.meta.env.VITE_API_URL}/rooms/${user?.email}`
    //       )
    //       console.log('res from axios', res.data)
    //       return res.data
    //     },
    //   })


    return (
        <>

            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col '
                                            className='px-5  py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                            Class Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                            Class name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                            Available seats
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                            Total Enrolled Students
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                           Feedback
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#004F83]    text-white text-left text-sm uppercase font-normal'
                                        >
                                           Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {rooms &&
                      rooms.map(room => (
                        <RoomDataRow
                          key={room?._id}
                          room={room}
                          refetch={refetch}
                          // fetchRooms={fetchRooms}
                        />
                      ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyClasses;