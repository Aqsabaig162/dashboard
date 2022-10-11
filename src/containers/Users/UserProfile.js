import React, { useState , useEffect } from 'react';
import { Layout} from 'antd';
import { CustomBreadcrumb , ProfileWrapper , CustomContent} from './users.style';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Input, Space, Button } from "antd";
import { Card } from 'antd';



const UserProfile = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'Upload Pfp',
      status: 'done',
      url: '',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {

  
    setfirstname(localStorage.getItem("firstname"))
    setlastname(localStorage.getItem("lastname"))
    setemail(localStorage.getItem("email"))
    setpassword(localStorage.getItem("password"))
  }, [])

  return (
    <Layout className="layout">
    <CustomContent
      style={{
        padding: '0 50px',
      }}
    >
      <CustomBreadcrumb
        style={{
          margin: '16px 0',
        }}>
        <CustomBreadcrumb.Item>Home</CustomBreadcrumb.Item>
        <CustomBreadcrumb.Item>dashboard</CustomBreadcrumb.Item>
        <CustomBreadcrumb.Item>profile</CustomBreadcrumb.Item>
      </CustomBreadcrumb>
      <div className="site-layout-content midinfo" >
        <ProfileWrapper>
          <div className='profile'>
       
          <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length == 0 && '+ Upload'}
      </Upload>
    </ImgCrop>
          </div>
         <div className='userinfo'>
         <Card
      size="small"
      title="User Information"
      style={{
        width: 300,
      }}
    >
      <p> <h4>First Name: </h4> {firstname} </p>
      <p> <h4>Last Name: </h4> {lastname} </p>
      <p> <h4>Registered Email: </h4> {email} </p>
    </Card>
         </div>

         
        </ProfileWrapper>
        
        </div>
    </CustomContent>
  
  </Layout>
  )
}

export default UserProfile