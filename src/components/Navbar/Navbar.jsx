import "./Navbar.scss";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleCollapsed, collapsed }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="navbar navbar__content">
      <Button className="navbar__button" type="text" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Button className="navbar__button" type="text" onClick={logout}>
        {<LogoutOutlined />}
      </Button>
    </div>
  );
};

export default Navbar;
