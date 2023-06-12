import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = async () => {
        try {
            const response = await axios.get('https://sm-fit-shop-server.vercel.app/classes');
            setInstructors(response.data);
        } catch (error) {
            console.log('Error fetching instructors:', error);
        }
    };

    return (
        <>
            <div className="mx-9 mt-40">
                <SectionTitle heading="Instructors" subHeading="Get Inspired and Motivated by Our Top-rated Instructors" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {instructors.map((instructor) => (
                        <div key={instructor.id} className="rounded overflow-hidden shadow-lg mx-1">
                            <img src={instructor.photoURL} className="w-full h-96" alt={instructor.name} />
                            <div className="px-6 text-center py-4">
                                <div className="font-bold text-xl mb-2">{instructor.name}</div>
                                <div className="font-bold text-xl mb-2">Student: {instructor.student}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Instructors;
