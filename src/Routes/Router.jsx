import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePages from "../Pages/Home/HomePages/HomePages";
import AllDashboardNavigation from "../Pages/Dashboard/AllDashboardNavigation/AllDashboardNavigation";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/StudentDashboard/MyEnrolledClasses/MyEnrolledClasses";
import Login from "../Pages/SignUpLogIn/Login/Login";
import SignUp from "../Pages/SignUpLogIn/SignUp/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePages />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><AllDashboardNavigation /></PrivateRoute>,
    children: [
      //------------------------ admin routes ----------------------
      {
        path: 'admin',
        element: <AdminDashboard />
      },
      {
        path: 'manageclasses',
        element: <ManageClasses />
      },
      {
        path: 'manageusers',
        element: <ManageUsers /> 
      },
      // ---------------------- student routes --------------------
      {
        path: 'student',
        element: <StudentDashboard />
      },
      {
        path: 'myselectedclass',
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'myenrolledclass',
        element: <MyEnrolledClasses />
      },
      // {
      //   path: 'payment',
      //   element: <AdminDashboard></AdminDashboard>
      // },
      // ---------------------- instructor routes --------------------
      {
        path: 'instructor',
        element: <InstructorDashboard />
      },
      {
        path: 'addclass',
        element: <AddClass />
      },
      {
        path: 'myclasses',
        element: <MyClasses />
      }
    ]
  }
  
]);