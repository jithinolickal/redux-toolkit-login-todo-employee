import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../redux-slice/employeeSlice";

import "./TableStyle.css";

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
  /* {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  }, */
];



function DataTableAllEmp() {
  const apiData = useSelector(employeeSelector)

  return (
    <div className="TableStyle">
      <Table dataSource={apiData} columns={columns} pagination={false}  />
    </div>
  );
}

export default DataTableAllEmp;
