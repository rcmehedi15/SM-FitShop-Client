import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import InstructorRequestModal from '../../AllDashboard/Modal/InstructorRequestModal';
import { instructorRole } from '../../../api/Auth';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Logo from '../../../assets/Logo.png';

const NavBar = () => {
  const { user, logOut, loading, role, setRole } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState('light');

  const modalHandler = (email) => {
    instructorRole(email).then((data) => console.log(data));
    toast.success('Now You Are an Instructor');
    setRole('instructor');
    closeModal();
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast.error('Logout Error');
      });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`font-semibold border-b-2 border-[#fc541a] navbar ${
          theme === 'dark' ? 'bg-black text-white' : 'bg-white text-[#193038]'
        } fixed top-0 z-10`}
      >
        <div className="navbar-start mx-8">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                theme === 'dark' ? 'bg-opacity-20 text-white bg-black' : ''
              }`}
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <img src={Logo} alt="" className="w-24" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar navbar-end mr-7">
          <div className="hidden md:block">
            {!role && user && (
              <button
                className={`disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition ${
                  theme === 'dark'
                    ? 'bg-[#193038] text-white hover:text-[#193038]'
                    : 'bg-white text-[#193038]'
                }`}
                onClick={() => setModal(true)}
              >
                Become an instructor
              </button>
            )}
          </div>
          <div className="dropdown dropdown-end">
            {!loading ? (
              <div>
                {user ? (
                  <>
                    <div
                      id="parent-user-profile"
                      className="flex items-center gap-x-3"
                    >
                      <label
                        id="user-pic"
                        tabIndex={0}
                        className="relative btn btn-ghost btn-circle avatar flex-row-reverse"
                      >
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              user.photoURL
                                ? user.photoURL
                                : 'https://freesvg.org/img/abstract-user-flat-4.png'
                            }
                            alt="User Profile"
                          />
                        </div>
                      </label>
                    </div>
                    <ul
                      tabIndex={0}
                      className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                        theme === 'dark'
                          ? 'bg-base-100 text-[#193038]'
                          : 'bg-white text-[#193038]'
                      }`}
                    >
                      <li>
                        <Link to="dashboard/profile" className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard" className="justify-between">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            setRole(null);
                            logOut();
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className={`btn btn-outline border-[#fc541a] btn-sm btn-out hover:border-[#fc541a] rounded-md hover:bg-[#fc541a] hover:text-dark ${
                      theme === 'dark'
                        ? 'border-white hover:bg-white hover:text-[#193038]'
                        : 'border-[#fc541a] hover:bg-[#fc541a] hover:text-white'
                    }`}
                  >
                    Login
                  </Link>
                )}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <InstructorRequestModal
          email={user?.email}
          modalHandler={modalHandler}
          isOpen={modal}
          closeModal={closeModal}
        />
        <div className="absolute top-5 md:right-80 ">
          <button
            className={`p-2 rounded-full focus:outline-none ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
             <circle cx="12" cy="12" r="10" fill="yellow" />
             <path d="M12 2v2" stroke="black" stroke-width="2" />
             <path d="M12 20v2" stroke="black" stroke-width="2" />
             <path d="M4.93 4.93l1.41 1.41" stroke="black" stroke-width="2" />
             <path d="M18.36 18.36l1.41 1.41" stroke="black" stroke-width="2" />
             <path d="M1 12h2" stroke="black" stroke-width="2" />
             <path d="M20 12h2" stroke="black" stroke-width="2" />
             <path d="M4.93 19.07l1.41-1.41" stroke="black" stroke-width="2" />
             <path d="M18.36 5.64l1.41-1.41" stroke="black" stroke-width="2" />
           </svg>
           
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2l-5.5 9h11z" fill="white" />
                <circle cx="17.5" cy="17.5" r="4.5" fill="none" stroke="white" stroke-width="2" />
                <path d="M3 13h2v7h2v-7h2v-2H3z" fill="white" />
              </svg>
              
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
