import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../containers/Login/Login";
import LoginTemplate from "../template/LoginTemplate";
import Registration from "../containers/Register/Register";

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

const AppRoutes = () => {
  return (
    <Routes>
      {renderPublicRoutes()}
    </Routes>
  );
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
