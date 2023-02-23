import React from "react";
import IIcon from "./svg/svg";

const Icon = props => {
  return <>{IIcon[props.name]}</>;
};

export default Icon;
