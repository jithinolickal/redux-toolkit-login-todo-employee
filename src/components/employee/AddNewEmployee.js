import React, { useContext, useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import axios from "axios";
import { userContext } from "../userContext";
import { OmitProps } from "antd/lib/transfer/ListBody";

const CollectionCreateForm = ({ visible, onCreate, onCancel, isSaving }) => {
  const [form] = Form.useForm();
  return isSaving ? (
    <Modal visible={visible} /* onCancel={onCancel} */ footer={null}>
      Saving...
    </Modal>
  ) : (
    <Modal
      visible={visible}
      title="Submit a new Entry"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
        size="small"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please enter a Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: "Please enter Age",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please enter Address",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="experience"
          label="Experience"
          rules={[
            {
              required: true,
              message: "Please enter Experience",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddNewEmployee = (props) => {
  const [visible, setVisible] = useState(false);
  const [savingMsg, setSavingMsg] = useState(false);
  let fetchData = {};
  const onCreate = (values) => {
    console.log("Received values of form: ", values);

    /* const dummyData = {
      // "id" : Math.random(),
      "name" : "luke",
      "age" : 6,
      "address" : "India",
      "experience" : 2
    }
 */

     /* function postEmployeeData(){
      try {
         axios.post(
          `http://localhost:8080/api/addEmployee`,
          values
        ).then( (ress) =>{
          console.log("ress",ress);
          sendGetRequestEmployeeData();
        })
        
      } catch (err) {
        console.log(err);
      }
    }
    postEmployeeData();
    
    setSavingMsg(true); */
    
    
   /*   function sendGetRequestEmployeeData  ()  {
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
        })

      } catch (err) {
        console.error(err);
      }
    }; */
    // const sendGetRequestEmployeeData = async () => {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:8080/api/getAllEmployees"
    //     ).then(function (re) {
    //       console.log("re",re);
    //       fetchData = re.data;
    //       if(fetchData){
    //         setapiData(fetchData);
    //       }
    //     })

    //     // console.log(response.data);
    //     console.log("started save");
    //     // fetchData = response.data;
    //     console.log(fetchData);
    //     console.log("End save");

    //     console.log("Inside the timer2")
    //     // setVisible(false);
    //   // setapiData(fetchData);
    //   props.refreshDataProp();
    //   setSavingMsg(false);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // sendGetRequestEmployeeData();


    
    setVisible(false);
  };

  return (
    <div style={{ float: "right" }}>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add New +
      </Button>

      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        isSaving={savingMsg}
      />
    </div>
  );
};

export default AddNewEmployee;
