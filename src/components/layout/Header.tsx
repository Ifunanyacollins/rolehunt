import { Avatar, Dropdown, Menu, notification, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { BellIcon, SearchIcon } from "../icon";
import routesTitle from "../../__utils__/routes";
import type { MenuProps } from "antd";
import { Auth, DataStore } from "aws-amplify";
import { getErrorMessage } from "../../__utils__/getErrorMessage";

function Header({ user }: { user: any }) {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await DataStore.clear();
      await Auth.signOut();
      navigate("/auth/login");
    } catch (error) {
      notification.open({ message: getErrorMessage(error), type: "error" });
    }
  };
  const handleMenuSelection: MenuProps["onClick"] = async ({ key }) => {
    if (key === "logout") {
      await handleLogout();
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuSelection}
      items={[
        {
          key: "logout",
          label: "Logout",
        },
      ]}
    />
  );

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
        <BellIcon />

        <div className=" space-x-3 ">
          <Avatar />
          <Dropdown overlay={menu}>
            <Space className="cursor-pointer items-center capitalize">
              {`${user?.attributes["custom:firstName"]} ${user?.attributes["custom:lastName"]}`}
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
