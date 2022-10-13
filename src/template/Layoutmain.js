import { Row, Col } from "antd";
import React from "react";
import { useState , useEffect} from "react";
import {
  CustomHeader,
  CustomLayoutp,
  CustomSider,
  CustomLayoutc,
  CustomContent,
  CustomSearch,
  CustomFooter,
  Container,
} from "./Menustyle";
import { Dropdown, Menu, Space , Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { setLogin } from "../features/login/loginslice";
import { useDispatch } from "react-redux";
import { IdcardTwoTone , RightCircleTwoTone } from  '@ant-design/icons';
const { Sider } = Layout;

const onSearch = (value) => console.log(value);
const Layoutmain = () => {

const [collapsed, setCollapsed] = useState(false);
const [firstname, setfirstname] = useState('')

const dispatch = useDispatch()
useEffect(() => {

  
  setfirstname(localStorage.getItem("firstname"))
  
}, [])
console.log (firstname)   
  const signout = () => {
    dispatch(setLogin(false));
    navigate("/");
    localStorage.removeItem("Jwt");
    localStorage.removeItem("pfp");
  };

const profile = () => {
  navigate('/dashboard/profile')
}

  const menu = (
    < Menu  
      items={[
       
        { 
          key: "1",
          label: <a onClick={() => signout()}> <RightCircleTwoTone /> Sign out</a>,
        },
        {
          key: "2",
          label: <a onClick={() => profile()}> <IdcardTwoTone /> Hello {firstname}!</a>,
        },
      ]}
    />
  );

  const navigate = useNavigate();

const users = () => {
  
  navigate('/dashboard');
}



  return (
    
    <>
      <CustomLayoutp>
        {/* <CustomSider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Container>
            <div>
              <img
                className="img"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-4730878-3930409.png"
              ></img>
            </div>
            <div className="userside" onClick={users}>Users</div>
          </Container>
        </CustomSider> */}
        <CustomSider collapsible collapsed={collapsed}onCollapse={(value) => setCollapsed(value)}>
        <div className="logo">
        <img className="logo1"  src="https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-4730878-3930409.png" /> 
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <a onClick={ () =>  users() } > Users </a>  ,
            },
          ]}
        />
      </CustomSider>
        <CustomLayoutc>
          <CustomHeader>
            <Row justify="space-between" align="middle">
              <Col span={18}>
                <CustomSearch
                  placeholder=""
                  onSearch={onSearch}
                  enterButton
                />
                 
              </Col>
             
              
              <Col span={2} className="right">
                <Dropdown overlay={menu}>
                  <a onClick={(e) => e.preventDefault()}>
                    
                      
                    <Space>
                    
                      <UserOutlined className="icon" />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </CustomHeader>
          <CustomContent><Outlet /></CustomContent>
          <CustomFooter>© Dashboard</CustomFooter>
        </CustomLayoutc>
      </CustomLayoutp>
    </>
  );
};

export default Layoutmain;
