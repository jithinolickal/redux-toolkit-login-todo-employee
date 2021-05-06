import React, { useContext, useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeSelector,
  saveEmployees,
} from "../../redux-slice/employeeSlice";

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
  const dispatch = useDispatch();
  const apiData = useSelector(employeeSelector);

  let fetchData = {};
  const onCreate = async (values) => {
    // const id = Math.random();
    const name = values.name;
    const age = Number(values.age);
    const address = values.address;
    const experience = Number(values.experience);

    console.log("Received values of form: ", values);

    //Add New Employee
    try {
      axios.post('https://rocky-bastion-69722.herokuapp.com/create', {
        name: name,
        age: age,
        address: address,
        experience: experience
      })
      .then(function (response) {
        console.log(response);
        //Update redux state
        dispatch(
          saveEmployees([
            ...apiData,
            {
              id: response.data.message,
              name: name,
              age: age,
              address: address,
              experience: experience,
            },
          ])
          );
        
      });
    } catch (error) {
      console.log("POST request Error : ", error);
    }


    // const postResponse = await postEmployee(values);
    // const postResponse = await postEmployee(values).then(res=>{
    //   console.log("sssss",res)
    // });


    //   console.log("asd",postResponse);
 


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
