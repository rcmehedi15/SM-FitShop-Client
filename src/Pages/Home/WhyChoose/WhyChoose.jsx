import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import backgroundImage from '../../../assets/FitnessImg/backgroundPhoto2.png';
import photoImage from '../../../assets/FitnessImg/background.gif';
import Typical from 'react-typical';
import { FaCheck } from 'react-icons/fa';

const WhyChoose = () => {
  const leftSideAnimation = useSpring({
    to: async (next, cancel) => {
      while (true) {
        await next({ opacity: 1, transform: 'translateX(-50px)' });
        await next({ opacity: 0.8, transform: 'translateX(-40px)' });
        await next({ opacity: 1, transform: 'translateX(-50px)' });
      }
    },
    config: { duration: 2000 },
  });

  const rightSideTrailAnimation = useTrail(1, {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(50px)' },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <section className="h-[600px]  flex flex-col lg:flex-row items-center justify-center bg-[#193038]">
      <animated.div className="w-full lg:w-1/2 px-6 lg:px-12">
        <animated.div style={leftSideAnimation}>
          <Typical
            steps={['Why Choose Us?', 2000, 'Why', 1000]}
            loop={Infinity}
            wrapper="h2"
            className="text-3xl lg:text-5xl text-[#fc541a] font-bold mb-6"
          />
          <div className="flex">
            <div className="max-w-7xl sm:px-4 lg:px-2 text-white">
              <div className="">
                <div className="flex items-start mb-4">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <p>State-of-the-Art Facilities: Our fitness center offers modern equipment and facilities to enhance your workout experience.
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <p>Expert Trainers: Our certified trainers provide professional guidance and personalized workout plans.</p>
                </div>
                <div className="flex items-start mb-4">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <p>Motivational Environment: Join our supportive community of like-minded individuals who inspire and motivate each other.</p>
                </div>
                <div className="flex items-start mb-4">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <p>Health Benefits: Regular exercise at our fitness center can lead to improved cardiovascular fitness, increased strength, and reduced stress levels.</p>
                </div>
                
              </div>
            </div>
          </div>
          <button className="bg-[#fc541a] hover:bg-[#193038] text-white font-bold my-4 py-2 px-4 rounded">
            Learn More
          </button>
        </animated.div>
      </animated.div>
      <div className="w-full lg:w-1/2 px-6 lg:px-12">
        <div className="hidden lg:block">
          {rightSideTrailAnimation.map((props, index) => (
            <animated.div key={index} style={props}>
              <img src={photoImage} alt="Fitness" />
            </animated.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
