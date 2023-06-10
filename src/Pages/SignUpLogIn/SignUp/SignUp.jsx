import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import animationLogin from '../../../assets/LoginSignUp/singup.gif'
import { AuthContext } from '../../../Providers/AuthProvider';
import { TbFidgetSpinner } from 'react-icons/tb'
import { updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc'
import { saveUser } from '../../../api/Auth';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { loading, setLoading, createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({

                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    // save user db
                                    saveUser(result.user)
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => alert("Error", error))
            })
    };
    // Handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                alert('Successfullya Login')
                // save user db
                saveUser(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                alert(err.message)
            })
    }

    return (
        <div className="hero mt-12">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left ">
                    <div className="text-center lg:text-left">
                        <img src={animationLogin} className='hidden lg:block' alt="" />
                    </div>
                </div>
                <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100 p-5 rounded-3xl">
                    <form className="card-body pb-1" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900' />
                            {errors.name && <span className="text-red-600">Name is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Your Photo</span>
                            </label>

                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900' />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="email" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900' />
                            {errors.email && <span className="text-red-600">Email is required</span>}


                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900"
                                />
                                <div
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19.071 7.071a8 8 0 10-11.314 11.314l1.789-1.79a4.5 4.5 0 11-6.364-6.364l1.79-1.789a8 8 0 0111.315 0z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {errors.password?.type === 'required' && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p className="text-red-600">Password must be at least 6 characters</p>
                            )}
                            {errors.password?.type === 'maxLength' && (
                                <p className="text-red-600">Password must be less than 20 characters</p>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <p className="text-red-600">
                                    Password must have one uppercase letter, one lowercase letter, one number, and one special character.
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input
                                type="password"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: value => value === watch('password') || 'Passwords do not match'
                                })}
                                placeholder="Confirm password"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900"
                            />
                            {errors.confirmPassword?.type === 'required' && (
                                <p className="text-red-600">Confirm password is required</p>
                            )}
                            {errors.confirmPassword?.message && (
                                <p className="text-red-600">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        <div>

                            <button
                                type='submit'
                                className='bg-[#fc541a] w-full rounded-md mt-4 py-3 text-white'
                            >
                                {loading ? (
                                    <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                                ) : (
                                    'Sign Up'
                                )}
                            </button>

                        </div>
                    </form>
                    <label className="p-10">
                        <p className='text-center'>Already have an account ? <Link to="/login" className="text-blue-400 link link-hover">Login Now!</Link></p>
                    </label>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;