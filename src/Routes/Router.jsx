import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePages from "../Pages/Home/HomePages/HomePages";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/SignUpLogIn/Login/Login";
import SignUp from "../Pages/SignUpLogIn/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AddClass from "../Pages/AllDashboard/InstructorDashboard/AddClass";
import MyClasses from "../Pages/AllDashboard/InstructorDashboard/MyClasses";
import Profile from "../Pages/AllDashboard/Profile/Profile";
import MySelectedClasses from "../Pages/AllDashboard/StudentDashboard/MySelectedClasses";
import StudentDashboard from "../Pages/AllDashboard/StudentDashboard/StudentDashboard";
import MyEnrolledClasses from "../Pages/AllDashboard/StudentDashboard/MyEnrolledClasses";
import PaymentHistory from "../Pages/AllDashboard/StudentDashboard/PaymentHistory";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
   
    children: [
      {
        path: '/',
        element: <HomePages />
      },
      {
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/classes',
        element: <Classes />
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
    
      path: "*",
      element: <Error></Error>
    
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [

      // instructor
      {
        path: 'add-class',
        element: <AddClass />
      },
      {
        path: 'my-classes',
        element: <MyClasses />
      },
      // Profile 
      {
        path: 'profile',
        element: <Profile />
      },
      // student routes
      {
        path: 'selected-classes',
        element: <MySelectedClasses />
      },
      {
        path: 'enrolled-classes',
        element: <MyEnrolledClasses />
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />
      }
      //------------------------ admin routes ----------------------
     
    ]
  }
  
]);