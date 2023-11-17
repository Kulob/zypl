import React, { SyntheticEvent, useRef, useState } from 'react'
import './textarea.scss'

const Textarea = () => {
    const textRef = useRef<any>();
    const descRef = useRef<any>();



    const onChangeHandler = function (e: SyntheticEvent) {
        const target = e.target as HTMLTextAreaElement;
        textRef.current.style.height = "120px";
        textRef.current.style.height = `${target.scrollHeight}px`;
        descRef.current.style.top = "10px"
      };
  return (
    <div className="textarea_content">
        <textarea
          name="описание"
          required
          ref={textRef}
          onChange={onChangeHandler}
        />
        <div className="textarea_text" ref={descRef}>Oписание</div>
        <span className="span-error" ref={descRef}>Описание обязательна</span>
      </div>
  )
}

export default Textarea