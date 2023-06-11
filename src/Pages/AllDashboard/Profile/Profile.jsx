import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <img src={user?.photoURL} alt="User Photo" className="w-20 h-20 rounded-full mb-4" />
            <h2 className="text-2xl font-bold mb-2">{user.displayName ? user.displayName : 'Update your name'}</h2>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <p className="text-gray-600 mb-4">Email:  {user?.email} </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit Profile
            </button>
        </div>
    );
};

export default Profile;