import "./Navbar.scss";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const Navbar = ({ toggleCollapsed, collapsed }) => {
  return (
    <div className="navbar">
      <Button className="navbar__button" type="text" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};

export default Navbar;
