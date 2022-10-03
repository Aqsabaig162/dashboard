import React from 'react'
import {LoginWrapper} from "./register.style"
import {Input, Space , Button , DatePicker , Checkbox, Form, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate , Link } from 'react-router-dom';
import { auth } from '../firebase'
import { useState } from "react";
// import addNotification from 'react-push-notification';


export default function Register() {
  
<Link to = '/register' />
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [gender, setGender] = useState('')


const navigate = useNavigate();



const handleEmail = e => {
  setemail(e.target.value)
  
}

const handlepassword = e => {
  setpassword(e.target.value)
  
}
const handlefirstname = e => {
  setfirstname(e.target.value)
  
}

const handlelastname = e => {
  setlastname(e.target.value)
  
}
const handlegender = e => {
  setGender(e.target.value)
 console.log(gender)
}

const [errorMsg, setErrorMsg] = useState('');



const checkfeilds = () => {
 
  const values = [firstname, lastname, email, password , gender];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    }); 
    if (allFieldsFilled) {
      
      console.log('all filled')
    } else {
      errorMsg = 'Please fill out all the fields!';
      
    }
    setErrorMsg(errorMsg);
    
  };


  





// const buttonClick = () => {
//   addNotification({
//       title: 'Success',
//       subtitle: 'This is a subtitle',
//       message: 'User Registered Successfully',
//       theme: 'darkblue', backgroundTop: 'green', //optional, background color of top container.
//       backgroundBottom: 'darkgreen', //optional, background color of bottom container.
//       colorTop: 'green', //optional, font color of top container.
//       colorBottom: 'darkgreen',
      
//       native: true // when using native, your OS will handle theming.
//   });
// };

const register = async e => {
  debugger;
  e.preventDefault();
  try{
    const resp = await auth.createUserWithEmailAndPassword(email, password)
    if (resp)  {
      console.log(auth);
      if(auth) {
        console.log('registered')
        navigate('/');
       
      }
    }
  }
  catch(error){
    alert(error.message)
  }
  }



  
    const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
     
        
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
        const onGenderChange = (value) => {
            switch (value) {
              case 'male':
                form.setFieldsValue({
                  note: 'Hi, man!',
                });
                return;
        
              case 'female':
                form.setFieldsValue({
                  note: 'Hi, lady!',
                });
                return;
        
              case 'other':
                form.setFieldsValue({
                  note: 'Hi there!',
                });
            }
        }
  return (
    
    <div className='wrap'>
    
    <LoginWrapper>
        <h2>Sign Up</h2>
        <hr />
    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
       
        name="fname"
        label="First Name"
        value = {firstname}
        onChange= {handlefirstname}
        rules={[
          {
            
            required: true,
            message: 'Please input your first name',
            
          },
        ]}
      >
        <Input  placeholder="First name" />
      </Form.Item>
      <Form.Item
       
        name="lname"
        label="Last Name"
        value = {lastname}
        onChange= {handlelastname}
        rules={[
          {
            required: true,
            message: 'Please input your last name',
            
          },
        ]}
      >
        <Input  placeholder="Last name" />
      </Form.Item>
      <Form.Item
       
        name="email"
        label="Email"
        value = {email}
        
        onChange= {handleEmail}
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            
          },
        ]}
      >
        <Input  placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value = {password}
        onChange = {handlepassword}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Enter new password"  />
      </Form.Item>
     
      <Form.Item
        name="gender"
        label="Gender"
        value = {gender}
        onChange= {handlegender}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select your gender"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

     
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
       <Button type='primary' className='btn2' htmlType="submit" onClick={register}>
          Register
        </Button>
      
        <Button onClick={ checkfeilds}>test</Button>
      
      </Form.Item>
      
    </Form>
    
    </LoginWrapper>
    </div>
  )
}
