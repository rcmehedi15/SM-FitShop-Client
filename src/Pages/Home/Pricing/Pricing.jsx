import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Pricing = () => {
    const pricingPlans = [
        {
            name: 'Basic',
            price: '$29.99/month',
            features: [
                'Access to gym facilities',
                'Group fitness classes',
                'Locker room access',
                'Personal trainer sessions',
                'Access to VIP lounge',
                'Towel service',
            ],
        },
        {
            name: 'Premium',
            price: '$49.99/month',
            features: [
                'Access to gym facilities',
                'Group fitness classes',
                'Locker room access',
                'Personal trainer sessions',
                'Access to VIP lounge',
                'Towel service',
            ],
        },
        {
            name: 'VIP',
            price: '$99.99/month',
            features: [
                'Access to gym facilities',
                'Group fitness classes',
                'Locker room access',
                'Personal trainer sessions',
                'Access to VIP lounge',
                'Towel service',
            ],
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                <SectionTitle   heading={"Pricing"} subHeading={"Choose a Membership Plan"}> </SectionTitle>
                    
                
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
                            >
                                <div className="px-6 py-8">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {plan.name}
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-500">{plan.price}</p>
                                    <div className="mt-6">
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center text-base text-gray-500"
                                                >
                                                    {plan.name === 'Basic' && i >= plan.features.length - 3 ? (
                                                        <svg
                                                            className="flex-shrink-0 mr-2 h-6 w-6 text-red-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M14.348 5.652a.5.5 0 0 1 0 .707L10.707 10l3.64 3.64a.5.5 0 0 1-.707.707L10 10.707l-3.64 3.64a.5.5 0 1 1-.707-.707L9.293 10 5.652 6.36a.5.5 0 0 1 .707-.707L10 9.293l3.64-3.64a.5.5 0 0 1 .707 0z"
                                                            />
                                                        </svg>

                                                    ) : plan.name === 'Premium' && i >= plan.features.length - 2 ? (
                                                        <svg
                                                            className="flex-shrink-0 mr-2 h-6 w-6 text-red-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M14.348 5.652a.5.5 0 0 1 0 .707L10.707 10l3.64 3.64a.5.5 0 0 1-.707.707L10 10.707l-3.64 3.64a.5.5 0 1 1-.707-.707L9.293 10 5.652 6.36a.5.5 0 0 1 .707-.707L10 9.293l3.64-3.64a.5.5 0 0 1 .707 0z"
                                                            />
                                                        </svg>

                                                    ) : (
                                                        <svg
                                                            className="flex-shrink-0 mr-2 h-5 w-5 text-green-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                                                            />
                                                        </svg>
                                                    )}
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50">
                                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Select
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
