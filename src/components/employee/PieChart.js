import { useContext, useEffect, useState } from "react";
import { Pie } from "@ant-design/charts";

import "./Graph.css";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../redux-slice/employeeSlice";

function PieChart(props) {
  const apiData = useSelector(employeeSelector);
  const [graphValue1, setGraphValue1] = useState(0);
  const [graphValue2, setGraphValue2] = useState(0);
  const [graphValue3, setGraphValue3] = useState(0);
  const [graphValue4, setGraphValue4] = useState(0);
  const [graphValue5, setGraphValue5] = useState(0);

  useEffect(() => {
    let cgraphValue1 = 0;
    let cgraphValue2 = 0;
    let cgraphValue3 = 0;
    let cgraphValue4 = 0;
    let cgraphValue5 = 0;
    apiData.map((item) => {
      if (item.experience <= 2) {
        cgraphValue1++;
      } else if (item.experience <= 5) {
        cgraphValue2++;
      } else if (item.experience <= 8) {
        cgraphValue3++;
      } else if (item.experience <= 12) {
        cgraphValue4++;
      } else if (item.experience > 12) {
        cgraphValue5++;
      }
    });
    setGraphValue1(cgraphValue1);
    setGraphValue2(cgraphValue2);
    setGraphValue3(cgraphValue3);
    setGraphValue4(cgraphValue4);
    setGraphValue5(cgraphValue5);
  }, [apiData]);

  var data = [
    {
      type: "1-2",
      value: graphValue1,
    },
    {
      type: "3-5",
      value: graphValue2,
    },
    {
      type: "6-8",
      value: graphValue3,
    },
    {
      type: "9-12",
      value: graphValue4,
    },
    {
      type: "13+",
      value: graphValue5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: function content(_ref) {
        var percent = _ref.percent;
        return "".concat(Math.round(percent * 100), "%");
      },
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [{ type: "element-active" }],
    height: 250,
    width: 250,
  };

  return (
    <div className="GraphStyle">
      <Pie {...config} />
    </div>
  );
}

export default PieChart;
