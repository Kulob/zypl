import React from 'react'
import { useForm } from 'react-hook-form'
type FormValues =  {
    username: string
    email: string
}
const Input = () => {
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<FormValues>({mode: "onBlur"})

    const onSubmit = (data: FormValues) => {
        console.log("Form",data);
        reset()
    }

    console.log(errors.username?.message);
    
  return (
    <form className="input_group" style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id='username'
            {...register("username", { required: {
                value: true,
                message: "User Error"
            } })}/>
            <label htmlFor="username">debounce тест</label>
            <span style={{color:'red'}}>{errors.username?.message}</span>
            {/* /////////////////////////// */}
            <input type="email" id='email'
            {...register("email", { pattern: {
                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message: "User Error"
            } })}/>
            <label htmlFor="email">debounce тест</label>
            <span style={{color:'red'}}>{errors.email?.message}</span>
            <button type='submit'>Submit</button>
        </form>
  )
}

export default Input