import React from "react";
import styles from "./styles.module.scss";

const Button = ({ title, onClick, width }) => {
  return (
    <div
      className={styles.container}
      style={{ width: width + "px" }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
export default Button;
