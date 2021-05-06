import { Row, Col } from "antd";

import DataTable from "./DataTable";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import AddNewEmployee from "./AddNewEmployee";

function Home() {
  return (
    <>
      <Row>
        <Col span={12} style={{ padding: "2%" }}>
          <BarGraph />
        </Col>
        <Col span={12} style={{ padding: "2%" }}>
          <PieChart />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ padding: "2%" }}>
          <AddNewEmployee />
          <DataTable />
        </Col>
      </Row>
    </>
  );
}

export default Home;
