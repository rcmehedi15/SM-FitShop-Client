import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className="mx-auto text-center md:w-4/12 my-8">
                <h3  className="text-3xl text-[#fc541a] font-bold uppercase  rounded-md ">{heading}</h3>
              
                <p className="text-[#393950] mb-2">  {subHeading}  </p>
            </div>
        </>
    );
};

export default SectionTitle;