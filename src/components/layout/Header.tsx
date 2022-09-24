import { Avatar, Dropdown, Menu, Space } from "antd";
import { useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { BellIcon, SearchIcon } from "../icon";
import routesTitle from "../../__utils__/routes";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Profile",
      },
    ]}
  />
);

function Header({ user }: { user: any }) {
  let location = useLocation();
  return (
    <div className="flex-shrink-0 h-20 flex justify-between items-center px-10">
      <div>
        <h1 className="font-bold text-2xl mb-0">
          {routesTitle[location.pathname]}
        </h1>
        <span className="font-sans text-[#7C8DB5] block text-base">
          Generate reports and monitor metrics.
        </span>
      </div>

      <div className="space-x-8 flex items-center">
        <SearchIcon />
        <BellIcon />

        <div className=" space-x-3 ">
          <Avatar />
          <Dropdown overlay={menu}>
            <Space className="cursor-pointer items-center">
              Patrick Igwe
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
