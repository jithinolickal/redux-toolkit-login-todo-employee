import { useState } from "react";
import { Avatar, Popover, Switch } from "antd";

import "./index.css";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../redux-slice/loginSlice";

const UserAvatar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const user = useSelector(loginSelector);

  const handleVisibleChange = (visible) => {
    setShowPopUp(visible);
  };

  const content = (
    <div>
      {/* <p>Dark Theme &nbsp;&nbsp;&nbsp;&nbsp; <Switch size="small" defaultChecked /></p> */}
      <p className="cursor-pointer">Feedback!</p>
      <p className="cursor-pointer">Logout</p>
    </div>
  );

  return (
    <div style={{padding:"7%"}}>
      <Popover
        content={content}
        title="@jithinjoseph"
        trigger="click"
        visible={showPopUp}
        onVisibleChange={handleVisibleChange}
      >
        <Avatar
          className="cursor-pointer"
          style={{ color: "#0b0731b5" }}
          size={{ xs: 24, sm: 32, md: 24, lg: 32, xl: 40, xxl: 64 }}
          icon={<UserOutlined />}
        />
      </Popover>
      <span style={{color:"#0b0731b5"}}>{user.name}</span>
    </div>
  );
};

export default UserAvatar;
