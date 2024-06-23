import { useState } from "react";
import { MenuItem } from "@/constants/conMenu.jsx";
// import { useHeaderData } from '@/hooks/useMenuData';
import { useNavigate } from "react-router-dom";
import "./Menu.scss";
import { Menu } from "antd";

const MenuSidebar = () => {
  const [current, setCurrent] = useState("mail");
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
