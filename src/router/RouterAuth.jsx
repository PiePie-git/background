import { RouterList } from "@/router/RoutesMapping.jsx";
import { Navigate, createBrowserRouter, useLocation, useRoutes } from "react-router-dom";

const mapRouterPath = (routerList) => {
  const arr = Array.isArray(routerList) ? routerList : [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].children) {
      newArr.push(arr[i]);
    } else {
      let childrenArr = arr[i].children;
      for (let j = 0; j < childrenArr.length; j++) {
        let newObj = { ...childrenArr[j] };
        newObj.path = `${arr[i].path}/${childrenArr[j].path}`;
        newArr.push(newObj);
      }
    }
  }
  return newArr;
};

const RenderRouter = ({ routes }) => {
  const element = useRoutes(routes);
  return element;
};

const RouterAuth = () => {
  const location = useLocation();
  const routerPathList = mapRouterPath(RouterList);
  const targetRouter = routerPathList.find((item) => item.path === location.pathname);
  const needLogin = targetRouter?.needLogin;
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const token = userInfo ? userInfo.state.token : false;
  if (!token && needLogin && location.pathname !== "/login")
    return <Navigate to="/login" state={{ status: "needLogin" }} />;
  else return <RenderRouter routes={RouterList} />;
};

const router = createBrowserRouter([
  {
    path: "*",
    element: <RouterAuth />,
  },
]);

export default router;
