import React, { useState } from "react";
import styles from "./styles.module.scss";
import Icon from "../icons/index";

const Input = ({ type, placeholder, onChange, value, showIcon = true }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      {type === "text" ? (
        <>
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={styles.input}
          />
          {showIcon && (
            <span>
              <Icon name={"homeActive"} />
            </span>
          )}
        </>
      ) : (
        <>
          <input
            type={show ? "text" : "password"}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={styles.input}
          />
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => setShow(!show)}
          >
            <Icon name={show ? "eye" : "eyeSlash"} />
          </span>
        </>
      )}
    </div>
  );
};

export default Input;
