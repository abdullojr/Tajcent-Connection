import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../../Components/Input";
import Button from "../../../Components/button";
import Icon from "../../../Components/icons";
import Loader from "../../../Components/loader";
import { NavLink } from "react-router-dom";

const Auth = () => {
  const [loading, setLoading] = useState(false);
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
          className={styles.unSelectable}
          style={{
            width: "130px",
            padding: 0,
            color: "#3C87DF",
          }}
        >
          <Icon name="id" />
        </span>
        <h1
          style={{
            color: "#3C87DF",
            fontWeight: "500",
          }}
        >
          {/* Авторизация  */}
          TAJCENT CONNECT
        </h1>
      </div>
      <br></br>
      <div className={styles.root}>
        <Input type={"text"} placeholder={"ID пользователя"} />
        <br />
        <Input type={"password"} placeholder={"Пароль"} />
        <br />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <NavLink
            to={"/signUp"}
            style={{
              textDecoration: "none",
              color: "#3C87DF",
            }}
            className={styles.unSelectable}
          >
            Создать ID
          </NavLink>
        </div>
        <br />
        <Button fontSize={16} title={"Войти"} width={280} />
      </div>
      <Loader loading={loading} />
    </div>
  );
};

export default Auth;
