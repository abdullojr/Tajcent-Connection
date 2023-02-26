import React from "react";
import styles from "./styles.module.scss";
import Input from "../../../Components/Input";
import Button from "../../../Components/button";

import LOGO from "../../../assets/img/LOGO.png";
import Stepper from "../../../Components/Stepper";
import If from "../../../Components/If";

const Register = () => {
  const [step, setStep] = React.useState(1);
  const steps = 4;

  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [UserID, setUserID] = React.useState("");
  const [password, setPassword] = React.useState("");

  const view = {
    fullname: "",
    email: "sss@gmail.com",

    idUsername: "",
    password: "password",

    profile: "image",
  };

  return (
    <div className={styles.container}>
      <img src={LOGO} width={200} height={100} />
      <If condition={step === 1}>
        <p
          style={{
            width: "300px",
            textAlign: "center",
            color: "#3C87DF",
          }}
        >
          Введите ваши данные
        </p>
        <Input showIcon={false} placeholder={"Полное имя"} type={"text"} />
        <Input
          showIcon={false}
          placeholder={"Электронная почта"}
          type={"text"}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            width: "300px",
          }}
          children={
            <p
              style={{
                cursor: "pointer",
                color: "#3C87DF",
              }}
              onClick={() => (window.location.hash = "/auth")}
            >
              Вернуться к логину
            </p>
          }
        />
      </If>
      <If condition={step === 2}>
        <p
          style={{
            width: "300px",
            textAlign: "center",
            color: "#3C87DF",
          }}
        >
          Создть ID
        </p>
        <Input showIcon={false} placeholder={"ID пользователя"} type={"text"} />
        <Input placeholder={"Пароль"} type={"password"} />
      </If>
      <If condition={step === 3}>
        <p
          style={{
            width: "300px",
            textAlign: "center",
            color: "#FEB933",
          }}
        >
          Мы отправили 5-значный код подтверждения на вашу электронную почту.
          Введите код для подтверждения вашей личности.
        </p>
        <Input
          showIcon={false}
          placeholder={"Код подтверждения"}
          type={"text"}
        />
      </If>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "300px",
        }}
      >
        <Button
          title={"Пред."}
          width={80}
          fontSize={14}
          onClick={() => {
            if (step - 1 !== 0) {
              setStep(step - 1);
            }
          }}
        />
        <Button
          title={"След."}
          width={80}
          fontSize={14}
          onClick={() => {
            if (step < steps && step != steps) {
              setStep(step + 1);
            }
          }}
        />
      </div>

      <br />
      <Stepper size={30} steps={steps} step={step} />
    </div>
  );
};

export default Register;
