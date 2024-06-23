// import React from "react";
// import RouterList, { useRouter } from "./";
// import { Navigate, useRoutes } from "react-router-dom";

// const routerList = RouterList ? RouterList : [];

// const mapRouterPath = (routerList) => {
//   const arr = Array.isArray(routerList) ? routerList : [];
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i].children) {
//       newArr.push(arr[i]);
//     } else {
//       let childrenArr = arr[i].children;
//       for (let j = 0; j < childrenArr.length; j++) {
//         let newObj = { ...childrenArr[j] };
//         newObj.path = `${arr[i].path}/${childrenArr[j].path}`;
//         newArr.push(newObj);
//       }
//     }
//   }
//   return newArr;
// };
// const RenderRouter = () => {
//   const routes = useRoutes(routerList);
//   return routes;
// };

// const RouterAuth = (props) => {
//   const router = useRouter();
//   const routerPathList = mapRouterPath(routerList);
//   const targetRouter = routerPathList.find((item) => item.path === router.location.pathname);
//   const needLogin = targetRouter?.needLogin;
//   const userInfo = props.userInfo ? props.userInfo : "";
//   const token = userInfo ? userInfo.token : false;
//   if (!token && needLogin && router.location.pathname !== "/login")
//     return <Navigate to="/login" state={{ status: "needLogin" }} />;
//   else return <RenderRouter />;
// };

// export default RouterAuth;
