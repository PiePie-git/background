import React from "react";
import Navbar from "@/components/Navbar";
import MenuSidebar from "@/components/Menu";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Navbar />
      </Header>
      <Layout>
        <Sider width={200}>
          <MenuSidebar />
        </Sider>
        <Layout>
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
