import React from "react";

const Error = ({ label }) => {
  return (
    label.length > 0 && (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#F4CDCD",
          color: "#EE1F1F",
          padding: "10px 12px",
          borderRadius: "14px",
        }}
      >
        <h1
          style={{
            fontSize: "14px",
          }}
        >
          {label}
        </h1>
      </div>
    )
  );
};

export default Error;
