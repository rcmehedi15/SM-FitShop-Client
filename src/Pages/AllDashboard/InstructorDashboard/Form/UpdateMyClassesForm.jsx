import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb'

const UpdateMyClassesForm = ({
    handleSubmit,
    loading,
    handleImageUpdate,
    singleClassesData,
    setSingleClassesData
}) => {
    

    return (
        <div className='w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2 md:mr-2">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <label>
                            <input value={singleClassesData?.className}
                                onChange={event =>
                                    setSingleClassesData({ ...singleClassesData, className: event.target.value })} required type="text" placeholder="Class name" className='w-96 px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] text-gray-900' />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2 md:mr-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input value={singleClassesData?.price}
                                onChange={event =>
                                    setSingleClassesData({ ...singleClassesData, price: event.target.value })
                                } required type="number" placeholder="Price" className='w-96 px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] text-gray-900' />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2 md:mr-2">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <label>
                            <input value={singleClassesData?.availableSeats}
                                onChange={event =>
                                    setSingleClassesData({ ...singleClassesData, availableSeats: event.target.value })
                                } required type="number" placeholder="Available seats" className='w-96 px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] text-gray-900' />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-4">
                    <div className="form-control md:ml-2">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input
                            onChange={event => {
                                handleImageUpdate(event.target.files[0])
                            }}
                            className='w-96 px-3 py-1 border rounded-md border-gray-300 text-gray-900'
                            required
                            type='file'
                            id='image'
                            accept='image/*'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#004F83]'
                >
                    {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Update'
                    )}
                </button>
               
            </form>
        </div>

    )
}

export default UpdateMyClassesForm