import { FiHome, FiFolder, FiUser, FiLogOut } from 'react-icons/fi';
import { TiGroup } from "react-icons/ti";
import { NavLink, Outlet } from 'react-router-dom';

const AllDashboardNavigation = () => {

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-6 w-80 bg-blue-900 text-white">
                <div id='parent-user-profile' className='flex justify-center items-center m-4'>
                <label id='user-pic' tabIndex={0} className="relative btn btn-ghost btn-circle avatar ">
                    <div className="w-12 rounded-full">
                        <img src="img" />
                    </div>
                    <p className='my-4 '>Welcome, </p>

                </label>
            </div>
            <span className='mt-8 mx-auto p-2 bg-slate-600 rounded-lg '>Md Mehedi Hasan</span>
            <div className="flex flex-col items-center justify-center py-4 ">
                <i className="bx bxl-react text-4xl"></i>
                <span className="text-2xl font-semibold ">Admin Dashboard</span>
            </div>
                    <li>
                        <NavLink to="/dashboard/admin" href="#" className="flex items-center px-6 py-2 ">
                            <FiHome className="mr-3" />
                            <span >Admin Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageclasses' href="#" className="flex items-center px-6 py-2">
                            <FiFolder className="mr-3" />
                            <span>Manage Classes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageusers' href="#" className="flex items-center px-6 py-2">
                            <FiUser className="mr-3" />
                            <span >Manage Users</span>
                        </NavLink>
                    </li>
                    
                    <div className="divider border-white border-b-2"></div>

                    <li>
                        <NavLink to='/' href="#" className="flex items-center px-6 py-2">
                            <FiHome className="mr-3" />
                            <span >Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/instructor' href="#" className="flex items-center px-6">
                            <TiGroup className="mr-3" />
                            <span >Instructors</span>
                        </NavLink>
                    </li>
                    
                    <div className="flex items-center justify-center py-6 ">
                        <button className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-full">
                            <FiLogOut className="mr-2" />
                            <span>Logout</span>
                        </button>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default AllDashboardNavigation;