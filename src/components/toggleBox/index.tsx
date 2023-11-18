import React, { SyntheticEvent, useRef, useState } from "react";
import "./toggle.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Textarea from "../textarea";

const ToggleBox = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("Почта обязательно");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const emailhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const pattern = /.{3,}/;
    if (pattern.test(email) === false) {
      setError("Почта обязательно");
    } else if (email) {
      setError("Введите почту правильно");
    } else {
      setError("");
    }
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="input_group">
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          required
          data-emailFocused={emailFocused.toString()}
          onBlur={() => setEmailFocused(true)}
          onChange={emailhandleChange}
        />
        <label className="label-input">Эл.почта</label>
        <span className="span-error">{error}</span>
      </div>
      <Textarea />
      <div className="input_group">
        <input
          id="passsword"
          name="password"
          type={showPassword ? "text" : "password"}
          pattern=".{6,}"
          value={values.password}
          required
          onChange={handleChange}
          onBlur={() => setPasswordFocused(true)}
          data-passwordFocused={passwordFocused.toString()}
          autoComplete="off"
        />
        <label className="label-input" htmlFor="">
          Пароль
        </label>
        <span
          className="password-eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <LuEye /> : <LuEyeOff />}
        </span>
        <span className="span-error">Минимальная длина пароля 6 символов</span>
      </div>
      <div className="input_group">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          pattern={values.password}
          value={values.confirmPassword}
          required
          onChange={handleChange}
          onBlur={() => setPasswordFocused(true)}
          data-passwordFocused={passwordFocused.toString()}
          onFocus={() =>
            values.confirmPassword === "confirmPassword" &&
            setPasswordFocused(true)
          }
          autoComplete="off"
        />
        <label className="label-input" htmlFor="">
          Подтвердите пароль
        </label>
        <span className="span-error">Пароли не совпадают</span>
      </div>
      <div className="checkbox_content">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Запомнит сессию</span>
      </div>
      <button type="submit" onClick={() => setEmailFocused(true)}>
        Подтвердить
      </button>
    </form>
  );
};

export default ToggleBox;
