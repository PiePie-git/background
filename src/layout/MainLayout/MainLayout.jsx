import React from "react";
import Navbar from "@/components/Navbar";
import MenuSidebar from "@/components/Menu";
import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "./MainLayout.scss";

const MainLayout = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <Navbar />
      </header>
      <main className="main-layout__main">
        <MenuSidebar />
        <div className="main-layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
