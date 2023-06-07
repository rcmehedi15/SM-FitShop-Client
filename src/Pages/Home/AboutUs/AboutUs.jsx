import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AboutUs = () => {
    return (
        
        <section className="flex flex-col items-center py-8">
                <SectionTitle   heading={"About Us"} subHeading={"Elevate Your Fitness Journey with Us"}> </SectionTitle>

            <div className=" p-4 container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EKUNGQ4LmH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="md:w-1/2 md:pl-8">

                    <p className="mb-4">
                        Our fitness center offers a comprehensive range of amenities and services to help you achieve your fitness goals. Our state-of-the-art gym is equipped with modern exercise machines, free weights, and cardio equipment. We also provide a variety of group fitness classes led by experienced instructors, including options like HIIT, yoga, and dance.

                    </p>
                    <p className="mb-4">
                        In addition, we offer wellness workshops, seminars, and personal training sessions to support your overall well-being. Your safety is our top priority, and we maintain a clean and sanitized environment. Join us today and take the next step toward improving your fitness and overall health.
                    </p>
                    <a
                        href="/learn-more"
                        className="bg-[#fc541a] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;