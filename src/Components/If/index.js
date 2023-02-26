import React from "react";

const If = ({ condition, children }) => {
  return condition && children;
};

export default If;
