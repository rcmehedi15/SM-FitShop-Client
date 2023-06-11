import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Instructors = () => {
    const { user, role } = useContext(AuthContext);

    return (
        <>
          
            <div className="mx-9 mt-40">

                <SectionTitle heading={" Instructors"} subHeading={"  Get Inspired and Motivated by Our Top-rated Instructors"}> </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {role && (
                        <div className="rounded overflow-hidden shadow-lg mx-1">
                            <img src={user.photoURL} className="w-full h-96" />
                            <div className="px-6 text-center py-4">
                                <div className="font-bold text-xl mb-2">{user.displayName}</div>
                                <div className="font-bold text-xl mb-2">Student:</div>

                            </div>
                        </div>
                    )}

                </div>
            </div>
                       
        </>
    );
};

export default Instructors;
