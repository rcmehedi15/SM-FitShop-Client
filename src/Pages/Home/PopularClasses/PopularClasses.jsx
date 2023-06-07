import React from 'react';
import img1 from '../../../assets/popularclass/img1.png'
import img2 from '../../../assets/popularclass/img2.png'
import img3 from '../../../assets/popularclass/img3.png'
import img4 from '../../../assets/popularclass/img4.png'
import img5 from '../../../assets/popularclass/img5.png'
import img6 from '../../../assets/popularclass/img6.png'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const PopularClasses = () => {
    const popularClasses = [
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
    popularClasses.sort((a, b) => b.students - a.students);

    return (
        <div className="container px-3 mx-auto ">
           
                <SectionTitle   heading={"Popular Classes"} subHeading={" Join Our Most Popular Classes for a Healthy Lifestyle "}> </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {popularClasses.slice(0, 6).map((classItem) => (
                    <div key={classItem.title} className="rounded overflow-hidden shadow-lg mx-1">
                        <img src={classItem.image} alt={classItem.title} className="w-full h-52" />
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

export default PopularClasses;
