import React from "react";
import "./style.css";
import Icon from "../icons";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Leftbar = () => {
  console.log(window.location.hash);
  return (
    <div className="container">
      {Nav.map((nav, i) => (
        <NavLink
          style={{
            color: nav.active ? "white" : "rgba(133, 133, 133, 0.1)",
            cursor: nav.active ? "pointer" : "default",
          }}
          key={i}
          to={nav.active && nav.path}
          className="link"
        >
          {({ isActive }) => (
            <Icon name={isActive ? nav.iconActive : nav.icon} />
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Leftbar;
