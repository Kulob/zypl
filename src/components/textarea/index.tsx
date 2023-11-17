import React, { SyntheticEvent, useRef, useState } from "react";
import "./textarea.scss";

type IPropsFocused = {
  focused: boolean
}

const Textarea = ({focused }: IPropsFocused) => {
  const textRef = useRef<any>();
  const descRef = useRef<any>();

  const onChangeHandler = function (e: SyntheticEvent) {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "120px";
    textRef.current.style.height = `${target.scrollHeight}px`;
    descRef.current.style.top = "10px";
  };
  
  return (
    <div className="textarea_content">
      <textarea
        required
        data-focused={focused.toString()}
        ref={textRef}
        onChange={onChangeHandler}
      />
      <div className="textarea_text" ref={descRef}>
        Oписание
      </div>
      <span className="span-error">
        Описание обязательна
      </span>
    </div>
  );
};

export default Textarea;
