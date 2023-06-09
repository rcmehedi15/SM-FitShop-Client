
import { FiHome, FiFolder, FiUser, FiLogOut } from 'react-icons/fi';
import { TiGroup } from "react-icons/ti";

const Dashboard = () => {
   

    return (
        <div className="flex flex-col h-screen bg-blue-900 text-white w-64">
            <nav>
          
            </nav>
            <div className="flex flex-col items-center justify-center py-6">
                <i className="bx bxl-react text-4xl"></i>
                <span className="text-2xl font-semibold">Admin Dashboard</span>
            </div>

            <nav className="flex-grow">
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="flex items-center px-6 py-3">
                            <FiHome className="mr-3" />
                            <span >Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-6 py-3">
                            <FiFolder className="mr-3" />
                            <span>Manage Classes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-6 py-3">
                            <FiUser className="mr-3" />
                            <span >Manage Users</span>
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a href="#" className="flex items-center px-6 py-3">
                            <FiHome className="mr-3" />
                            <span >Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-6 py-3">
                            <TiGroup className="mr-3" />
                            <span >Instructors</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center justify-center py-6 ">
                <button className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-full">
                    <FiLogOut className="mr-2" />
                    <span>Logout</span>
                </button>
            </div>

            
        </div>
    );
};

export default Dashboard;
