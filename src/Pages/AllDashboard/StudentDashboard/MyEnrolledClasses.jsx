import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function MyEnrolledClasses() {
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://sm-fit-shop-server.vercel.app/classes');
            const data = await response.json();
            setClassesData(data);
        } catch (error) {
            console.log('Error fetching classes:', error);
        }
    };
    console.log(classesData);

    return (
        <div>
                        <Helmet><title> Enrolled classes</title></Helmet>


            {/* Selected classes */}
            {classesData.length > 0 && (
                <div className="mt-8">
                    <div className='flex justify-between'>
                        <span className="text-2xl font-bold mb-4">Payment History</span>
                        <span className="text-2xl font-bold"> Total: {classesData.length} </span>
                    </div>
                    <table className="min-w-full">
                        <thead>
                            <tr className='text-center '>
                                <th className="px-4 py-2 border-b border-l-2 border-gray-200 bg-[#004F83] text-white">No</th>
                                <th className="px-4 py-2 border-b border-l-2 border-gray-200 bg-[#004F83] text-white">Class Image</th>
                                <th className="px-4 py-2 border-b border-l-2 border-gray-200 bg-[#004F83] text-white">Class Name</th>
                                <th className="px-4 py-2 border-b border-l-2 border-gray-200 bg-[#004F83] text-white">Instructor Name</th>
                                <th className="px-4 py-2 border-b border-l-2 border-gray-200 bg-[#004F83] text-white">Price</th>
                                <th className="px-4 py-2 border-b border-l-2 border-gray-200 bg-[#004F83] text-white">Watch</th>

                            </tr>
                        </thead>
                        <tbody>
                            {classesData.map((classInfo,index) => (
                                <tr className='text-center' key={classInfo._id}>
                                    <td className="px-4 py-2 border-b border-l-2 border-gray-200">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2 border-b border-l-2 border-gray-200">
                                        <img src={classInfo.classImage} alt={classInfo.className} className="w-10 h-10" />
                                    </td>
                                    <td className="px-4 py-2 border-b border-l-2 border-gray-200">{classInfo.className}</td>
                                    <td className="px-4 py-2 border-b border-l-2 border-gray-200">{classInfo.instructor.instructorName}</td>
                                    <td className="px-4 py-2 border-b border-l-2 border-gray-200">${classInfo.price}</td>
                                    <td className="px-4 py-2 border-b border-l-2 border-gray-200">
                                        <button
                                            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleDeleteClass(classInfo)}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MyEnrolledClasses;
