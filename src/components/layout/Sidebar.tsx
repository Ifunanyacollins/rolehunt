import { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import {
  BagIcon,
  ChartIcon,
  IntegrationIcon,
  PaperIcon,
  UserIcon,
} from "../icon";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Overview",
    key: "/overview",
    icon: <BagIcon />,
  },

  {
    label: "Applications",
    key: "/applications",
    icon: <PaperIcon />,
  },

  {
    label: "Profile",
    key: "/profile",
    icon: <UserIcon />,
  },

  {
    label: "Reporting",
    key: "/reporting",
    icon: <ChartIcon />,
  },

  {
    label: "Integrations",
    key: "/integrations",
    icon: <IntegrationIcon />,
  },
];

function Sidebar() {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(`/board${e.key}`);
  };
  return (
    <Menu
      className="text-[#7C8DB5]"
      onClick={onClick}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
}

export default Sidebar;
