import { useState } from "react";
import { MenuItem } from "@/contants/conMenu.jsx";
// import { useHeaderData } from '@/hooks/useMenuData';
import "./Menu.scss";
import { Menu } from "antd";

const MenuSidebar = () => {
  const [collapsed] = useState(false);
  return (
    <div className="menu">
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={MenuItem}
      />
    </div>
  );
};

export default MenuSidebar;
