import { CloudOutlined } from "@ant-design/icons";

const logoStyle = {
/*   backgroundColor: "black", */
  color: "#1890ff",
  fontSize: "48px",
};

function Logo() {
  return (
    <div style={logoStyle}>
      <CloudOutlined />
    </div>
  );
}
export default Logo;
