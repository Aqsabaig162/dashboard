import React from 'react'
import {LoginWrapper} from "./register.style"
import {Input, Space , Button , DatePicker , Checkbox, Form, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Register() {

const navigate = useNavigate();

const register = () => {
  navigate('/')
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
        label="Username"
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
       <Button type='primary' className='btn2' htmlType="submit"  onClick={register}>
          Register
        </Button>
      </Form.Item>
      
    </Form>
    
    </LoginWrapper>
    </div>
  )
}
