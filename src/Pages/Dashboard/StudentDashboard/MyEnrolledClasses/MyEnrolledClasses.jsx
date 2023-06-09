import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const MyEnrolledClasses = () => {
    return (
        <section>
            <SectionTitle heading={"My Enroll Classes"} > </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 m-4  gap-4">
                <Helmet>My Enroll Classes</Helmet>

                <div className=" card w-96 bg-base-100 shadow-xl">
                    <img src='' className='h-64 ' />

                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">name</h2>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyEnrolledClasses;
