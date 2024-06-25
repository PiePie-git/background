import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MenuSidebar from "@/components/Menu";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <MenuSidebar />
      </Sider>
      <Layout>
        <Header>
          <Navbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
