import { Row, Col } from "antd";

import UserAvatar from "./Avatar/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className="HeaderStyle">
      <Row justify="end">
        <Col span={6}>
          <UserAvatar />
        </Col>
      </Row>
    </div>
  );
}
export default Header;
