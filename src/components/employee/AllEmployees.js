import { Row, Col } from "antd";
import { useContext } from "react";
import { userContext } from "../userContext";
import DataTableAllEmp from "./DataTableAllEmp";

function AllEmployees(props) {
  // const [apiData, setapiData] = useContext(userContext);
  return (
    <>
      <Row>
      <Col span={24} style={{ padding: "2%" }}>
          <DataTableAllEmp /* data={apiData} */ />
        </Col>
      </Row>
    </>
  );
}

export default AllEmployees;
