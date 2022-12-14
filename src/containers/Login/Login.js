import React from "react";
import { LoginWrapper } from "./login.style";
import { Input, Space, Button } from "antd";
import { UserOutlined ,LockOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from '../firebase'
import { useDispatch} from 'react-redux'
import { setLogin } from "../../features/login/loginslice";
import { notification } from  'antd' ;



const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '',
    description:
      'Logged In Successfully',
  });
};



const Login = () => {
  const dispatch = useDispatch()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate();

 
  const signin = async (e) =>{
    e.preventDefault();
    try{
      const resp = await auth.signInWithEmailAndPassword(email,password)
      if (resp) {
        console.log('resp recived')
        console.log(resp);
       const key = resp.user._delegate.accessToken
       console.log(key)
       localStorage.setItem('Jwt', key)
       console.log('signed in')
       dispatch(setLogin(true));
       openNotificationWithIcon('success')
    }
  }
  catch(error){
    alert(error.message)
  }
  }
  const handleEmail = e => {
    setemail(e.target.value)
  }

  const handlepassword = e => {
    setpassword(e.target.value)
  }


  const newaccount = () => {
    
      navigate('/register')
    
  };

  return (
    <div className="wrap">
      <LoginWrapper>
        <Space direction="vertical" align="center">
          <Input
            size="large"
            placeholder="Enter your email"
            value={email}
            onChange= {handleEmail}
            prefix={<UserOutlined />}
          />

          <Input.Password size="large" placeholder="Input password" value={password} onChange= {handlepassword}
           prefix={<LockOutlined className="site-form-item-icon" />}
          />
          <br/>
          <Button type="primary" className="btn" onClick={(e) => signin(e)} >
            Log in
          </Button>
          <Button type="primary" className="btn2" onClick={() => newaccount() }>
            Create New Account
          </Button>
          <span>If you have not registered, please register first</span>
        </Space>
      </LoginWrapper>
    </div>
  );
};

export default Login;
