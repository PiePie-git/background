import loadPage from "@/router/LoadPage";

const RouterList = [
  {
    path: "",
    element: loadPage("Home"),
    children: [
      {
        path: "dashboard",
        element: loadPage("Dashboard"),
        needLogin: true,
      },
      {
        path: "member",
        element: loadPage("Member"),
        needLogin: true,
      },
      {
        path: "product",
        element: loadPage("Product"),
        needLogin: true,
      },
      {
        path: "report",
        element: loadPage("Report"),
        needLogin: true,
      },
      {
        path: "setting",
        element: loadPage("Setting"),
        needLogin: true,
      },
    ],
  },
  {
    path: "/login",
    element: loadPage("Login"),
    needLogin: false,
  },
];

export { RouterList };
