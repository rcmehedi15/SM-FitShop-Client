import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { addClasses } from '../../../api/Classes';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddClass = () => {
    <Helmet>Add A Class</Helmet>
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (result) => {

        const { className, price, availableSeats } = result;

        const formData = new FormData();
        formData.append('image', result.image[0]);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Single Add Class Data 
                const classData = {
                    className,
                    price: parseFloat(price),
                    instructor: {
                        instructorName: user?.displayName,
                        email: user?.email,
                        instructorPhoto: user?.photoURL
                    },
                    availableSeats,
                    classImage: data.data.display_url,
                }
                addClasses(classData);
                toast.success("Classes Added Success")
                navigate('/dashboard/my-classes');


            })

            .catch((error) => {
                // Handle any errors
                toast.error('no added class')
            })

    };


    return (
        <div className="w-full ">
            <div className="md:p-8 m-4 ">
                <h2 className="text-3xl font-extrabold text-[#004F83]">Add a Class</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Class name</span>
                            </label>
                            <label >
                                <input type="text"  {...register("className", { required: true })} placeholder="Class name" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a]  text-gray-900' />
                                {errors.name && <span className="text-red-600">Class name is required</span>}

                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text">Instructor name</span>
                            </label>
                            <label >

                                <input type="text"  {...register("instructorName")} value={user?.displayName} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a]  text-gray-900' />


                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label >
                                <input type="number"  {...register("price", { required: true })} placeholder="Price" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a]  text-gray-900' />
                                {errors.name && <span className="text-red-600">Price is required</span>}

                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <label >
                                <input type="email" {...register("email")} value={user?.email} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a]  text-gray-900' />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <label >
                                <input type="number"  {...register("availableSeats", { required: true })} placeholder="Available seats" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a]  text-gray-900' />
                                {errors.name && <span className="text-red-600">Available seats is required</span>}

                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text ">Class Image</span>
                            </label>
                            <input className='w-full px-3 py-1 border rounded-md border-gray-300  text-gray-900'
                                required
                                type='file'
                                id='image'

                                accept='image/*'
                                {...register("image")}
                            />
                        </div>
                    </div>

                   

                    <input required type="submit" value="Added" className="btn bg-[#004F83] text-white border-none" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;