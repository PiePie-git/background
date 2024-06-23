// import loadComponents from "@/router/loadComponents";

// const components = loadComponents();

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     element: <Login />,
//   },
// ];

import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
          </div>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
