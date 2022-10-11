  import React, { useState, useCallback , useContext , useEffect} from "react";
  import { useNavigate } from "react-router-dom";
  import { Button, Form, Input, Space, notification, message } from "antd";
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
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});



    const onFinish = () => {
      message.success('Submit success!');
    };

    const onFinishFailed = () => {
      message.error('Submit failed!');
    };

    useEffect(() => {
      forceUpdate({});
    }, []);
    
    const navigate = useNavigate();
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

    console.log(Id )
    console.log(Name)
    console.log(Email)
    const Createuser = useCallback(async () => {
      
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          {
            body: JSON.stringify({
              id: Id,
              name: Name,
              username: Username ,
              email: Email ,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
        // handle success
        navigate('/dashboard')
        console.log(response);
        setaddUserData(response.data);

        openNotificationWithIcon("success");
      } catch (error) {}
    }, [Id, Name , Username, Email]);
    console.log(addUserData);




    return (
      <>
      
          <Wrapperdiv>
            <div className="wrap">
              <Space direction="vertical">
                <Form
                form={form}
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                  <div className="innerwrap">
                <div> <Form.Item 
                label="Id" 
                name= "Id"
                value={Id} 
                onChange={handleid} 
                rules={[
                  {
                    required: true,
                    
                  },
                  
                ]}
                />
                </div>
                  <div> <Input /> </div> 
                  </div>
                  
                  <div className="innerwrap">
                <div> 
                  <Form.Item 
                  label="Name"
                  value={Name} 
                  name= "Name"
                  onChange={handlename} 
                  rules={[
                    {
                      required: true,
                     
                    },
                    
                  ]}
                  />
                  </div>
                  <div>  <Input /></div>
                    </div>

                    <div className="innerwrap">
                    <div>
                    <Form.Item
                    label="Username"
                    value={Username}
                    onChange={handleusername}   
                    name= "Username"
                    rules={[
                      {
                        required: true,
                        
                      },
                      
                    ]}
                    />
                    </div>
                  <div> <Input /> </div>
                    </div>

                  <div className="innerwrap">
                    <div>
                      <Form.Item
                      label="Email" 
                      value={Email}
                      name= "email"
                      onChange={handleemail}
                      rules={[
                        {
                          required: true,
                          
                        },
          
                      ]}
                      />
                      </div>
                    <div><Input /></div>
                  </div>
                 

                  <Form.Item className="btn">
                    <Button type="primary" onClick={() => Createuser()}  htmlType="submit">
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
