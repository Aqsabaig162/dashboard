import React, { useState , useEffect } from 'react';
import { Layout} from 'antd';
import { CustomBreadcrumb , ProfileWrapper , CustomContent} from './users.style';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Input, Space, Button , message } from "antd";
import { Card } from 'antd';
import { DeleteOutlined , EditOutlined } from  '@ant-design/icons';


const UserProfile = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [imgsrc, setimgsrc] = useState('https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg')

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
    localStorage.setItem("Pfp", newFileList);
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
    
    setimgsrc(localStorage.getItem("pfp"))
    setfirstname(localStorage.getItem("firstname"))
    setlastname(localStorage.getItem("lastname"))
    setemail(localStorage.getItem("email"))
    setpassword(localStorage.getItem("password"))
  }, [])


  const convertBase64 = (file) => {

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const handleFileRead = async (event) => {
    
   
    
      const file = event.target.files[0]
      const base64 = await convertBase64(file)
      console.log(base64)
      setimgsrc(base64)
    
   
  }
 

  const handledelete = () => {
    setimgsrc('https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg')
  }

const handlebutton = () => {
  localStorage.setItem("pfp", imgsrc );
  message.success("Data saved successfully!");
}


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
          <Card 
         size="small"
        
         style={{
        width: 300,
         }}> 

        {/* <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop> */}
          <div>
            <Card 
             size="small"
              style={{
             width: 100,
             height: 100,
             
              }}> 

              <div className='pfp'>
              
             {imgsrc && <img  className='image' src={imgsrc} />}
             <div class="middle">
             <div><DeleteOutlined  onClick={ () => handledelete() }  /></div>
             <div><EditOutlined style={{ cursor: 'pointer'}} />
             <input className='imgclass'
                id="originalFileName"
                type="file"
                required
                label="Document"
                name="originalFileName"
                onChange={e => handleFileRead(e)} 
                />
             </div>
              </div>
             </div>
              
           

            </Card>
            </div>
            <div>
            <Button  type='primary' onClick={ () => handlebutton() } > Save </Button>
            </div>
             </Card>
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