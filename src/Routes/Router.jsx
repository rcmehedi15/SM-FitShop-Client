import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePages from "../Pages/Home/HomePages/HomePages";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/SignUpLogIn/Login/Login";
import SignUp from "../Pages/SignUpLogIn/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AddClass from "../Pages/AllDashboard/InstructorDashboard/AddClass";
import MyClasses from "../Pages/AllDashboard/InstructorDashboard/MyClasses";


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
      }
      //------------------------ admin routes ----------------------
     
    ]
  }
  
]);