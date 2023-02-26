import React from "react";
import styles from "./styles.module.scss";

const Stepper = ({ size, steps, step }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "45%",
        bottom: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      {[...Array(steps).keys()].map((_, i) => (
        <div
          key={i}
          className={styles.container}
          style={{
            width: size + "px",
            height: size + "px",
            background: step - 1 >= i ? "#3C87DF" : "#2C303B",
            border: step - 1 === i && "3px solid #F8FAFF",
          }}
        />
      ))}
    </div>
  );
};

export default Stepper;
