import React from "react";
import "@/assets/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import router from "@/router/index.jsx";
import { ConfigProvider } from "antd";
import theme from "@/constants/conTheme";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
