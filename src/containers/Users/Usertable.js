import { Space, Table } from 'antd';
import { useState , React , useEffect, useCallback}  from 'react';
import { Link, useParams , useNavigate } from "react-router-dom";
import axios from 'axios';
import Editdata from './Editdata';
import { Button } from 'antd';

const Usertable = () => {
<Link to = '/userdata' />
const [ dataa , setDataa] = useState([]);
const navigate = useNavigate();




const fetchData = useCallback(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    console.log(response);
    setDataa(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}, []);

const deleteData = useCallback((id) => {


  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }) 
  .then(function () {
    // handle success
    setDataa((currentData) => {
      return currentData.filter((x) => x.id !== id);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}, []);



 const EditData = () => {
 navigate ('/editdata')
}

const addnewuser = () => {
  navigate ('/adduser')
 }
 


useEffect(() => {
    fetchData()
}, [])


const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username'
  }, 
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  
   {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        
        <a 
        
        onClick={() => deleteData(record.id)}>  Delete  </a>
        <a onClick={() => EditData()}>  Edit  </a>
      </Space>
    ),
  },
  {
    title: <Button type="primary" onClick={ () => addnewuser() }  >Add new user</Button> ,
    key: 'key',
    dataIndex: 'key',
  
  },

];


  // const handleDelete = (id) => {
  //   debugger;
    
  //   setDataa(dataa.filter((data) => dataa.id !== id));
  // };
 




 return <Table  columns={columns} dataSource={dataa} />;
}

export default Usertable;