import React from 'react';
import Marquee from 'react-fast-marquee';

import img1 from '../../../assets/men/img1.jpg'
import img2 from '../../../assets/men/img2.jpg'
import img3 from '../../../assets/men/img3.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Testimonial = () => {
    return (
        <div>
            <SectionTitle heading={"Testimonial"} subHeading={"Transforming My Life Through the Power of Fitness"}> </SectionTitle>
            <Marquee direction="left" speed={90} gradient={false} className="marquee">

                <div className='grid gap-10 grid-cols-1 md:grid-cols-3 my-4'>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-full w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md Mehedi Hasan</h2>
                            <p>Web Developer</p>
                            <p>"I can't say enough good things about this fitness center. From the moment I walked in, I felt welcomed and supported. The staff is friendly and always available to answer any questions I have. The facility itself is top-notch, with a wide range of equipment and amenities. What sets this place apart is the personalized attention they give to each member. The trainers take the time to understand your goals and tailor the workouts accordingly. It's been an incredible journey, and I'm so grateful to be a part of this fitness center."</p>   </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-full w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md Mehedi Hasan</h2>
                            <p>Web Developer</p>
                            <p>"Joining this fitness center has been a game-changer for me. The variety of classes they offer is incredible, and I never get bored with my workouts. The instructors are passionate and motivating, and they create a positive and energetic atmosphere. The community here is amazing, and I've made some great friends along the way. It's truly a place where I feel inspired and challenged to become the best version of myself."</p>    </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-full w-24 h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md Mehedi Hasan</h2>
                            <p>Web Developer</p>
                            <p>"I have been a member of this fitness center for over a year now, and I couldn't be happier with the results. The trainers are knowledgeable and supportive, and they always push me to reach my goals. The facility is clean and well-maintained, with state-of-the-art equipment. I highly recommend this fitness center to anyone looking for a welcoming and effective place to work out."</p>
                        </div>
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;