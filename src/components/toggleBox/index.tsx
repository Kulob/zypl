import React, { SyntheticEvent, useRef, useState } from "react";
import "./toggle.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Textarea from "../textarea";
import { useForm } from "react-hook-form";

const ToggleBox = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const [emailError,setEmailError] = useState("Почта обязательна")

 
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const handleFocus = (e: any) => {
    setFocused(true);
};
  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const emailhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
  //   if (!re.test(String(e.target.value).toLowerCase())){
  //     setEmailError('NOT Email')
  //   } else {
  //     setEmailError('')
  //   }
    // console.log(e.target.name);
    
  // };
  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="input_group">
        <input
          id="email"
          name="email"
          type="email"

          value={values.email}
          required
          onChange={(e) => handleChange(e)}
          // pattern="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i"
          // onBlur={(e) => handleFocus(e)}
          data-focused={focused.toString()}
        />
        <label className="label-input" htmlFor="">
          Эл.почта
        </label>
        {(focused && emailError) && <span className="span-error">
          {emailError}
          </span>}
      </div>
      <Textarea register={register} errors={errors} focused={focused}/>
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
