import React ,{ useState ,  useEffect, useCallback }  from 'react'
import {Link} from 'react-router-dom'
import {Button, Form,Input, Space, notification , message} from 'antd';
import { Wrapperdiv } from './users.style'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


<Link  to = '/dashboard/editdata' />
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '',
    description:
      'User Added Successfully',
  });
};


function Editdata() {
  
  const [name, setname] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [ dataa , setDataa] = useState([]);
  const [form] = Form.useForm();
  
  let count = 0;
  const navigate = useNavigate();


  const check = () => {
    const values = [name, username, email ];

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    }); 
    if (allFieldsFilled) {
      count = 1;
      message.success("Submit success!");
    } else {
      message.error("Submit failed!");
      
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
  
  const handleusername = e => {
    setusername(e.target.value)  
  }
  const handleemail = e => {
    setemail(e.target.value)  
  }
  const handlename = e => {
    setname(e.target.value)  
  }

 
   

    const Createuser = useCallback(async () => {
      try {
        if(count ==  1 )
      {
        const response = await axios.put('https://jsonplaceholder.typicode.com/users/1' , {
          body: JSON.stringify({
           
            name: name ,
            username:username,
            email: email,
          }),
          
        })
       // handle success
       navigate("/dashboard");
       console.log(response);
       setDataa(response.data);
       console.log(dataa);
       openNotificationWithIcon('success')
      } 
      }
      catch (error) {
         // handle error
         console.log(error);
      }
      }, [name, username, email]);

  return (
    <Wrapperdiv>
    <div className='wrap'>
   
   <Form 
    {...layout} name="nest-messages" validateMessages={validateMessages}
    form={form}
    autoComplete="off" >
    
   
    <Form.Item
    name={['user', 'name']}
    label="Name"
    value={name}
    onChange={handlename}
    rules={[
    {
     required: true,
    },
    ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
    name={['user', 'username']}
    label="Userame"
    value={username}
    onChange={handleusername}
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
  onChange={handleemail}
    rules={[
   { 
   required: true,
    type: 'email',
   },
    ]}
    >
   <Input />
  </Form.Item>
    
   
    <Form.Item  className='btn'>
    <Button type='primary' onClick={Createuser}> Update</Button>
    </Form.Item>
   </Form>
 
   </div>
   </Wrapperdiv>
  )

}

export default Editdata