import React from 'react'
import './inputbox.scss'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { setDebounce, setTrottling } from '../../store/slice/debounceSlice'


const InputBox = () => {
  const dispatch = useAppDispatch()
  const {debounce} = useAppSelector((state) => state.debounce)
  const trottling = useAppSelector((state) => state.debounce.trottling)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDebounce(e.target.value))
  }
  const handleChangeTrottling = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTrottling(e.target.value))
  }
  return (
    <div className='container'>
        <div className="input_group">
            <input type="text" required onChange={handleChange}/>
            <label className='' htmlFor="">debounce тест</label>
        </div>
        <div className="input_group">
            <input type="text" required onChange={handleChangeTrottling}/>
            <label htmlFor="">trottling тест</label>
        </div>
        <div className="debounce">
        <p>Debounce: {debounce}</p>
        <p>Trottle: {trottling}</p>
        </div>
    </div>
  )
}

export default InputBox