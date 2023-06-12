import { NavLink } from 'react-router-dom'
import { FaUsers, } from 'react-icons/fa'

import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
const InstructorDashboard = () => {
  return (
    <>
      <NavLink
        to='add-class'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
          }`
        }
      >
        

        {/* <span className='mx-4 font-medium'>Add Class</span> */}
      </NavLink>
      <NavLink
        to='all-users'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
          }`
        }
      >
        <FaUsers className='w-5 h-5' />

        <span className='mx-4 font-medium'>All Users</span>
      </NavLink>
     
    </>
  )
}

export default InstructorDashboard;