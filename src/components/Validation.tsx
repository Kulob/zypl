// import React, { useState } from 'react';
// import './app.scss'

// type IProps ={
//   username: string,
//     email: string,
//     password: string,
//     confirmPassword: string
// }

// const FormValidationExample = () => {

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })

//   const [errors, setErrors] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     const {name, value} = e.target;
//     setFormData({
//         ...formData, [name] : value
//     })
//   }

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault()
//     const validationErrors:IProps = {
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     }
//     if(!formData.username.trim()) {
//         validationErrors.username = "username is required"
//     }

//     if(!formData.email.trim()) {
//         validationErrors.email = "email is required"
//     } else if(!/\S+@\S+\.\S+/.test(formData.email)){
//         validationErrors.email = "email is not valid"
//     }

//     if(!formData.password.trim()) {
//         validationErrors.password = "password is required"
//     } else if(formData.password.length < 6){
//         validationErrors.password = "password should be at least 6 char"
//     }

//     if(formData.confirmPassword !== formData.password) {
//         validationErrors.confirmPassword = "password not matched"
//     }

//     setErrors(validationErrors)

//     if(Object.keys(validationErrors).length === 0) {
//         alert("Form Submitted successfully")
//     }

//   }

//   return (
//     <form onSubmit={handleSubmit} style={{color: 'red'}}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           placeholder='username'  
//           autoComplete='off'  
//           onChange={handleChange}   
//         />
//           {errors.username && <span>{errors.username}</span>}  
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           placeholder='example@gmail.com'
//           autoComplete='off'
//           onChange={handleChange} 
//         />
//           {errors.email && <span>{errors.email}</span>}  
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           placeholder='******'
//           onChange={handleChange} 
//         />
//           {errors.password && <span>{errors.password}</span>}  
//       </div>
//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder='******'
//           onChange={handleChange} 
//         />
//           {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidationExample;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import '../components/toggleBox/toggle.scss'
export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const handleFocus = (e: any) => {
    setFocused(true);
};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Registration</h1>
        </div>
        <div className="input_group">
        <input
        data-focused={focused.toString()}
        required
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          })}
        />
        <label className="label-input" htmlFor="">
          Эл.почта
        </label>
        <span  style={{color:'red'}}>{errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}</span>
      </div>
      <div className="input_group">
        <input
        id="passsword"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: true,
            minLength: 5,
            maxLength: 20,
          })}
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
        {/* <div>
          <label>Password</label>
          <input
            placeholder="Enter password"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <span>
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </span>
        </div> */}
        <div>
          <input className="button" onClick={handleFocus} type="submit" />
        </div>
      </form>
    </div>
  );
}