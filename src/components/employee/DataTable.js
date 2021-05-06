import { Table, Space, Button, Modal, Popconfirm } from "antd";
import "antd/dist/antd.css";
import {useState } from "react";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../redux-slice/employeeSlice";

import "./TableStyle.css";



function DataTable(props) {
  const [savingMsg, setSavingMsg] = useState(false);
  let fetchData = {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const apiData = useSelector(employeeSelector)

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
    /* {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }, */
    {
      title: "Active",
      key: "active",
      render: (text, record) => (
        <Space size="middle">
          {/* <Popconfirm
            title="Sure to delete?"
            onClick={handleDelete(record)}
          > */}
            <a /* onClick={handleDelete(record)} */>Delete</a>
          {/* </Popconfirm> */}
        </Space>
      ),
    },
  ];
/*   const handleDelete = (record) => {
    // alert("sd")
    console.log("delete", record._id);
    deleteRow(record._id);
    function deleteRow(id, e) {
      fetch(`http://localhost:5000/api/books1/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.text()) // or res.json()
      .then(res => console.log("delete",res))

    }
  }; */

  /* function sendGetRequestEmployeeData  ()  {
    try {
      axios.get(
        "http://localhost:8080/api/getAllEmployees"
      ).then(function (re) {
        console.log("re",re);
        fetchData = re.data;
        if(fetchData){
          setapiData(fetchData);
        }
        console.log("started save");
        console.log(fetchData);
        console.log("End save");

        console.log("Inside the timer2")
      props.refreshDataProp();
      setSavingMsg(false);
      });

    } catch (err) {
      console.error(err);
    }
  }; */


 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //console.log(props.data);
  // const data = props.data;
  return (
    <div className="TableStyle">
      {/* <AddNewEmployee /> */}
      <Table dataSource={apiData} columns={columns} />
    </div>
  );
}

export default DataTable;
