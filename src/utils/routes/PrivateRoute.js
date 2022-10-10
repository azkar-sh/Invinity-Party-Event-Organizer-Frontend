import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const isAutnenticated = localStorage.getItem("token");
  const location = useLocation();
  const roleUser = "Admin";

  if (!isAutnenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (props.isAdmin && roleUser !== "Admin") {
    return <Navigate to="/*" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
