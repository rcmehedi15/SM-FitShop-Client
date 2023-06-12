import React from 'react';

const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" className="w-64" />
                <h1 className="text-3xl font-bold mt-4">Oops! Page not found</h1>
                <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
                <a href="/" className="text-blue-500 underline mt-4">Back to Home</a>
            </div>
        </div>
    );
};

export default Error;