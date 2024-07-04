import { useState } from "react";
import { MenuItem } from "@/constants/conMenu.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.scss";
import { Menu } from "antd";

const MenuSidebar = () => {
  const useCurrentPath = () => {
    const location = useLocation();
    return location.pathname.substring(1);
  };

  const [current, setCurrent] = useState(useCurrentPath());
  const navigate = useNavigate();
  const onClick = (e) => {
    const { key } = e;
    setCurrent(key);
    const targetPath = MenuItem?.find((item) => item.key === key)?.path;
    navigate(targetPath, { replace: true });
  };

  return (
    <div className="menu">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        theme="dark"
        items={MenuItem}
      />
    </div>
  );
};

export default MenuSidebar;
