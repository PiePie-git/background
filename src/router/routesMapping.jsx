import loadPage from "@/router/LoadPage";

const routes = [
  {
    path: "",
    element: loadPage("Home"),
    children: [
      {
        path: "dashboard",
        element: loadPage("Dashboard"),
      },
      {
        path: "member",
        element: loadPage("Member"),
      },
      {
        path: "report",
        element: loadPage("Report"),
      },
      {
        path: "setting",
        element: loadPage("Setting"),
      },
    ],
  },
  {
    path: "/login",
    element: loadPage("Login"),
  },
];

export default routes;
