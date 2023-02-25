import React from "react";
import loadingImage from "../../assets/loading.gif";

const Loader = ({ loading = false }) => {
  return (
    loading && (
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <img src={loadingImage} width={64} />
      </div>
    )
  );
};

export default Loader;
