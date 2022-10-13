import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Space, notification, message } from "antd";
import { Wrapperdiv } from "./users.style";
import axios from "axios";
import { UserContext } from ".";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "",
    description: "User Added Successfully",
  });
};

function AddUser() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const { addUserData, setaddUserData } = useContext(UserContext);
  const [form] = Form.useForm();
  let count = 0;
 
  const navigate = useNavigate();
  const handleId = (e) => {
 
    setid(e.target.value);
  };

  const handleUsername = (e) => {
   
    setusername(e.target.value);
  };

  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handleName = (e) => {
   
    setname(e.target.value);
  };

  const check = () => {
    const values = [id, name, username, email ];

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    }); 
    if (allFieldsFilled) {
      count = 1;
      
    } else {
      
      
    }
    
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
    
  const Createuser = useCallback(async () => {
   
    try {
   if(count ==  1 )
      { const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          body: JSON.stringify({
            id: id,
            name: name,
            username: username,
            email: email,
          }),
        }
      );
      // handle success
      navigate("/dashboard");
      console.log(response);
      setaddUserData(response.data);
      message.success("Submit success!");
      openNotificationWithIcon("success");
    }
     
    } catch (error) {

      message.error("Submit failed!");
    }
  }, [id, name, username, email]);
  console.log(addUserData);

  return (
    <>
      <Wrapperdiv>
        <div className="wrap">
              
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}
        form={form}
        autoComplete="off" >
                
        <Form.Item
            name={['user', 'Id']}
            label="Id"
            value={id}
            onChange={handleId}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
                  
          <Form.Item
            name={['user', 'name']}
            label="Name"
            value={name}
            onChange={handleName}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            value={email}
            onChange={handleEmail}
            rules={[
              { 
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'username']}
            label="Username"
            value={username}
            onChange={handleUsername}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

                  <Form.Item className="btn">
                    <Button
                      type="primary"
                      onClick={ () => { 
                        check();
                        Createuser() ;
                        
                      }
                    }
                      htmlType="submit">
                      Add User
                    </Button>
                  
                  </Form.Item>
                </Form>
            
            </div>
          </Wrapperdiv>
        </>
  );
}

export default AddUser;
