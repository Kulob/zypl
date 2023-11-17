import React, { SyntheticEvent, useRef, useState } from "react";
import "./toggle.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Textarea from "../textarea";

const ToggleBox = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const [email,setEmail] = useState("")
  const [error,setError] = useState("Почта обязательно")

 
  
  const handleFocus = (e: any) => {
    setFocused(true);
};
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const emailhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
  if(!regex.test(email)){
    setError('Введите почту правильно')
  }
  else{
    setError('')
    return true
  }
    
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="input_group">
        <input
          id="email"
          name="email"
          type="email"
          pattern=".{3,}"
          value={email}
          required
          data-focused={focused.toString()}
          onChange={e =>emailhandleChange(e)}
        />
        <label className="label-input" htmlFor="">
          Эл.почта
        </label>
        <span className="span-error">
        {error}
          </span>
      </div>
      <Textarea focused={focused}/>
      <div className="input_group">
        <input
          id="passsword"
          name="password"
          type={showPassword ? "text" : "password"}
          pattern=".{6,}"
          value={values.password}
          required
          onChange={handleChange}
          // onBlur={handleFocus}
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
          // onBlur={handleFocus}
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
      <button type="submit" onClick={handleFocus}>
        Подтвердить
      </button>
    </form>
  );
};

export default ToggleBox;
