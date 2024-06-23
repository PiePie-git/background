// import loadComponents from "@/router/loadComponents";

// const components = loadComponents();

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     element: <Login />,
//   },
// ];

/* eslint-disable */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

const loadPage = (id) => {
  const Page = lazy(() => import(`../pages/${id}`));
  return (
    <Suspense fallback={`123`}>
      <Page />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: loadPage("Dashboard"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
