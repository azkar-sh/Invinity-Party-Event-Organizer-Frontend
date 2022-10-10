import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAutnenticated = localStorage.getItem("token");
  const location = useLocation();

  if (isAutnenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
