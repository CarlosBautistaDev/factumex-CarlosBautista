import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Component}) => {
    const isauth = () => {
        if (localStorage.getItem("user")) {
            return true
        }else{ return false}
    }
  const authed = isauth(); // isauth() returns true or false based on localStorage

  return authed ? <Component />: <Navigate to="/home" />;
};
export default PrivateRoute;
