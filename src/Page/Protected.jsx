import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute(props) {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
const {auth} = props
  console.log("auth?", auth);
// console.log('auth',isAuthenticated)
  return (
    auth?<Route path={props.path} component={props.component} />:<Redirect to="/" />
   
  );
}

export default ProtectedRoute;
