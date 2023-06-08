import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import animationLogin from '../../../../assets/LoginSignUp/singup.gif'

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={animationLogin} className='w-full' alt="" />
                </div>
                <div className='flex justify-center items-center '>
                    <div className='flex flex-col rounded-md sm:p-10  text-gray-900'>
                        <div className='flex justify-center items-center min-h-screen'>
                            <div className='flex flex-col  rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                                <div className='mb-8 text-center'>
                                    <h1 className=' text-4xl font-bold'>Sign Up</h1>
                                    <p className='text-sm my-2 text-gray-400'>
                                        Sign Up to access your account
                                    </p>
                                </div>
                                <form
                                    noValidate=''
                                    action=''
                                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                    <div className='space-y-4'>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Name
                                            </label>
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                placeholder='Enter Your Name'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Email address
                                            </label>
                                            <input
                                                type='email'
                                                name='email'
                                                id='email'
                                                required
                                                placeholder='Enter Your Email '
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Photo URL
                                            </label>
                                            <input
                                                type='text'
                                                name='text'
                                                id='text'
                                                required
                                                placeholder=' Photo URL '
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                            />
                                        </div>
                                        <div>
                                            <div className='flex justify-between'>
                                                <label htmlFor='password' className='text-sm mb-2'>
                                                    Password
                                                </label>
                                            </div>
                                            <input
                                                type='password'
                                                name='password'
                                                id='password'
                                                required
                                                placeholder='*******'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type='submit'
                                            className='bg-[#fc541a] w-full rounded-md py-3 text-white'
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <div className='space-y-1'>
                                    <button className='text-xs hover:underline hover:text-[#fc541a] text-gray-400'>
                                        Forgot password?
                                    </button>
                                </div>
                                <div className='flex items-center pt-4 space-x-1'>
                                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                    <p className='px-3 text-sm dark:text-gray-400'>
                                        Login with social accounts
                                    </p>
                                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                </div>
                                <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                                    <FcGoogle size={32} />

                                    <p>Continue with Google</p>
                                </div>
                                <p className='px-6 text-sm text-center text-gray-400'>
                                    Don't have an account yet?{' '}
                                    <Link
                                        to='/login'
                                        className='hover:underline hover:text-[#fc541a] text-gray-600'
                                    >
                                       Log In
                                    </Link>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SignUp