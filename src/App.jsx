import React from "react";
import "@/assets/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import router from "@/router/index.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
