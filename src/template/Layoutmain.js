import { Row, Col } from "antd";
import React from "react";
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
import { Dropdown, Menu, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../features/login/loginslice";
import { useDispatch } from "react-redux";


const onSearch = (value) => console.log(value);
const Layoutmain = (props) => {
const dispatch = useDispatch()


  const signout = () => {
    dispatch(setLogin(false));
    navigate("/");
    localStorage.clear();
  };


  const menu = (
    < Menu  onClick={() => signout()}
      items={[
        {
          key: "1",
          label: <a>Sign out</a>,
        },
      ]}
    />
  );

  const navigate = useNavigate();

const users = () => {
  navigate('/dashboard');
}
  const { children } = props;

  return (
    <>
      <CustomLayoutp>
        <CustomSider>
          <Container>
            <div>
              <img
                className="img"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/dashboard-4730878-3930409.png"
              ></img>
            </div>
            <div className="userside" onClick={users}>Users</div>
          </Container>
        </CustomSider>
        <CustomLayoutc>
          <CustomHeader>
            <Row justify="space-between" align="middle">
              <Col span={20}>
                <CustomSearch
                  placeholder="input search text"
                  onSearch={onSearch}
                  enterButton
                />
              </Col>
              <Col span={4} className="right">
                <Dropdown overlay={menu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <UserOutlined
                        className="icon"
                        
                      />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </CustomHeader>
          <CustomContent>{children}</CustomContent>
          <CustomFooter>© Dashboard</CustomFooter>
        </CustomLayoutc>
      </CustomLayoutp>
    </>
  );
};

export default Layoutmain;
