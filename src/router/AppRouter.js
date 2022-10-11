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
import UsersContext from "../containers/Users";
import { notification } from  'antd' ;
import UserProfile from "../containers/Users/UserProfile";


const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '',
    description:
      'Unautherized Access!',
  });
};

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
  component: <UsersContext><Usertable /></UsersContext>,
  index: true,
 },
 {
   component: <UsersContext><Editdata /></UsersContext>,
   path : "editdata",
  },
  {
   component: <UsersContext><AddUser /></UsersContext>,
   path: 'adduser',
   },
   {
    component:  <UsersContext><UserProfile /></UsersContext>,
    path: 'profile'
   }
];

const RouteWithSubRoutes = (privateRoutes) => {
  return (
  <Route
      path={privateRoutes.path}
      render={(props) => (
          <privateRoutes.component {...props} routes={privateRoutes.routes} />
      )}/>
  )
}

const AppRoutes = () => {

  const navigate = useNavigate();

  const {isLoggedin , userInfo} = useSelector((state) => state);
  
  const statee = isLoggedin;
  localStorage.setItem("state", statee );

  useEffect(() => {
   
    if((isLoggedin == true)&& (localStorage.getItem('Jwt'))) {
      
      navigate('/dashboard');
    } 
    else if((isLoggedin == false) && (!localStorage.getItem('Jwt')))
    {
      
      navigate('/');
     
    }
    
    else if(isLoggedin || (localStorage.getItem('state')))
    {
      console.log('staying signed in')
    }
    else {
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



const renderPrivateRoutes = () => (
  <Route
      key={"dashboard"}
      path={"dashboard"}
      element={<Layoutmain />}
    >
      {privateRoutes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          index={item.index}
          element={item.component}
        />
      ))}
    </Route>
);

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
