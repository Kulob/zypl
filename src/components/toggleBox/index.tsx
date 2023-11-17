import React, { SyntheticEvent, useRef, useState } from "react";
import "./toggle.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Textarea from "../textarea";
import { useForm } from 'react-hook-form';



const ToggleBox = () => {
  const [values, setValues] = useState({
    email: "",
    desc: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);


  const handleFocus = () => {
    setFocused(true);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
console.log(values);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="input_group">
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          required
          onChange={handleChange}
          onBlur={handleFocus}
          data-focused={focused.toString()}
        />
        <label className="label-input" htmlFor="">
          Эл.почта
        </label>
        <span className="span-error">Почта обязательна</span>
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
          onBlur={handleFocus}
          data-focused={focused.toString()}
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
          onBlur={handleFocus}
          data-focused={focused.toString()}
          onFocus={() =>
           values.confirmPassword === "confirmPassword" && setFocused(true)
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
      <button type="submit">Подтвердить</button>
    </form>
  );
};

export default ToggleBox;
