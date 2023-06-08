import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import backgroundImage from '../../../assets/FitnessImg/backgroundPhoto.png';
import photoImage from '../../../assets/FitnessImg/fitness4.png';
import Typical from 'react-typical';

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
    <section
      className="flex flex-col lg:flex-row items-center justify-center "
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <animated.div className="w-full lg:w-1/2 px-6 lg:px-12">
        <animated.div style={leftSideAnimation}> 
          <Typical
            steps={['Why Choose Us?', 2000, 'Why', 1000]}
            loop={Infinity}
            wrapper="h2"
            className="text-3xl lg:text-5xl text-[#fc541a] font-bold mb-6"
          />
          <p className="text-lg font-sans lg:text-xl text-white mb-8">
          Choose our fitness center for a rewarding and transformative fitness experience. Our state-of-the-art facility offers top-notch equipment, knowledgeable trainers, and a welcoming environment that will inspire you to reach your health and wellness goals. With a wide range of group classes, personalized training programs, and modern amenities, we provide everything you need to enhance your fitness journey. Whether you're a beginner or a seasoned athlete, our dedicated staff is committed to helping you achieve results and maintain a healthy lifestyle. Visit our website today and discover the difference our fitness center can make in your life

          </p>
          <button className="bg-[#fc541a] hover:bg-[#193038] text-white font-bold py-2 px-4 rounded">Learn More</button>
        </animated.div>
      </animated.div>
      <div className="w-96 lg:w-1/2 px-6 lg:px-12">
        {rightSideTrailAnimation.map((props, index) => (
          <animated.div key={index} style={props}>
            <img src={photoImage} alt="Fitness" />
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
