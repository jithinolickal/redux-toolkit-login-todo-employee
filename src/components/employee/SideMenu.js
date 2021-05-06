import { Menu } from "antd";
import {
  TeamOutlined,
  HomeOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div>
      <Menu
        /* style={{ width: "100%" }} */
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/Employee/Dashboard">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          <Link to="/Employee/Employees">All Employees</Link>
        </Menu.Item>
        {/* <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item> */}
      </Menu>
    </div>
  );
}

export default SideMenu;
