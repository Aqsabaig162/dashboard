import { Space, Table, notification } from 'antd';
import { useState , React , useEffect, useCallback , useContext}  from 'react';
import { Link, useParams , useNavigate } from "react-router-dom";
import axios from 'axios';
import Editdata from './Editdata';
import { Button , Modal } from 'antd';
import { AdduserContext } from './AddUser';





const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '',
    description:
      'Entry Deleted',
      duration: 1,
  });
};


const Usertable = () => {
<Link to = '/userdata' />
const [ dataa , setDataa] = useState([]);
const [open, setOpen] = useState(false);
const [confirmLoading, setConfirmLoading] = useState(false);
const [modalText, setModalText] = useState('Are you sure you want to delete?');
const [selectedId, setselectedId] = useState('')
const [apistate, setapistate] = useState(false)

const navigate = useNavigate();
const adduserdata = useContext(AdduserContext);


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
   console.log(resp);
   setDataa(resp.data);
   console.log(dataa)
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
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }})

        setapistate(false)
        setDataa((currentData) => {
          return currentData.filter((x) => x.id !== id);
        })
      } catch(error){
        console.log(error);
      }
}, []);



 const EditData = () => {
 navigate ('/editdata')
}

const addnewuser = () => {
  navigate ('/adduser')
 }
 






useEffect(() => {
    fetchData()
    console.log(adduserdata)
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
        
        <a onClick={() => {
          showModal();
          setselectedId(record.id)
          }}>  Delete  </a>
     
        <a onClick={EditData}>  Edit  </a>
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
 




 return ( <>
    <Table  columns={columns} dataSource={dataa} scroll={{y:269}} />
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