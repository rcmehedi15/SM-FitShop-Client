import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Footer from "../Pages/Shared/Footer/Footer";
import HomePages from "../Pages/Home/HomePages/HomePages";

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
            path: '/',
            element: <Footer />
        }
      ]
    },
  ]);