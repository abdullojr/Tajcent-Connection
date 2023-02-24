import React from "react";
import styles from "./styles.module.scss";
import Button from "../../Components/button";
import Error from "../../Components/error";
import baseUrl from "../../utils";
import apiPaths from "../../api/apiPaths";

const Login = () => {
  const [error, setError] = React.useState("");

  const handleLoginView = () => {
    if (navigator.onLine) {
      fetch(baseUrl + apiPaths.checkConnections).then(res => {
        if (res.status === 200) {
          window.location.hash = "/auth";
        } else {
          setError("Проверьте интернет подключения!");
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      });
    } else {
      setError("Нет подключения к Интернету!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={styles.container}>
      <h1
        style={{
          fontSize: "25px",
        }}
      >
        Добро пожаловать в наше сообщество.
      </h1>
      <br />
      <Button title={"Cоединяться"} width={300} onClick={handleLoginView} />

      {<Error label={error} />}
    </div>
  );
};

export default Login;
