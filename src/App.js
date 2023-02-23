import React from "react";
import AppLayout from "./Layout/AppLayout";
import Leftbar from "./Components/leftbar";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "#1F2429",
        }}
      >
        <Leftbar />
        <AppLayout />
      </div>
    </>
  );
}

export default App;
