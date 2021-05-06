import { Table, Space, Button, Modal, Popconfirm } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { employeeSelector, saveEmployees, deleteEmployees } from "../../redux-slice/employeeSlice";
import deleteEmployee from "./service/deleteEmployee";
import getApi from "./service/getEmployee";

import "./TableStyle.css";



function DataTable(props) {
  const [savingMsg, setSavingMsg] = useState(false);
  let fetchData = {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const apiData = useSelector(employeeSelector)
  const dispatch = useDispatch();

  useEffect( async () => {
    const apiResult = await getApi();
    console.log("Api get ", apiResult);
    dispatch(saveEmployees(apiResult))
  }, [])

  const handleDelete = (record) =>{
    console.log("delete record",record);
    try {
      deleteEmployee(record.id);
    } catch (error) {
      console.log("Delete Error!");
    }
    dispatch(deleteEmployees(record.id));
    console.log("Record Deleted!");
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Active",
      key: "active",
      render: (text, record) => (
        <Space size="middle">
          {/* <Popconfirm
            title="Sure to delete?"
            onClick={handleDelete(record)}
          > */}
            <a onClick={()=>handleDelete(record)}>Delete</a>
          {/* </Popconfirm> */}
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="TableStyle">
      {/* <AddNewEmployee /> */}
      <Table dataSource={apiData} columns={columns} />
    </div>
  );
}

export default DataTable;
