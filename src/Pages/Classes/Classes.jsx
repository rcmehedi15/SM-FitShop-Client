import React, { useState, useEffect } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

function Classes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://sm-fit-shop-server.vercel.app/classes');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    return (
        <div className='mt-24'>

            <SectionTitle heading={"All Classes"} subHeading={"Our Instructor All Posted Classes"} />
            <div className='container mx-auto grid md:grid-cols-3 gap-10 mt-20'>


                {data.map((item) => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                        <img src={item.classImage} alt="Classes" className="h-64" />

                        <p className='text-center mt-4 font-bold  text-[#fc541a]'>{item.className}</p>
                        <div className="card-body  flex flex-col ">
                            <p className=''> <span className='font-bold'>Instructor Name:</span> {item.instructor.instructorName}</p>
                            <p> <span className='font-bold'>Available Seats : </span>{item.availableSeats}</p>
                            <p ><span className='font-bold'>Price: </span>${item.price}</p>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => handleAddToCartAdmin(item)}
                                    className="btn btn-outline hover:bg-[#fc541a] hover:border-cyan-50 mt-4"
                                >
                                    Enroll Now
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div></div>
    );
}

export default Classes;
