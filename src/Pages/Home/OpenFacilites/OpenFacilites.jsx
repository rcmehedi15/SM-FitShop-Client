import React from "react";
import Marquee from "react-fast-marquee";
import "tailwindcss/tailwind.css";

const OpenFacilites = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4  md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-200 p-4 rounded-md ">
                    <h3 className="text-lg font-semibold mb-2 mt-10">Opening Hours</h3>
                    <ul className="list-disc list-inside ml-4 md:ml-0">
                        <li>Monday - Friday: 6:00 AM - 10:00 PM</li>
                        <li>Saturday: 8:00 AM - 8:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Facilities</h3>
                    <ul className="list-disc list-inside">
                        <li>Fully equipped gym</li>
                        <li>Cardio machines</li>
                        <li>Weightlifting area</li>
                        <li>Group exercise classes</li>
                        <li>Personal trainers</li>
                        <li>Locker rooms and showers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OpenFacilites;
