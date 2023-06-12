import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
function Instructors() {
    const [instructors, setInstructors] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/instructor`);
          setInstructors(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="mx-9 mt-40">
        <SectionTitle heading={"Instructors"} subHeading={"Get Inspired and Motivated by Our Top-rated Instructors"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="rounded overflow-hidden shadow-lg mx-1">
              <img src={instructor.userPhoto} className="w-full h-96" />
              <div className="px-6 text-center py-4">
                <div className="font-bold text-xl mb-2">{instructor.userName}</div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default Instructors;