import React, { useState, useCallback , useContext} from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Space, notification } from "antd";
import { Wrapperdiv } from "./users.style";
import axios from "axios";
import {UserContext} from '.';


const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "",
    description: "User Added Successfully",
  });
};

function AddUser() {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const { addUserData, setaddUserData} = useContext(UserContext);

  <Link to="/dashboard/adduser" />;

  const handleid = (e) => {
    setId(e.target.value);
  };
  const handleusername = (e) => {
    setUsername(e.target.value);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlename = (e) => {
    setName(e.target.value);
  };

  const Createuser = useCallback(async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          body: JSON.stringify({
            id: 1,
            name: "aqsa",
            username: "aqsa91",
            email: "aqsa@gmail.com",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // handle success

      console.log(response);
      setaddUserData(response.data);

      openNotificationWithIcon("success");
    } catch (error) {}
  }, []);
  console.log(addUserData);
  return (
    <>
     
        <Wrapperdiv>
          <div className="wrap">
            <Space direction="vertical">
              <Form>
                <Form.Item label="Id" value={Id} onChange={handleid}>
                  <Input />
                </Form.Item>
                <Form.Item label="Name" value={Name} onChange={handlename}>
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Username"
                  value={Username}
                  onChange={handleusername}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Email" value={Email} onChange={handleemail}>
                  <Input />
                </Form.Item>
                <Form.Item className="btn">
                  <Button type="primary" onClick={Createuser}>
                    {" "}
                    Add User
                  </Button>
                </Form.Item>
              </Form>
            </Space>
          </div>
        </Wrapperdiv>
     
    </>
  );
}

export default AddUser;
