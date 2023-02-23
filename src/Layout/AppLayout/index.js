import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div
      style={{
        width: `100%`,
        padding: "10px",
        color: "white",
      }}
    >
      <Outlet />
    </div>
  );
};

export default AppLayout;
