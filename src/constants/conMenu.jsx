import {
  DesktopOutlined,
  UserOutlined,
  PieChartOutlined,
  SettingOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const MenuItem = [
  {
    key: "dashboard",
    icon: <DesktopOutlined />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    key: "member",
    icon: <UserOutlined />,
    label: "Member",
    path: "/member",
  },
  {
    key: "product",
    icon: <ShopOutlined />,
    label: "Product",
    path: "/product",
  },
  {
    key: "report",
    icon: <PieChartOutlined />,
    label: "Report",
    path: "/report",
  },
  {
    key: "setting",
    icon: <SettingOutlined />,
    label: "Setting",
    path: "/setting",
  },
];

export { MenuItem };
