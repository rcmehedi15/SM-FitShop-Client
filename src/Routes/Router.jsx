import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Footer from "../Pages/Shared/Footer/Footer";
import HomePages from "../Pages/Home/HomePages/HomePages";
import Login from "../Pages/Home/SignUpLogIn/Login/Login";
import SignUp from "../Pages/Home/SignUpLogIn/SignUp/SignUp";

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

]);