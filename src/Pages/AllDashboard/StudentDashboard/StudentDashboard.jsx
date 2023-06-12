import React from "react";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlinePayment } from 'react-icons/md';
import { BsFillBookmarkCheckFill,BsBookmarkHeartFill} from 'react-icons/bs'
// import { RiAdminFill } from 'react-icons/ri'
import { toast } from 'react-hot-toast'
// import InstructorRequestModal from '../Modal/InstructorRequestModal.jsx'
import { instructorRole } from '../../../api/Auth'
import { AuthContext } from '../../../Providers/AuthProvider'
import { useContext } from 'react'

const StudentDashboard = () => {
  // const { role, user, setRole } = useContext(AuthContext)
  const [modal, setModal] = useState(false)
  const modalHandler = email => {
    instructorRole(email).then(data => {
      console.log(data)
      toast.success('You are host now, Post Rooms!')
      setRole('host')
      closeModal()
    })
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <>
   
      <NavLink
        to='selected-classes'
        className={({ isActive }) =>
        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
      }`
    }
      >
    
        <BsFillBookmarkCheckFill className='w-5 h-5' />

        <span className='mx-4 font-medium'>Selected Classes</span>
      </NavLink>
      <NavLink
        to='enrolled-classes'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
          }`
        }
      >
        <BsBookmarkHeartFill className='w-5 h-5' />

        <span className='mx-4 font-medium'>Enrolled Classes</span>
      </NavLink>
      <NavLink
        to='payment-history'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
          }`
        }
      >
        <MdOutlinePayment className='w-5 h-5' />

        <span className='mx-4 font-medium'>Payment History</span>
      </NavLink>

      {/* {!role && (
        <div
          onClick={() => setModal(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-white  hover:bg-gray-300   hover:text-white cursor-pointer'
        >
          <RiAdminFill className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Instructor</span>
        </div>
      )}
      <InstructorRequestModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      /> */}
    </>
  )
}

export default StudentDashboard;