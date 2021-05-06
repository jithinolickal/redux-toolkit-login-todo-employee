import { useContext, useEffect, useState } from "react";
// import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import { Row, Col } from "antd";
import SideMenu from "./SideMenu";
import Header from "./Header";

import data from "./Data/data.json";
import Logo from "./Logo.js";
import Home from "./Home";
import AllEmployees from "./AllEmployees";
import axios from "axios";
import { userContext } from "../userContext";

function Employee() {
  //   const [apiData, setapiData] = useContext(userContext);

  // const [apiData, setapiData] = useState();
  const [value, setValue] = useState(1);

  /* async function loadData(){
    const url = "http://localhost:8080/api/getAllEmployees";
    const response = await fetch(url)
    const data = await response.json();
    console.log("async fetch", data);
  }
  useEffect(() => {
     loadData();


  }, []); */

  /*  const loadData = () => {
    
    axios.get("http://localhost:8080/api/getAllEmployees").then((response) => {
      console.log("data ", response.data);
      setapiData(response.data);
    });
  } */

  const addEmployee = () => {
    setValue(value++);
    // loadData();
  };
  return (
    <div className="App">
      <Row>
        <Col span={4}>
          <Row style={{ justifyContent: "center" }}>
            <Logo />
          </Row>
          <SideMenu />
        </Col>
        <Col span={20}>
          <Row>
            <Header />
          </Row>
          <Switch>
            <Route path="/Employee" exact>
              <Redirect to="/Employee/Dashboard" />
            </Route>
            <Route path="/Employee/Dashboard">
              <Home addEmployee={addEmployee} />
            </Route>
            <Route path="/Employee/Employees">
              <AllEmployees />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default Employee;
