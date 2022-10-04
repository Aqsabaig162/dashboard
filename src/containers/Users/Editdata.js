import React ,{ useState ,  useEffect, useCallback }  from 'react'
import {Link} from 'react-router-dom'
import {Button, Form,Input, Space, notification} from 'antd';
import { Wrapperdiv } from './users.style'
import axios from 'axios';



<Link  to = '/editdata' />
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '',
    description:
      'User Added Successfully',
  });
};


function Editdata() {
  const [id, setid] = useState('')
  const [name, setname] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [ dataa , setDataa] = useState([]);
  <Link to = '/adduser' />



  const handleid = e => {
    setid(e.target.value)  
  }
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
       const response = await axios.put('https://jsonplaceholder.typicode.com/users/1' , {
          body: JSON.stringify({
            id: id,
            name: name ,
            username:username,
            email: email,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
       // handle success
       console.log(response);
       setDataa(response.data);
       console.log(dataa);
       openNotificationWithIcon('success')
      }
      catch (error) {
         // handle error
         console.log(error);
      }
      }, []);

  return (
    <Wrapperdiv>
    <div className='wrap'>
    <Space direction='vertical'>
   <Form >
    
    <Form.Item label="Id"  value = {id} onChange= {handleid}>
    <Input />
    </Form.Item>
    <Form.Item label="Name"  value = {name} onChange= {handlename}>
    <Input />
    </Form.Item>
    <Form.Item label="Username"  value = {username} onChange= {handleusername}>
    <Input />
    </Form.Item>
    <Form.Item label="Email" value = {email} onChange= {handleemail}>
    <Input />
    </Form.Item>
    <Form.Item  className='btn'>
    <Button type='primary' onClick={Createuser}> Update</Button>
    </Form.Item>
   </Form>
   </Space>
   </div>
   </Wrapperdiv>
  )

}

export default Editdata