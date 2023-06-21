import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import { getClasses } from '../../../api/Classes'
import MyClassesSingleDataRow from './MyClassesSingleDataRow'
import { Helmet } from 'react-helmet'
const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    const fetchClasses = () => getClasses(user?.email).then(data => setClasses(data))

    useEffect(() => {
        fetchClasses()
    }, [user])


    return (
        <>

            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet><title>My Classes</title></Helmet>
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
                                <tbody  >
                                    {classes &&
                                        classes.map(singleClasses => (
                                            <MyClassesSingleDataRow
                                                key={singleClasses?._id}
                                                singleClasses={singleClasses}
                                                fetchClasses={fetchClasses}
                                            />
                                        ))}
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