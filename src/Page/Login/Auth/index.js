import React from "react";
import styles from "./styles.module.scss";
import Input from "../../../Components/Input";
import Button from "../../../Components/button";
import Icon from "../../../Components/icons";

const Auth = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            width: "150px",
            padding: 0,
          }}
        >
          <Icon name="logo" />
        </span>
        <h1>TAJCENT</h1>
      </div>
      <br />
      <div className={styles.root}>
        <Input type={"text"} placeholder={"Войти"} />
        <br />
        <Input type={"password"} placeholder={"Пароль"} />
        <br />
        <Button title={"Войти"} width={280} />
      </div>
    </div>
  );
};

export default Auth;
