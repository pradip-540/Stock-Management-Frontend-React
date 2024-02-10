import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import Contact from "../components/Home/Contact";
import About from "../components/Home/About";
import Login from "../components/Authe/Login";
import Pricing from "../components/Home/Pricing";
import Customers from "../components/Home/Customers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/customers",
        element: <Customers/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      
    ],
  },
]);
export default router;
