import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import animationLogin from '../../../assets/LoginSignUp/login.gif'
import { useContext, useState } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb'
import { AuthContext } from '../../../Providers/AuthProvider'
import { saveUser } from '../../../api/Auth'
import { toast } from 'react-hot-toast'



const Login = () => {
    const { loading, setLoading, signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // Handle submit
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Login')
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                alert(err.message)
            })
    }

    // Handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Login')
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
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={animationLogin} className='hidden lg:block' alt="" />
                </div>
                <div className='flex justify-center items-center '>
                    <div className='flex flex-col rounded-md sm:p-10  text-gray-900'>
                        <div className='flex justify-center items-center min-h-screen'>
                            <div className='flex flex-col  rounded-md sm:p-10 p-10 bg-gray-100 md:bg-gray-100 text-gray-900'>
                                <div className='mb-8 text-center'>
                                    <h1 className=' text-4xl font-bold'>Log In</h1>
                                    <p className='text-sm text-gray-400'>
                                        Sign in to access your account
                                    </p>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    noValidate=''
                                    action=''
                                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                    <div className='space-y-4'>
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
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="password" className="text-sm mb-2">
                                            Password
                                        </label>
                                        <div className="flex items-center">
                                            <input
                                                type={passwordVisible ? 'text' : 'password'}
                                                name="password"
                                                id="password"
                                                required
                                                placeholder="*******"
                                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#fc541a] bg-gray-200 text-gray-900"
                                            />
                                            <div
                                                className="absolute right-3 cursor-pointer"
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
                                    </div>


                                    <div>

                                        <button
                                            type='submit'
                                            className='bg-[#fc541a] w-full rounded-md py-3 text-white'
                                        >
                                            {loading ? (
                                                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                                            ) : (
                                                'Log In'
                                            )}
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
                                <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                                    <FcGoogle size={32} />

                                    <p>Continue with Google</p>
                                </div>
                                <p className='px-6 text-sm text-center text-gray-400'>
                                    Don't have an account yet?{' '}
                                    <Link
                                        to='/signup'
                                        className='hover:underline hover:text-[#fc541a] text-gray-600'
                                    >
                                        Sign up
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

export default Login