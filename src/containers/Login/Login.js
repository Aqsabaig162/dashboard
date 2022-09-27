import React from "react";
import { LoginWrapper } from "./login.style";
import { Input, Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
 
  const navigate = useNavigate();
  // <Link to="/login" />;

  const newaccount = () => {
    return navigate("/register");
  };

  return (
    <div className="wrap">
      <LoginWrapper>
        <Space direction="vertical" align="center">
          <Input
            size="large"
            placeholder="Enter your email"
            prefix={<UserOutlined />}
          />

          <Input.Password size="large" placeholder="Input password" />
          <br />
          <Button type="primary" className="btn">
            Log in
          </Button>
          <Button type="primary" className="btn2" onClick={() => newaccount()}>
            Create New Account
          </Button>
          <span>If you have not registered, please register first</span>
        </Space>
      </LoginWrapper>
    </div>
  );
};

export default Login;
