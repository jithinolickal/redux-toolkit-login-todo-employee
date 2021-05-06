import { Bar } from "@ant-design/charts";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../redux-slice/employeeSlice";
import { userContext } from "../userContext";

import "./Graph.css";

function BarGraph(props) {
  const apiData = useSelector(employeeSelector)
  const [refreshData, setRefreshData] = useState(props.refreshDataProp);
  // const apiData = props.data;
  // let refreshData = props.refreshDataProp;
  // console.log("asasd", props.data);
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
      /* console.log("asasd", item);
      console.log("item.experience ", item.experience);
      console.log(".graphValue2 ", graphValue2); */

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
    /* console.log(
      "5 values",
      cgraphValue1,
      cgraphValue2,
      cgraphValue3,
      cgraphValue4,
      cgraphValue5
    ); */
  }, [apiData]);

  var data = [
    {
      year: "1-2",
      value: graphValue1,
    },
    {
      year: "3-5",
      value: graphValue2,
    },
    {
      year: "6-8",
      value: graphValue3,
    },
    {
      year: "9-12",
      value: graphValue4,
    },
    {
      year: "13+",
      value: graphValue5,
    },
  ];
  var config = {
    data: data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: { position: "bottom" },
    height: 250,
    width: 250,
  };
  return (
    <div className="GraphStyle">
      <Bar {...config} />
    </div>
  );
}

export default BarGraph;
