import React, { useContext } from 'react';
import Logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom';
import InstructorRequestModal from '../../AllDashboard/Modal/InstructorRequestModal';
import { useState } from 'react';
import { instructorRole } from '../../../api/Auth';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';


const NavBar = () => {
    const { user, logOut, loading, role, setRole } = useContext(AuthContext);
    const [modal, setModal] = useState(false)
    console.log(role);
    const modalHandler = email => {
        instructorRole(email)
            .then(data => console.log(data))
        toast.success("Now Your Are Instructor")
        setRole('instructor')
        closeModal();
    }
    const closeModal = () => {
        setModal(false)
    }

    // Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error("Logout Error")
            })
    }


    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>

    </>

    return (
        <>
            <div className=" font-semibold border-b-2 border-[#fc541a] navbar bg-white fixed top-0 z-10  text-[#193038]">
                <div className="navbar-start mx-8">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-20 text-white bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={Logo} alt="" className=" w-24 " />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}

                    </ul>
                </div>

                <div className='navbar navbar-end mr-7'>
                    <div className='hidden md:block'>
                        {!role && user && (
                            <button
                                className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition'
                                onClick={() => setModal(true)}
                            >
                                Become an instructor
                            </button>
                        )}

                    </div>
                    <div className="dropdown dropdown-end ">
                        {
                            !loading ? <div>
                                {
                                    user ? <>

                                        <div id='parent-user-profile' className='flex items-center gap-x-3'>

                                            <label id='user-pic' tabIndex={0} className="relative btn btn-ghost btn-circle avatar flex-row-reverse">

                                                <div className="w-12 rounded-full">
                                                    <img src={user.photoURL ? user.photoURL : 'https://freesvg.org/img/abstract-user-flat-4.png'} />
                                                </div>

                                            </label>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link to="/profile" className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/dashboard" className="justify-between">
                                                    Dashboard
                                                </Link>
                                            </li>

                                            <li><Link onClick={() => {
                                                setRole(null)
                                                logOut()
                                            }}>Logout</Link></li>
                                        </ul>
                                    </> : <Link to='/login' className='btn btn-outline border-[#fc541a] btn-sm btn-out hover:border-[#fc541a] rounded-md hover:bg-[#fc541a] hover:text-white '>Login</Link>

                                }
                            </div> : <p>Loading...</p>
                        }
                    </div>
                </div>
                <InstructorRequestModal
                    email={user?.email}
                    modalHandler={modalHandler}
                    isOpen={modal}
                    closeModal={closeModal}

                />
            </div>
        </>
    );
};

export default NavBar;