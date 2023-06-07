import React from 'react';
import img1 from '../../../assets/popularinstructor/img1.jpg'
import img2 from '../../../assets/popularinstructor/img2.jpg'
import img3 from '../../../assets/popularinstructor/img3.jpg'
import img4 from '../../../assets/popularinstructor/img4.jpg'
import img5 from '../../../assets/popularinstructor/img5.jpg'
import img6 from '../../../assets/popularinstructor/img6.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const PopularInstructors = () => {
    const popularInstructors = [
        {
            title: 'Cardio Kickboxing',
            image: img1,
            students: 250,
        },
        {
            title: 'Strength Training',
            image: img2,
            students: 180,
        },
        {
            title: 'HIIT',
            image: img3,
            students: 150,
        },
        {
            title: 'Pilates Core Conditioning',
            image: img4,
            students: 120,
        },
        {
            title: 'Nutrition and Weight Management',
            image: img5,
            students: 100,
        },
        {
            title: 'Pilates Core Conditioning',
            image: img6,
            students: 80,
        },
    ];

    // Sort classes based on the number of students
    popularInstructors.sort((a, b) => b.students - a.students);

    return (
        <div className="container px-3 mx-auto ">
           
                <SectionTitle   heading={"Popular Instructors"} subHeading={"  Get Inspired and Motivated by Our Top-rated Instructors"}> </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {popularInstructors.slice(0, 6).map((classItem) => (
                    <div key={classItem.title} className="rounded overflow-hidden shadow-lg mx-1">
                        <img src={classItem.image} alt={classItem.title} className="w-full h-72" />
                        <div className="px-6 text-center py-4">
                            <div className="font-bold text-xl mb-2">{classItem.title}</div>
                            <p className="text-gray-700">Students: {classItem.students}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;
