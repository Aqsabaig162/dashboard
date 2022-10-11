import { Space, Table, notification } from 'antd';
import { useState , React , useEffect, useCallback , useContext}  from 'react';
import { Link, useParams , useNavigate } from "react-router-dom";
import axios from 'axios';
import Editdata from './Editdata';
import { Button , Modal} from 'antd';
import { DeleteTwoTone , EditTwoTone } from  '@ant-design/icons';
import {UserContext} from '.';
import { Btnstyle } from './users.style';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '',
    description:
      'Entry Deleted',
      duration: 1,
  });
};


const Usertable = () => {
const [ dataa , setDataa] = useState([]);
const [open, setOpen] = useState(false);
const [confirmLoading, setConfirmLoading] = useState(false);
const [modalText, setModalText] = useState('Are you sure you want to delete?');
const [selectedId, setselectedId] = useState('')
const [apistate, setapistate] = useState(false)
const { addUserData } = useContext(UserContext);

const navigate = useNavigate();



const showModal = () => {
  setOpen(true);
};

const handleOk = () => {

  setModalText('Are you sure you want to delete?');
  setConfirmLoading(true);
   
  if(apistate == false)
  {
    setOpen(false);
    setConfirmLoading(false);
  }
   openNotificationWithIcon('success')
};

const handleCancel = () => {
  console.log('Clicked cancel button');
  setOpen(false);
};

const fetchData = useCallback( async () => {
 try{
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
   // handle success
  
   let data = resp.data;
   if(addUserData){
    data.push(JSON.parse(addUserData?.body))
   }
   console.log(data);
   setDataa(data);
 }
  catch(error) {
    // handle error
    console.log(error);
  }
}, []);

    const deleteData = useCallback ( async (id) => {
      try{
        setapistate(true);
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`,{
       })

        setapistate(false)
        setDataa((currentData) => {
          return currentData.filter((x) => x.id !== id);
        })
      } catch(error){
        console.log(error);
      }
}, []);



 const EditData = () => {
 navigate ('/dashboard/editdata')
}

const addnewuser = () => {
  navigate ('/dashboard/adduser')
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
     responsive: ['md'],
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
    responsive: ['lg'],
  }, 
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    responsive: ['lg'],
  },
  
   {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        
        <a onClick={() => {
          showModal();
          setselectedId(record.id)
          }}>  <DeleteTwoTone />   </a>
     
        <a onClick={EditData}> <EditTwoTone /></a>
      </Space>
    ),
  },
 
];


  // const handleDelete = (id) => {
  //   debugger;
    
  //   setDataa(dataa.filter((data) => dataa.id !== id));
  // };
 




 return ( <>
  <Btnstyle>
 <Button type="primary" onClick={ () => addnewuser() }  >Add new user</Button>
 </Btnstyle>
    <Table rowKey={(row) => row.id}  columns={columns} dataSource={dataa} scroll={{y:"62vh"}} />
  <Modal
    title=""
    open={open}
    onOk={() => {
      handleOk();
      deleteData(selectedId);
    }}
    confirmLoading={confirmLoading}
    onCancel={handleCancel}
  >
    <p>{modalText}</p>
  </Modal>
</>) 
 
 
 
};

export default Usertable;