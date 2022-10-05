import React, {useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "../containers/Login/Login";
import LoginTemplate from "../template/LoginTemplate";
import Registration from "../containers/Register/Register";
import Usertable from "../containers/Users/Usertable";
import Layoutmain from "../template/Layoutmain";
import Editdata from "../containers/Users/Editdata";
import { Notifications } from 'react-push-notification';
import { useSelector } from "react-redux";
import AddUser from "../containers/Users/AddUser";





const publicRoutes = [
  {
    component: <Login />,
    path: "/",
  },
  {
    component: <Registration />,
    path: "/register",
  },
];

const privateRoutes = [
 {
  component: <Usertable />,
  path : "/dashboard",
 },
 {
  component: <Editdata />,
  path : "/editdata",
 },
 {
  component: <AddUser />,
  path: '/adduser'
  }
];

const AppRoutes = () => {

  const navigate = useNavigate();

  const {isLoggedin , userInfo} = useSelector((state) => state);
  useEffect(() => {
    if(isLoggedin && (localStorage.getItem('Jwt'))) {
      
      navigate('/dashboard');
    } else {
      navigate('/');
    } 
  }, [isLoggedin]);
  


  return (
    <Routes>
    {renderPublicRoutes()}
      {renderPrivateRoutes()}
    </Routes>
  );
};



const renderPrivateRoutes = () => {
  return privateRoutes.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={<Layoutmain>{item.component}</Layoutmain>}
    />
  ));
};
const renderPublicRoutes = () => {


  
  return publicRoutes.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={<LoginTemplate>{item.component}</LoginTemplate>}
    />
  ));
};

function AppRouter() {

 

  return (
    
    <BrowserRouter>
    
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppRouter;
