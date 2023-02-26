import React from "react";
import styles from "./styles.module.scss";
import Button from "../../Components/button";
import Error from "../../Components/error";
import baseUrl from "../../utils";
import apiPaths from "../../api/apiPaths";
import Loader from "../../Components/loader";
import image from "../../assets/des.jpg";

const Login = () => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLoginView = () => {
    if (navigator.onLine) {
      setLoading(true);
      fetch(baseUrl + apiPaths.checkConnections)
        .then(res => {
          if (res.status === 200) {
            window.location.hash = "/auth";
          } else {
            setLoading(false);
            setTimeout(() => {
              setError("");
            }, 5000);
          }
        })
        .catch(function (err) {
          setError("Проверьте интернет подключения!");
          setLoading(false);
          setTimeout(() => {
            setError("");
          }, 5000);
        });
    } else {
      setError("Нет подключения к Интернету!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1
        style={{
          fontSize: "25px",
        }}
      >
        Добро пожаловать в наше сообщество.
      </h1>
      <br />
      <Button
        fontSize={16}
        title={"Cоединяться"}
        width={300}
        onClick={handleLoginView}
      />

      {<Error label={error} />}
      <Loader loading={loading} />
    </div>
  );
};

export default Login;
