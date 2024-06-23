import loadPage from "@/router/LoadPage";
import Home from "@/pages/Home";

const routes = [
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
    element: loadPage("Login"),
  },
];

export default routes;
